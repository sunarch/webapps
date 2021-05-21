---
layout: "default"
title: "JavaScript Accessed Information"
description: "testing tool | sunarch"
permalink: "/tools/js-info"
---
<!--
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
-->

[< home](../index.md)

<style type="text/css">
    input.refreshbutton {
        width: 120px;
        height: 40px;
        font-size: 20px;
        padding: 2px;
        position: fixed;
        top: 5px;
        right: 5px;
        opacity: 1.0;
    }
    
    table.jsinfo {
        display: table;
        width: 100%;
    }
    table.jsinfo td {
        width: 50%;
    }
</style>

<script type="text/javascript" language="JavaScript">
        
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
        document.getElementById("errormessage").style.display = "none";
        
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

</script>

<h3 id="errormessage">JavaScript is not enabled in your browser!</h3>

<input type="button" class="refreshbutton" onClick="refresh()" value="Refresh" />

## Window

<table class="jsinfo">
    <tbody>
        <tr>
            <td>closed</td>
            <td id="window_closed"></td>
        </tr>
        <tr>
            <td>defaultStatus</td>
            <td id="window_defaultStatus"></td>
        </tr>
        <tr>
            <td>innerHeight</td>
            <td id="window_innerHeight"></td>
        </tr>
        <tr>
            <td>innerWidth</td>
            <td id="window_innerWidth"></td>
        </tr>
        <tr>
            <td>name</td>
            <td id="window_name"></td>
        </tr>
        <tr>
            <td>opener</td>
            <td id="window_opener"></td>
        </tr>
        <tr>
            <td>outerHeight</td>
            <td id="window_outerHeight"></td>
        </tr>
        <tr>
            <td>outerWidth</td>
            <td id="window_outerWidth"></td>
        </tr>
        <tr>
            <td>pageXOffset</td>
            <td id="window_pageXOffset"></td>
        </tr>
        <tr>
            <td>pageYOffset</td>
            <td id="window_pageYOffset"></td>
        </tr>
        <tr>
            <td>screenLeft</td>
            <td id="window_screenLeft"></td>
        </tr>
        <tr>
            <td>screenTop</td>
            <td id="window_screenTop"></td>
        </tr>
        <tr>
            <td>screenX</td>
            <td id="window_screenX"></td>
        </tr>
        <tr>
            <td>screenY</td>
            <td id="window_screenY"></td>
        </tr>
        <tr>
            <td>status</td>
            <td id="window_status"></td>
        </tr>
    </tbody>
</table>

## Navigator

<table class="jsinfo">
    <tbody>
        <tr>
            <td>appCodeName</td>
            <td id="navigator_appCodeName"></td>
        </tr>
        <tr>
            <td>appName</td>
            <td id="navigator_appName"></td>
        </tr>
        <tr>
            <td>appVersion</td>
            <td id="navigator_appVersion"></td>
        </tr>
        <tr>
            <td>cookieEnabled</td>
            <td id="navigator_cookieEnabled"></td>
        </tr>
        <tr>
            <td>platform</td>
            <td id="navigator_platform"></td>
        </tr>
        <tr>
            <td>userAgent</td>
            <td id="navigator_userAgent"></td>
        </tr>
        <tr>
            <td>javaEnabled</td>
            <td>
                <script type="text/javascript">
                var javaEnabled = navigator.javaEnabled();
                document.write("javaEnabled() = "+javaEnabled);
                </script>
            </td>
        </tr>
    </tbody>
</table>

## Screen

<table class="jsinfo">
    <tbody>
        <tr>
            <td>availHeight: </td>
            <td id="screen_availHeight"></td>
        </tr>
        <tr>
            <td>availWidth: </td>
            <td id="screen_availWidth"></td>
        </tr>
        <tr>
            <td>colorDepth: </td>
            <td id="screen_colorDepth"></td>
        </tr>
        <tr>
            <td>height: </td>
            <td id="screen_height"></td>
        </tr>
        <tr>
            <td>pixelDepth: </td>
            <td id="screen_pixelDepth"></td>
        </tr>
        <tr>
            <td>width: </td>
            <td id="screen_width"></td>
        </tr>
    </tbody>
</table>

## History

<table class="jsinfo">
    <tbody>
        <tr>
            <td>length: </td>
            <td id="history_length"></td>
        </tr>
    </tbody>
</table>

## Location

<table class="jsinfo">
    <tbody>
        <tr>
            <td>hash: </td>
            <td id="location_hash"></td>
        </tr>
        <tr>
            <td>host: </td>
            <td id="location_host"></td>
        </tr>
        <tr>
            <td>hostname: </td>
            <td id="location_hostname"></td>
        </tr>
        <tr>
            <td>href: </td>
            <td id="location_href"></td>
        </tr>
        <tr>
            <td>pathname: </td>
            <td id="location_pathname"></td>
        </tr>
        <tr>
            <td>port: </td>
            <td id="location_port"></td>
        </tr>
        <tr>
            <td>protocol: </td>
            <td id="location_protocol"></td>
        </tr>
        <tr>
            <td>search: </td>
            <td id="location_search"></td>
        </tr>
    </tbody>
</table>

<script type="text/javascript" language="JavaScript">
    refresh();
</script>
