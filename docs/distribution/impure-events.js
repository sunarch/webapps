// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

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
