// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

window.onload = function() {
    mapObject = document.getElementById("map-object");

    // It's important to add an load event listener to the object,
    // as it will load the svg doc asynchronously
    //mapObject.addEventListener("load",function(){

    // get the inner DOM of alpha.svg
    var svgDoc = mapObject.contentDocument;
    // get the inner element by id
    var overlayOne = svgDoc.getElementById("128-128");
    // add behaviour
    overlayOne.addEventListener("mousedown",function(){

            infoBoxElements = document.getElementById("info-box").children;
            infoBoxElements[1].innerHTML = "coodinates: x/z"
            infoBoxElements[2].innerHTML = "type: ???";
            infoBoxElements[3].innerHTML = "owner: ???";
            infoBoxElements[4].innerHTML = Math.floor((Math.random() * 1000000) + 1).toString();
        }, false);
    //}, false);
}
