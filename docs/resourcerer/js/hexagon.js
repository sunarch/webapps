// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Side (a)
// Area
// Perimeter
// Long diagonal (d)
// Short diagonal (s)
// Circumcircle radius (R) -> (rc)
// Inradius / Apothem (r) -> (ri)

// Area = Apothem * Perimeter / 2
// Perimeter = 6 * Side
// Long diagonal = 2 * Side
// Short diagonal = √3 * Side
// Circumcircle radius = Side
// Inradius / Apothem = √3/2 * Side

class Hexagon {
    constructor(side, col = null, row = null) {
        this.a = side;
        this.d = hex_d_by_a(side);
        this.s = hex_s_by_a(side);
        this.rc = hex_rc_by_a(side);
        this.ri = hex_ri_by_a(side);

        this.x_outer_left = null;
        this.x_inner_left = null;
        this.x_mid = null;
        this.x_inner_right = null;
        this.x_outer_right = null;

        this.vertical_correction = null;
        this.y_top = null;
        this.y_mid = null;
        this.y_bottom = null;
        
        if (col !== null && row !== null) {
            this.set_position(col, row);
        }
    }
  
    area() {
        return hex_area_by_a(this.a);
    }

    perimeter() {
        return hex_perimeter_by_a(this.a);
    }

    set_position(col, row) {
        // col
        const h_unit = this.rc / 2; // rc == a
        this.x_outer_left = col * (3 * h_unit);
        this.x_inner_left = this.x_outer_left + h_unit;
        this.x_mid = this.x_inner_left + h_unit;
        this.x_inner_right = this.x_mid + h_unit;
        this.x_outer_right = this.x_inner_right + h_unit;
        
        // row
        this.vertical_correction = (col % 2 == 1) ? this.ri : 0;
        this.y_top = row * this.s + this.vertical_correction;
        this.y_mid = this.y_top + this.ri;
        this.y_bottom = this.y_mid + this.ri;
    }

    draw(context) {
        // top left
        context.moveTo(this.x_inner_left, this.y_top);
        context.beginPath();
        // top right
        context.lineTo(this.x_inner_right, this.y_top);
        // mid right
        context.lineTo(this.x_outer_right, this.y_mid);
        // bottom right
        context.lineTo(this.x_inner_right, this.y_bottom);
        // bottom left
        context.lineTo(this.x_inner_left, this.y_bottom);
        // mid left
        context.lineTo(this.x_outer_left, this.y_mid);
        // top left
        context.lineTo(this.x_inner_left, this.y_top);
        context.closePath();
        // fill
        context.fillStyle = "white";
        context.fill();
        // draw
        context.stroke();
    }
}

/* values by side */

function hex_area_by_a(side) {
    // Area by Side
    return hex_ri_by_a(side) * hex_perimeter_by_a(side) / 2;
}

function hex_perimeter_by_a(side) {
    // Perimeter by Side
    return side * 6;
}

function hex_d_by_a(side) {
    // Long diagonal by Side
    return side * 2;
}

function hex_s_by_a(side) {
    // Short diagonal by Side
    return Math.sqrt(3) * side;
}

function hex_rc_by_a(side) {
    // Circumference radius by Side
    return side;
}

function hex_ri_by_a(side) {
    // Inradius / Apothem by Side
    return Math.sqrt(3) / 2 * side;
}

/* side by other */

function hex_a_by_s(short_diagonal) {
    // Side by Short diagonal
    return short_diagonal / Math.sqrt(3);
}

function hex_a_by_ri(inradius) {
    // Side by Inradius / Apothem
    return inradius * 2 / Math.sqrt(3);
}
