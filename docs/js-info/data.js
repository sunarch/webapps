// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

const jai = {
    navigator: [
        "userAgent",
        "appCodeName",
        "appName",
        "appVersion",
        "buildID",
        "vendor", "vendorSub",
        "product", "productSub",
        "platform",
        "oscpu",
        "hardwareConcurrency",
        "cookieEnabled",
        "pdfViewerEnabled",
        "doNotTrack",
        "language",
        "maxTouchPoints",
        "onLine",
        "webdriver"
    ],
    screen: [
        "width", "height",
        "availWidth", "availHeight",
        "left", "top",
        "availLeft", "availTop",
        "colorDepth", 
        "pixelDepth",
        "mozOrientation"
    ],
    window: [
        "name",
        "opener",
        "origin",
        "closed",
        "defaultStatus",
        "status",
        "outerWidth", "outerHeight",
        "innerWidth", "innerHeight",
        "pageXOffset", "pageYOffset",
        "screenLeft", "screenTop",
        "screenX", "screenY",
        "scrollMaxX", "scrollMaxY",
        "scrollX", "scrollY",
        "crossOriginIsolated",
        "devicePixelRatio",
        "fullScreen",
        "isSecureContext",
        "length",
        "mozInnerScreenX", "mozInnerScreenY"
    ],
    location: [
        "href",
        "origin",
        "protocol",
        "host",
        "hostname",
        "port",
        "pathname",
        "search",
        "hash"
    ],
    document: [
        "referrer",
        "URL",
        "baseURI",
        "documentURI",
        "domain",
        "inputEncoding",
        "characterSet", "charset",
        "contentType",
        "readyState",
        "cookie",
        "dir",
        "isConnected",
        "fullscreenEnabled", "fullscreen",
        "fullscreenElement",
        "lastModified",
        "compatMode",
        "designMode",
        "mozFullScreenEnabled", "mozFullScreen",
        "mozFullScreenElement"
    ],
    history: [
        "length",
        "scrollRestoration",
        "state"
    ]
};

const category_list = Object.keys(jai);
