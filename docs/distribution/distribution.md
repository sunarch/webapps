---
layout: "default"
title: "Distribution"
description: "calculator tool | sunarch"
permalink: "/distribution"

styles:
    - "/distibution/distibution.css"
scripts:
    - "/distibution/distibution.js"
    - "/distibution/predefined.js"
body_onload: "eh_load_body();"
---
<!--
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
-->

[< home](../index.md)

<noscript>
    <p>JavaScript is required to use this application.</p>
</noscript>

# Distribution

<p>
    <label for="page-count">Available units: </label>
    <input type="number" name="page-count" id="page-count" onFocus="eh_focus_page_count();" onChange="eh_change_page_count();" />
    <input type="button" value="Clear entries" onClick="eh_button_clear_entries();" />
    <input type="button" value="Clear all" onClick="eh_button_clear_all();" />
</p>
<table>
    <thead>
        <tr>
            <td>Name</td>
            <td>Count</td>
            <td>Percent</td>
            <td>Parts</td>
            <td>Units</td>
        </tr>
        <tr>
            <td><span id="total-entries" class="total"></span></td>
            <td><span id="total-count" class="total"></span></td>
            <td><span id="total-percent" class="total percent"></td>
            <td><span id="total-parts" class="total"></td>
            <td><span id="total-units" class="total"></td>
        </tr>
    </thead>
    <tbody id="entries-container"></tbody>
</table>
<p>
    <input type="button" value="Add entry" onClick="eh_button_add_entry();" />
</p>

## Predefined entries:

<table>
    <tbody id="predefs-container">
        <tr>
            <td>Latin 1-5</td>
            <td><input type="button" value="Load" onClick="eh_button_load_predef('latin_1_5');" /></td>
            <td><input type="button" value="Add" onClick="eh_button_add_predef('latin_1_5');" /></td>
        </tr>
        <tr>
            <td>Magyar-latin 1-5</td>
            <td><input type="button" value="Load" onClick="eh_button_load_predef('magyar_latin_1_5');" /></td>
            <td><input type="button" value="Add" onClick="eh_button_add_predef('magyar_latin_1_5');" /></td>
        </tr>
    </tbody>
</table>
