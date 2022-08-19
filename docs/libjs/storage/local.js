// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

function lib_storage_local_save_json(local_storage_key, data_object) {
    const save_str = JSON.stringify(data_object);
    localStorage.setItem(local_storage_key, save_str);
}

function lib_storage_local_load_json(local_storage_key) {

    const load_str = localStorage.getItem(local_storage_key);

    if (load_str == null) {
        console.log('No data data in local storage to be loaded.');
        return null;
    }

    const data_object = JSON.parse(load_str);
    return data_object;

}
