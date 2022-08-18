// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.


const jai = {
    navigator: [
        "userAgent",
        "appCodeName",
        "appName",
        "appVersion",
        "platform",
        "cookieEnabled"
    ],
    screen: [
        "width", "height",
        "availWidth", "availHeight",
        "colorDepth", 
        "pixelDepth"
    ],
    window: [
        "name",
        "opener",
        "closed",
        "defaultStatus",
        "status",
        "outerWidth", "outerHeight",
        "innerWidth", "innerHeight",
        "pageXOffset", "pageYOffset",
        "screenLeft", "screenTop",
        "screenX", "screenY"
    ],
    location: [
        "href",
        "protocol",
        "host",
        "hostname",
        "port",
        "pathname",
        "search",
        "hash"
    ],
    history: [
        "length"
    ]
};

const category_list = Object.keys(jai);

// update calculated values

function update_all() {
    update_property_based();
    update_function_based();
}

function update_property_based() {

    for (category of category_list) {
        const item_list = jai[category];
        
        for (item of item_list) {
            const value = eval(category + "." + item);
            write_item_value(category, item, value);
        }
    }
}

function update_function_based() {
    const java_enabled = navigator.javaEnabled();
    document.getElementById('navigator_javaEnabled_fn').innerHTML = java_enabled;
}

// event handlers - auto

function eh_load_body() {
    update_all();
}

// event handlers - buttons

function eh_button_refresh() {
    update_all();
}

// DOM - write values

function write_item_value(category, item, new_value) {
    const tag_id = category + "_" + item;
    document.getElementById(tag_id).innerHTML = new_value;
}
