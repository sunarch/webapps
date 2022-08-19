// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

// DOM - write values

function write_item_value(category, item, new_value) {
    const tag_id = category + "_" + item;
    document.getElementById(tag_id).innerHTML = new_value;
}
