// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

const canvas_id = 'r-canvas';

/* global settings */
let canvas_margin = 10;


function canvas_get() {
    return document.getElementById(canvas_id)
}

function canvas_get_context() {
    const canvas = canvas_get();
    return canvas.getContext('2d');
}


function canvas_clear(context) {
    const canvas = canvas_get();
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function canvas_resize(h_margin = 0) {
    const canvas = canvas_get();

    const total_margin = 2 * canvas_margin;

    const width = window.innerWidth - total_margin - (2 * h_margin);
    canvas.style.width = width + 'px';
    canvas.width = width;

    const height = window.innerHeight - total_margin;
    canvas.style.height = height + 'px';
    canvas.height = height;
    
    // horizontal margins to offset hex col leftover on the side
    canvas.style.marginLeft = h_margin + 'px';
    canvas.style.marginRight = h_margin + 'px';
}

