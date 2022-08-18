---
layout: "default"
title: "JavaScript Accessed Information"
description: "testing tool | sunarch"
permalink: "/js-info"

styles:
    - "/js-info/js-info.css"
scripts:
    - "/js-info/js-info.js"
body_onload: "eh_load_body();"
---
<!--
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
-->

[< home](../index.md)

{% include noscript.html %}

<input type="button" class="refreshbutton" onClick="eh_button_refresh();" value="Refresh" />

## Navigator

<table class="jsinfo">
    <tbody>
        <tr>
            <td>userAgent</td>
            <td id="navigator_userAgent"></td>
        </tr>
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
            <td>platform</td>
            <td id="navigator_platform"></td>
        </tr>
        <tr>
            <td>cookieEnabled</td>
            <td id="navigator_cookieEnabled"></td>
        </tr>
        <tr>
            <td>javaEnabled()</td>
            <td id="navigator_javaEnabled_fn"></td>
        </tr>
    </tbody>
</table>

## Screen

<table class="jsinfo">
    <tbody>
        <tr>
            <td>width / height</td>
            <td>
                <span id="screen_width" class="item-first"></span>
                <span id="screen_height" class="item-second"></span>
            </td>
        </tr>
        <tr>
            <td>availWidth / availHeight</td>
            <td>
                <span id="screen_availWidth" class="item-first"></span>
                <span id="screen_availHeight" class="item-second"></span>
            </td>
        </tr>
        <tr>
            <td>colorDepth</td>
            <td id="screen_colorDepth"></td>
        </tr>
        <tr>
            <td>pixelDepth</td>
            <td id="screen_pixelDepth"></td>
        </tr>
    </tbody>
</table>

## Window

<table class="jsinfo">
    <tbody>
        <tr>
            <td>name</td>
            <td id="window_name"></td>
        </tr>
        <tr>
            <td>opener</td>
            <td id="window_opener"></td>
        </tr>
        <tr>
            <td>closed</td>
            <td id="window_closed"></td>
        </tr>
        <tr>
            <td>defaultStatus</td>
            <td id="window_defaultStatus"></td>
        </tr>
        <tr>
            <td>status</td>
            <td id="window_status"></td>
        </tr>
        <tr>
            <td>outerWidth / outerHeight</td>
            <td>
                <span id="window_outerWidth" class="item-first"></span>
                <span id="window_outerHeight" class="item-second"></span>
            </td>
        </tr>
        <tr>
            <td>innerWidth / innerHeight</td>
            <td>
                <span id="window_innerWidth" class="item-first"></span>
                <span id="window_innerHeight" class="item-second"></span>
            </td>
        </tr>
        <tr>
            <td>pageXOffset / pageYOffset</td>
            <td>
                <span id="window_pageXOffset" class="item-first"></span>
                <span id="window_pageYOffset" class="item-second"></span>
            </td>
        </tr>
        <tr>
            <td>screenLeft / screenTop</td>
            <td>
                <span id="window_screenLeft" class="item-first"></span>
                <span id="window_screenTop" class="item-second"></span>
            </td>
        </tr>
        <tr>
            <td>screenX / screenY</td>
            <td>
                <span id="window_screenX" class="item-first"></span>
                <span id="window_screenY" class="item-second"></span>
            </td>
        </tr>
    </tbody>
</table>

## Location

<table class="jsinfo">
    <tbody>
        <tr>
            <td>href</td>
            <td id="location_href"></td>
        </tr>
        <tr>
            <td>protocol</td>
            <td id="location_protocol"></td>
        </tr>
        <tr>
            <td>host</td>
            <td id="location_host"></td>
        </tr>
        <tr>
            <td>hostname</td>
            <td id="location_hostname"></td>
        </tr>
        <tr>
            <td>port</td>
            <td id="location_port"></td>
        </tr>
        <tr>
            <td>pathname</td>
            <td id="location_pathname"></td>
        </tr>
        <tr>
            <td>search</td>
            <td id="location_search"></td>
        </tr>
        <tr>
            <td>hash</td>
            <td id="location_hash"></td>
        </tr>
    </tbody>
</table>

## History

<table class="jsinfo">
    <tbody>
        <tr>
            <td>length</td>
            <td id="history_length"></td>
        </tr>
    </tbody>
</table>
