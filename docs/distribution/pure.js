// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

// algorithms

function algo_units(parts, cutoff) {
    if (parts == 0) {
        return 0;
    }
    if (parts < 1) {
        return 1;
    }

    const parts_whole = Math.floor(parts);
    const parts_decimals = parts % 1;
    
    if (parts_decimals <= cutoff) {
        return parts_whole;
    }
    
    return parts_whole + 1;
}
