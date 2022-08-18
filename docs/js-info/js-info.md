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
            <td>buildID</td>
            <td id="navigator_buildID"></td>
        </tr>
        <tr>
            <td>vendor / vendorSub</td>
            <td>
                <span id="navigator_vendor" class="item-first"></span>
                <span id="navigator_vendorSub" class="item-second"></span>
            </td>
        </tr>
        <tr>
            <td>product / productSub</td>
            <td>
                <span id="navigator_product" class="item-first"></span>
                <span id="navigator_productSub" class="item-second"></span>
            </td>
        </tr>
        <tr>
            <td>platform</td>
            <td id="navigator_platform"></td>
        </tr>
        <tr>
            <td>oscpu</td>
            <td id="navigator_oscpu"></td>
        </tr>
        <tr>
            <td>hardwareConcurrency</td>
            <td id="navigator_hardwareConcurrency"></td>
        </tr>
        <tr>
            <td>cookieEnabled</td>
            <td id="navigator_cookieEnabled"></td>
        </tr>
        <tr>
            <td>pdfViewerEnabled</td>
            <td id="navigator_pdfViewerEnabled"></td>
        </tr>
        <tr>
            <td>doNotTrack</td>
            <td id="navigator_doNotTrack"></td>
        </tr>
        <tr>
            <td>language</td>
            <td id="navigator_language"></td>
        </tr>
        <tr>
            <td>maxTouchPoints</td>
            <td id="navigator_maxTouchPoints"></td>
        </tr>
        <tr>
            <td>onLine</td>
            <td id="navigator_onLine"></td>
        </tr>
        <tr>
            <td>webdriver</td>
            <td id="navigator_webdriver"></td>
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
            <td>left / top</td>
            <td>
                <span id="screen_left" class="item-first"></span>
                <span id="screen_top" class="item-second"></span>
            </td>
        </tr>
        <tr>
            <td>availLeft / availTop</td>
            <td>
                <span id="screen_availLeft" class="item-first"></span>
                <span id="screen_availTop" class="item-second"></span>
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
        <tr>
            <td>mozOrientation</td>
            <td id="screen_mozOrientation"></td>
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
            <td>origin</td>
            <td id="window_origin"></td>
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
        <tr>
            <td>scrollMaxX / scrollMaxY</td>
            <td>
                <span id="window_scrollMaxX" class="item-first"></span>
                <span id="window_scrollMaxY" class="item-second"></span>
            </td>
        </tr>
        <tr>
            <td>scrollX / scrollY</td>
            <td>
                <span id="window_scrollX" class="item-first"></span>
                <span id="window_scrollY" class="item-second"></span>
            </td>
        </tr>
        <tr>
            <td>crossOriginIsolated</td>
            <td id="window_crossOriginIsolated"></td>
        </tr>
        <tr>
            <td>devicePixelRatio</td>
            <td id="window_devicePixelRatio"></td>
        </tr>
        <tr>
            <td>fullScreen</td>
            <td id="window_fullScreen"></td>
        </tr>
        <tr>
            <td>isSecureContext</td>
            <td id="window_isSecureContext"></td>
        </tr>
        <tr>
            <td>length</td>
            <td id="window_length"></td>
        </tr>
        <tr>
            <td>mozInnerScreenX / mozInnerScreenY</td>
            <td>
                <span id="window_mozInnerScreenX" class="item-first"></span>
                <span id="window_mozInnerScreenY" class="item-second"></span>
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
            <td>origin</td>
            <td id="location_origin"></td>
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

## Document

<table class="jsinfo">
    <tbody>
        <tr>
            <td>referrer</td>
            <td id="document_referrer"></td>
        </tr>
        <tr>
            <td>URL</td>
            <td id="document_URL"></td>
        </tr>
        <tr>
            <td>baseURI</td>
            <td id="document_baseURI"></td>
        </tr>
        <tr>
            <td>documentURI</td>
            <td id="document_documentURI"></td>
        </tr>
        <tr>
            <td>domain</td>
            <td id="document_domain"></td>
        </tr>
        <tr>
            <td>inputEncoding</td>
            <td id="document_inputEncoding"></td>
        </tr>
        <tr>
            <td>characterSet / charset</td>
            <td>
                <span id="document_characterSet" class="item-first"></span>
                <span id="document_charset" class="item-second"></span>
            </td>
        </tr>
        <tr>
            <td>contentType</td>
            <td id="document_contentType"></td>
        </tr>
        <tr>
            <td>doctype</td>
            <td id="document_doctype"></td>
        </tr>
        <tr>
            <td>readyState</td>
            <td id="document_readyState"></td>
        </tr>
        <tr>
            <td>cookie</td>
            <td id="document_cookie"></td>
        </tr>
        <tr>
            <td>dir</td>
            <td id="document_dir"></td>
        </tr>
        <tr>
            <td>isConnected</td>
            <td id="document_isConnected"></td>
        </tr>
        <tr>
            <td>fullscreenEnabled / fullscreen</td>
            <td>
                <span id="document_fullscreenEnabled" class="item-first"></span>
                <span id="document_fullscreen" class="item-second"></span>
            </td>
        </tr>
        <tr>
            <td>fullscreenElement</td>
            <td id="document_fullscreenElement"></td>
        </tr>
        <tr>
            <td>lastModified</td>
            <td id="document_lastModified"></td>
        </tr>
        <tr>
            <td>compatMode</td>
            <td id="document_compatMode"></td>
        </tr>
        <tr>
            <td>designMode</td>
            <td id="document_designMode"></td>
        </tr>
        <tr>
            <td>mozFullScreenEnabled / mozFullScreen</td>
            <td>
                <span id="document_mozFullScreenEnabled" class="item-first"></span>
                <span id="document_mozFullScreen" class="item-second"></span>
            </td>
        </tr>
        <tr>
            <td>mozFullScreenElement</td>
            <td id="document_mozFullScreenElement"></td>
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
        <tr>
            <td>scrollRestoration</td>
            <td id="history_scrollRestoration"></td>
        </tr>
        <tr>
            <td>state</td>
            <td id="history_state"></td>
        </tr>
    </tbody>
</table>
