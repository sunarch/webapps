// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

// update calculated values

function update_all() {
    let force_first = false;
    if (read_total_units() <= read_page_count()) {
        force_first = true;
    }
    
    let page_parts_cutoff = 0.0 - settings.page_parts_cutoff_step;
    
    while (force_first || (read_total_units() > read_page_count() && page_parts_cutoff <= 1.0)) {
        page_parts_cutoff += settings.page_parts_cutoff_step;
        update_entries(page_parts_cutoff);
        update_totals();
        force_first = false;
    }

    local_storage_save();
}

function update_entries(page_parts_cutoff) {
    for (let row_num = 1; row_num <= read_total_entries(); row_num++) {
        const entry_count = read_entry_count(row_num);

        const entry_percent = entry_count / read_total_count();
        write_entry_percent(row_num, lib_math_round(entry_percent * 100, 2));
        
        const entry_parts = entry_percent * read_page_count();
        write_entry_parts(row_num, lib_math_round(entry_parts, 4));

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

// create and load data objects

function create_data_object() {
    const data_object = {page_count: read_page_count(), items: []};
    
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
}

// local storage

function local_storage_save() {
    const data_object = create_data_object();
    lib_storage_local_save_json(settings.local_storage_key, data_object);
}

function local_storage_load() {
    const data_object = lib_storage_local_load_json(settings.local_storage_key);
    if (data_object == null) {
        write_page_count(1);
    }
    else {
        load_data_object(data_object);
    }
}
