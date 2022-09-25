/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/


function setupSearch() {
	
	var n = 0;
	var optionElement = "";
    
    /* productList */
    for (n = 0; n < componentList.length; n++) {
        optionElement = "";
        optionElement += '<option value="' + componentList[n].refId + '" >';
        optionElement += componentList[n].name;
        optionElement += "</option>";
		document.getElementById("select_component").innerHTML += optionElement;
    }
    document.getElementById("select_component").disabled = false;
    
    /* productList */
    for (n = 0; n < productList.length; n++) {
        optionElement = "";
        optionElement += '<option value="' + productList[n].refId + '" >';
        optionElement += productList[n].name;
        optionElement += "</option>";
		document.getElementById("select_product").innerHTML += optionElement;
    }
    document.getElementById("select_product").disabled = false;
    
    /* typeList */
    for (n = 0; n < typeList.length; n++) {
        optionElement = "";
        optionElement += '<option value="' + typeList[n].refId + '" >';
        optionElement += typeList[n].name;
        optionElement += "</option>";
		document.getElementById("select_type").innerHTML += optionElement;
    }
    document.getElementById("select_type").disabled = false;
    
    /* glassList */
    for (n = 0; n < glassList.length; n++) {
        optionElement = "";
        optionElement += '<option value="' + glassList[n].refId + '" >';
        optionElement += glassList[n].name;
        optionElement += "</option>";
		document.getElementById("select_glass").innerHTML += optionElement;
    }
    document.getElementById("select_glass").disabled = false;
    
    /* drinkList */
    for (n = 0; n < drinkList.length; n++) {
        optionElement = "";
        optionElement += '<option value="' + drinkList[n].refId + '" >';
        optionElement += drinkList[n].name;
        optionElement += "</option>";
		document.getElementById("select_drink").innerHTML += optionElement;
    }
    document.getElementById("select_drink").disabled = false;
    
    /* toolList */
    for (n = 0; n < toolList.length; n++) {
        optionElement = "";
        optionElement += '<option value="' + toolList[n].refId + '" >';
        optionElement += toolList[n].name;
        optionElement += "</option>";
		document.getElementById("select_tool").innerHTML += optionElement;
    }
    document.getElementById("select_tool").disabled = false;
    
    /* decorationList */
    for (n = 0; n < decorationList.length; n++) {
        optionElement = "";
        optionElement += '<option value="' + decorationList[n].refId + '" >';
        optionElement += decorationList[n].name;
        optionElement += "</option>";
		document.getElementById("select_decoration").innerHTML += optionElement;
    }
    document.getElementById("select_decoration").disabled = false;
    
    /* inventoryItems */
    for (n = 0; n < inventoryItems.length; n++) {
        optionElement = "";
        optionElement += '<option value="' + inventoryItems[n].refId + '" >';
        optionElement += inventoryItems[n].name;
        optionElement += "</option>";
		document.getElementById("select_inventory").innerHTML += optionElement;
    }
    document.getElementById("select_inventory").disabled = false;
    
}

