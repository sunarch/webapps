// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

const program_name = 'Resourcerer';
const program_version = '0.0.1';

/* global settings */
let tick_speed = 5;  // per second
let hexes_per_column = 10; // hex orientation: columns

/* global state */
let redraw = true;


function mainloop() {
    const canvas = canvas_get();
    const ctx = canvas_get_context();
    const grid = new Grid(hexes_per_column, canvas.height, canvas.width);

    function tick() {
        e = events.pop();

        while (events[0] == 'resize') {
            e = events.pop();
        }

        console.log('event count: ' + events.length);

        if (e == 'resize') {
            redraw = true;
        }

        if (redraw) {
            console.log(grid);
            grid.draw(ctx);
            redraw = false;
        }
    }
    
    const seconds = 1 / tick_speed;
    setInterval(tick, seconds * 1000);  
}


class Grid {
    constructor(hexes_per_column, available_height, available_width) {
        this.available_height = available_height;
        this.available_width = available_width;

        this.rows = hexes_per_column;
        this.hex_ri = 0;
        this.hex_a = 0;
        this.calc_rows(hexes_per_column, available_height);

        this.cols = 0;
        this.h_margin = 0;
        this.calc_cols(available_width);

        this.hexes = [];
        this.calc_hexes();
    }
    
    calc_rows(hexes_per_column, available_height) {
        this.rows = hexes_per_column;
        this.hex_s = available_height / (hexes_per_column + 0.5);
        this.hex_a = hex_a_by_s(this.hex_s);
    }

    calc_cols(available_width) {
        const h_unit = 1.5 * this.hex_a;
        const h_unit_correction = 0.5 * this.hex_a;

        function calc_used_width(cols, h_unit, h_unit_correction) {
            return cols * h_unit + h_unit_correction;
        }

        const divided = available_width / h_unit;
        let cols = Math.floor(divided);
        if (available_width < calc_used_width(cols, h_unit, h_unit_correction)) {
            cols -= 1;
        }
        const used_width = calc_used_width(cols, h_unit, h_unit_correction);

        this.cols = cols;
        const last_col_tip_correction = -1;
        this.h_margin = (available_width - used_width) / 2 + last_col_tip_correction;
    }
    
    calc_hexes() {
        this.hexes = [];
        
        for (let col = 0; col < this.cols; col++) {
            for (let row = 0; row < hexes_per_column; row++) {
                this.hexes.push(new Hexagon(this.hex_a, col, row));
            }
        }
    }
  
    draw(context) {
        canvas_resize(this.h_margin);

        for (let hex of this.hexes) {
            hex.draw(context);
        }
    }
}
