// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.


var jai = {
    "window":    ["closed", "defaultStatus", "innerHeight", "innerWidth", 
                  "name", "opener", "outerHeight", "outerWidth", 
                  "pageXOffset", "pageYOffset", "screenLeft", "screenTop", 
                  "screenX", "screenY", "status"],
    "navigator": ["appCodeName", "appName", "appVersion", "cookieEnabled", 
                  "platform", "userAgent"],
    "screen":    ["availHeight", "availWidth", "colorDepth", 
                  "height", "pixelDepth", "width"],
    "history":   ["length"],
    "location":  ["hash", "host", "hostname", "href", 
                  "pathname", "port", "protocol", "search"]
};

category_list = Object.keys(jai) // categories

function refresh() {

    for (n1=0; n1<=category_list.length-1; n1=n1+1) {
        category = category_list[n1];
        item_list = jai[category];
        
        for (n2=0; n2<=item_list.length-1; n2=n2+1) {
            item = item_list[n2];
        
            tag_id = category + "_" + item;
            value = eval(category + "." + item);
            
            document.getElementById(tag_id).innerHTML = String(value);
        }
    }
}
