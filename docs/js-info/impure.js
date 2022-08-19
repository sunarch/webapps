// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

// update calculated values

function update_all() {
    update_property_based();
    update_function_based();
}

function update_property_based() {
    let category;
    let item;

    for (category of category_list) {
        const item_list = jai[category];
        
        for (item of item_list) {
            const value = String(eval(category + "." + item));
            write_item_value(category, item, value);
        }
    }
}

function update_object_based() {
    const languages_list = navigator.languages;
    const languages = "'" + languages_list.join("'; '") + "'";
    document.getElementById('navigator_orientation_type').innerHTML = languages;
    
    // TODO: Add navigator.mimeTypes
    // TODO: Add navigator.plugins
    // TODO: Add navigator.serviceWorker

    const orientation = screen.orientation;
    const type = orientation.type;
    const angle = orientation.angle;
    document.getElementById('screen_orientation_type').innerHTML = type;
    document.getElementById('screen_orientation_angle').innerHTML = angle;
    
    // TODO: ADD window.applicationCache
    // TODO: ADD window.caches
    // TODO: ADD window.clientInformation
    // TODO: ADD window.crypto
    // TODO: ADD window.customElements
    // TODO: ADD window.menubar
    // TODO: ADD window.performance
    // TODO: ADD window.speechSynthesis
    // TODO: ADD window.visualViewport
    
    // TODO: ADD window.locationbar
    // TODO: ADD window.personalbar
    // TODO: ADD window.scrollbars
    // TODO: ADD window.statusbar
    // TODO: ADD window.toolbar
    
    // TODO: ADD window.localStorage
    // TODO: ADD window.sessionStorage
    
    // TODO: ADD document.fonts
    // TODO: ADD document.implementation
    // TODO: ADD document.timeline
    
}

function update_function_based() {
    const java_enabled = navigator.javaEnabled();
    document.getElementById('navigator_javaEnabled_fn').innerHTML = java_enabled;
}
