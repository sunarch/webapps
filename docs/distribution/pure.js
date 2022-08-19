// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

// algorithms

function algo_units(parts, cutoff) {
    // Do not include units if there are no parts at all 
    if (parts == 0) {
        return 0;
    }

    // Include one page if any small-sized parts
    if (parts < 1) {
        return 1;
    }

    const parts_whole = Math.floor(parts);
    const parts_decimals = parts % 1;
    
    // If the decimal part is below the cutoff treshold,
    // do not include an extra page for it
    if (parts_decimals <= cutoff) {
        return parts_whole;
    }
    
    // By default, include an extra page for decimal part
    return parts_whole + 1;
}
