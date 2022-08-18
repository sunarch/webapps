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
            <td>javaEnabled()</td>
            <td id="navigator_javaEnabled_fn"></td>
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

## History

<table class="jsinfo">
    <tbody>
        <tr>
            <td>length: </td>
            <td id="history_length"></td>
        </tr>
    </tbody>
</table>
