// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

// globals - data objects

const predefs = {};

// globals - settings

let page_parts_cutoff_step = 0.1;
let local_storage_key = 'distribution';

// globals - cache

let cached_page_count = 1;
let cached_total_count = 0;
let cached_total_units = 0;

// math

function round(number, decimal_places) {
  const factor = Math.pow(10, decimal_places)
  return Math.round(number * factor) / factor
}

// algorithms

function algo_units(parts, cutoff) {
    if (parts == 0) {
        return 0;
    }
    if (parts < 1) {
        return 1;
    }

    const parts_whole = Math.floor(parts);
    const parts_decimals = parts % 1;
    
    if (parts_decimals <= cutoff) {
        return parts_whole;
    }
    
    return parts_whole + 1;
}

// update calculated values

function update_all() {
    let force_first = false;
    if (cached_total_units <= cached_page_count) {
        force_first = true;
    }
    
    let page_parts_cutoff = 0.0 - page_parts_cutoff_step;
    
    while (force_first || (cached_total_units > cached_page_count && page_parts_cutoff <= 1.0)) {
        page_parts_cutoff += page_parts_cutoff_step;
        update_entries(page_parts_cutoff);
        update_totals();
        force_first = false;
    }
}

function update_entries(page_parts_cutoff) {
    for (let row_num = 1; row_num <= read_total_entries(); row_num++) {
        const entry_count = read_entry_count(row_num);

        const entry_percent = entry_count / cached_total_count;
        write_entry_percent(row_num, round(entry_percent * 100, 2));
        
        const entry_parts = entry_percent * cached_page_count;
        write_entry_parts(row_num, round(entry_parts, 4));

        const entry_units = algo_units(entry_parts, page_parts_cutoff);
        write_entry_units(row_num, entry_units)
    }
}

function update_totals() {
    let total_count = 0;
    let total_percent = 0;
    let total_parts = 0;
    let total_units = 0;
    
    for (let row_num = 1; row_num <= read_total_entries(); row_num++) {
        total_count += read_entry_count(row_num);
        total_percent += read_entry_percent(row_num);
        total_parts += read_entry_parts(row_num);
        total_units += read_entry_units(row_num);
    }
    
    write_total_entries();
    write_total_count(total_count);
    write_total_percent(total_percent);
    write_total_parts(total_parts);
    write_total_units(total_units);
}

// event handlers - auto

function eh_load_body() {
    local_storage_load();
}

// event handlers - buttons

function eh_button_clear_entries() {
    delete_all_entries();
}

function eh_button_clear_all() {
    delete_all_entries();
    write_page_count(0);
}

function eh_button_add_entry() {
    insert_entry();
}

// event handlers - page count

function eh_focus_page_count() {
    const page_count = read_page_count();
    write_page_count_prev(page_count);
}

function eh_change_page_count() {
    const page_count = read_page_count();
    const prev_page_count = read_page_count_prev();
    write_page_count(page_count, prev_page_count);
}

// event handlers - entries

function eh_change_entry_name(row_num) {
    write_entry_name(row_num);
}

function eh_focus_entry_count(row_num) {
    const entry_count = read_entry_count(row_num);
    write_entry_count_prev(row_num, entry_count);
}

function eh_change_entry_count(row_num) {
    const entry_count = read_entry_count(row_num);
    const prev_entry_count = read_entry_count_prev(row_num);
    write_entry_count(row_num, entry_count, prev_entry_count);
}

// event handlers - predefs

function eh_button_load_predef(predef_name) {
    delete_all_entries();
    load_data_object(predefs[predef_name]);
}

function eh_button_add_predef(predef_name) {
    load_data_object(predefs[predef_name]);
}

// create and load data objects

function create_data_object() {
    const data_object = {page_count: cached_page_count, items: []};
    
    for (let row_num = 1; row_num <= read_total_entries(); row_num++) {
        data_object.items.push(
            {
                name: read_entry_name(row_num),
                count: read_entry_count(row_num)
            }
        );
    }
    
    return data_object;
}

function load_data_object(data_object) {
    write_page_count(data_object.page_count);
    
    for (item of data_object.items) {
        insert_entry(item.name, item.count);
    }
    update_all();
    local_storage_save();
}

// local storage

function local_storage_save() {
    const data_object = create_data_object();
    const save_str = JSON.stringify(data_object);
    localStorage.setItem(local_storage_key, save_str);
}

function local_storage_load() {
    const load_str = localStorage.getItem(local_storage_key);
    
    if (load_str == null) {
        console.log('No data data in local storage to be loaded.');
        return;
    }
    const data_object = JSON.parse(load_str);
    load_data_object(data_object);
}

// DOM - create and insert elements

function create_entry(row_num, name = "", count = 0) {
    const tr = document.createElement("tr");
    tr.id = "entry-" + row_num;

    const td_name = document.createElement("td");
    const input_name = document.createElement("input");
    input_name.type = "text";
    input_name.id = "entry-" + row_num + "-name";
    input_name.value = name;
    input_name.onchange = function(){eh_change_entry_name(row_num);};
    td_name.appendChild(input_name);
    tr.appendChild(td_name);
    
    const td_count = document.createElement("td");
    const input_count = document.createElement("input");
    input_count.type = "number";
    input_count.id = "entry-" + row_num + "-count";
    input_count.value = count;
    input_count.onfocus = function(){eh_focus_entry_count(row_num);};
    input_count.onchange = function(){eh_change_entry_count(row_num);};
    td_count.appendChild(input_count);
    tr.appendChild(td_count);
    
    const td_percent = document.createElement("td");
    td_percent.id = "entry-" + row_num + "-percent";
    td_percent.className = "percent";
    tr.appendChild(td_percent);
    
    const td_parts = document.createElement("td");
    td_parts.id = "entry-" + row_num + "-parts";
    tr.appendChild(td_parts);
    
    const td_units = document.createElement("td");
    td_units.id = "entry-" + row_num + "-units";
    tr.appendChild(td_units);
    
    return tr;
}

function insert_entry(name = "", count = 0) {
    const row_num = read_total_entries() + 1;
    const new_row = create_entry(row_num, name, count);
    document.getElementById("entries-container").appendChild(new_row);
    update_all();
    local_storage_save();
}

// DOM - delete elements

function delete_all_entries() {
    document.getElementById("entries-container").innerHTML = "";
    update_all();
}

// DOM - read values

function read_page_count(row_num) {
    return Number(document.getElementById("page-count").value);
}

function read_page_count_prev(row_num) {
    return Number(document.getElementById("page-count").prev_value);
}

function read_total_entries() {
    return document.getElementById("entries-container").childElementCount;
}

function read_entry_name(row_num) {
    return document.getElementById("entry-" + row_num + "-name").value;
}

function read_entry_count(row_num) {
    return Number(document.getElementById("entry-" + row_num + "-count").value);
}

function read_entry_count_prev(row_num) {
    return Number(document.getElementById("entry-" + row_num + "-count").prev_value);
}

function read_entry_percent(row_num) {
    return Number(document.getElementById("entry-" + row_num + "-percent").innerHTML);;
}

function read_entry_parts(row_num) {
    return Number(document.getElementById("entry-" + row_num + "-parts").innerHTML);;
}

function read_entry_units(row_num) {
    return Number(document.getElementById("entry-" + row_num + "-units").innerHTML);;
}

// DOM - write general values

function write_page_count(new_value, prev_value = 1) {
    if (new_value < 1) {
        new_value = prev_value;
    }
    cached_page_count = new_value;
    document.getElementById("page-count").value = new_value;
    update_all();
    local_storage_save();
}

function write_page_count_prev(new_value) {
    document.getElementById("page-count").prev_value = new_value;
}

// DOM - write entry values

function write_entry_name(row_num, new_value) {
    document.getElementById("entry-" + row_num + "-name").value = new_value;
    local_storage_save();
}

function write_entry_count(row_num, new_value, prev_value = 0) {
    if (new_value < 0) {
        new_value = prev_value;
    }
    document.getElementById("entry-" + row_num + "-count").value = new_value;
    update_all();
    local_storage_save();
}

function write_entry_count_prev(row_num, new_value) {
    document.getElementById("entry-" + row_num + "-count").prev_value = new_value;
}

function write_entry_percent(row_num, new_value) {
    document.getElementById("entry-" + row_num + "-percent").innerHTML = new_value;
}

function write_entry_parts(row_num, new_value) {
    document.getElementById("entry-" + row_num + "-parts").innerHTML = new_value;
}

function write_entry_units(row_num, new_value) {
    document.getElementById("entry-" + row_num + "-units").innerHTML = new_value;
}

// DOM - write totals

function write_total_entries() {
    document.getElementById("total-entries").innerHTML = read_total_entries();
}

function write_total_count(new_value) {
    cached_total_count = new_value;
    document.getElementById("total-count").innerHTML = new_value;
}

function write_total_percent(new_value) {
    document.getElementById("total-percent").innerHTML = round(new_value, 2);
}

function write_total_parts(new_value) {
    document.getElementById("total-parts").innerHTML = round(new_value, 4);
}

function write_total_units(new_value) {
    cached_total_units = new_value;
    document.getElementById("total-units").innerHTML = new_value;
}

