// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

let events = [];


function eh_load(e) {
    console.log('event: load ' + e);
    console.log(e);

    const ctx = canvas_get_context();
    ctx.font = '18pt Arial';
    const title = program_name + ' ' + program_version;
    ctx.fillText(title, 60, 60);
    
    document.getElementById('r-wrapper').style.padding = canvas_margin + 'px';
    
    eh_resize();
       
    mainloop();
}

function eh_resize() {
    console.log('event: resize');
    canvas_resize();
    events.push('resize');
}

function eh_keypress(e) {
    console.log('event: keypress ' + e.key);
    console.log(e);
    events.push(e);
}

function eh_keydown(e) {
    console.log('event: keydown ' + e.key);
    console.log(e);
    events.push(e);
}

function eh_keyup(e) {
    console.log('event: keyup ' + e.key);
    console.log(e);
    events.push(e);
}

function eh_click(e) {
    console.log('event: click ' + e);
    console.log(e);
    events.push(e);
}

function eh_dblclick(e) {
    console.log('event: double click ' + e);
    console.log(e);
    events.push(e);
}

function eh_mousedown(e) {
    console.log('event: mouse down ' + e);
    console.log(e);
    events.push(e);
}

function eh_mouseup(e) {
    console.log('event: mouse up ' + e);
    console.log(e);
    events.push(e);
}

function eh_wheel(e) {
    console.log('event: wheel ' + e);
    console.log(e);
    events.push(e);
}
