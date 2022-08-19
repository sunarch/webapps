// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

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
    document.getElementById("total-percent").innerHTML = lib_math_round(new_value, 2);
}

function write_total_parts(new_value) {
    document.getElementById("total-parts").innerHTML = lib_math_round(new_value, 4);
}

function write_total_units(new_value) {
    cached_total_units = new_value;
    document.getElementById("total-units").innerHTML = new_value;
}
