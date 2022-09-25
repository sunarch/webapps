/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/


function includeJS(filename) {
    var head = document.getElementsByTagName('head')[0];

    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
    script.charset = 'UTF-8';

    head.appendChild(script)
}

function navigate(target) {
    window.location.assign(target);
}

function showDrink(argRefId) {
    setCurrentDrink(argRefId);
    navigate('drink.html');
}

function getCurrentDrinkRefId() {
    return localStorage.getItem("currentDrink");
}

function setCurrentDrink(argRefId) {
    return localStorage.setItem("currentDrink", argRefId);
}

function fillDrinkView() {
    var n = 0;
    var newListItem = "";

    document.getElementById("drink_name").innerHTML = drink.getName();
    document.getElementById("drink_type").innerHTML = drink.getTypeName();
    document.getElementById("drink_basecomponent").innerHTML = drink.getBaseComponentName();
    document.getElementById("drink_glass").innerHTML = drink.getGlassName();
    document.getElementById("drink_picture").src = drink.getImageSrc();
    document.getElementById("drink_preparation").innerHTML = drink.getPreparationText();
    document.getElementById("drink_history").innerHTML = drink.getHistoryText();

    var drinkIngredientList = drink.getIngredientList();
    for (n = 0; n < drinkIngredientList.length; n++) {
        newListItem = "<li>" + drinkIngredientList[n].display + "</li>";
        document.getElementById("drink_ingredientList").innerHTML += newListItem;
    }

    var drinkDecorationList = drink.getDecorationList();
    for (n = 0; n < drinkDecorationList.length; n++) {
        newListItem = "<li>" + drinkDecorationList[n].display + "</li>";
        document.getElementById("drink_decorationList").innerHTML += newListItem;
    }

    var drinkToolList = drink.getToolList();
    for (n = 0; n < drinkToolList.length; n++) {
        newListItem = "<li>" + drinkToolList[n].display + "</li>";
        document.getElementById("drink_toolList").innerHTML += newListItem;
    }

    var drinkCommentList = drink.getCommentList();
    for (n = 0; n < drinkCommentList.length; n++) {
        newListItem = "<li>" + drinkCommentList[n] + "</li>";
        document.getElementById("drink_commentList").innerHTML += newListItem;
    }


}

function getDrinkNameByRefId(refId) {
    for (var n = 0; n < drinkList.length; n++) {
        if (drinkList[n].refId == refId) {
            return drinkList[n].name;
        }
    }
    return "UNKNOWN DRINK";
}

function getTypeNameByRefId(refId) {
    for (var n = 0; n < typeList.length; n++) {
        if (typeList[n].refId == refId) {
            return typeList[n].name;
        }
    }
    return "UNKNOWN DRINK TYPE";
}

function getBaseComponentNameByRefId(refId) {
    return getIngredientNameByRefId(refId);
}

function getGlassNameByRefId(refId) {
    for (var n = 0; n < glassList.length; n++) {
        if (glassList[n].refId == refId) {
            return glassList[n].name;
        }
    }
    return "UNKNOWN GLASS";
}

function getIngredientNameByRefId(refId) {
    for (var n = 0; n < componentList.length; n++) {
        if (componentList[n].refId == refId) {
            return componentList[n].name;
        }
    }
    for (var n = 0; n < productList.length; n++) {
        if (productList[n].refId == refId) {
            return productList[n].name;
        }
    }
    return "UNKNOWN INGREDIENT";
}

function formatIngredientDisplay(argIngredient) {
    return argIngredient.name + " => " + argIngredient.amount + " " + argIngredient.unit;
}

function getDecorationNameByRefId(refId) {
    for (var n = 0; n < decorationList.length; n++) {
        if (decorationList[n].refId == refId) {
            return decorationList[n].name;
        }
    }
    return "UNKNOWN DECORATION";
}

function formatDecorationDisplay(argDecoration) {
    return argDecoration.name;
}

function getToolNameByRefId(refId) {
    for (var n = 0; n < toolList.length; n++) {
        if (toolList[n].refId == refId) {
            return toolList[n].name;
        }
    }
    return "UNKNOWN TOOL";
}

function formatToolDisplay(argTool) {
    return argTool.name;
}

/* ----- */

// function notificationAlertTestCallback() {
//
// }

/* Event listeners */
// document.onload = function() { notificationAlert("Notification Alert Test", notificationAlertTestCallback); };
// window.onhashchange = function() { /*hashNavigation();*/ };

function hashNavigation() {
    var newHash = window.location.hash.slice(1);
    switch(newHash) {
        case "List":

            break;
        case "quiz":
            displayQuiz("start");
            break;
        case drink.name:

            break;
        default:
            displayDrink('name',newHash);
            break;
    }
}


function displayDrink(requestType,requestValue) {
    var requestedDrinkRefId = "";

    switch(requestType) {
        case "name":
            requestedDrinkRefId = barSearch("drink","name",requestValue);
            if ( ["noResult","error"].indexOf(requestedDrinkRefId) === -1 ) {
                drink.id = requestedDrinkRefId;
            }
            else { return false; }
            break;
        case "id":
            drink.id = requestValue;
            break;
        default:
            return false;
            //break;
    }

        /* Set window title and location hash */
        window.location.hash = drink.name;
        document.getElementsByTagName("title")[0].firstChild.nodeValue = drink.name + " in the Pocket Bar";


    return true;
}



function displayList(requestType,requestValue) {

    /* Set window title and location hash */
    window.location.hash = "List";
    document.getElementsByTagName("title")[0].firstChild.nodeValue = "Drinks of " + requestType + " in the Pocket Bar";
    /* Unset single picture */
    document.getElementById("drink_picture").src = "";
    /* Display and hide sections as needed */
    document.getElementById("section_pocketbar_welcome").style.display = "none";
    document.getElementById("section_pocketbar_drink").style.display = "none";
    document.getElementById("section_pocketbar_quiz").style.display = "none";
    document.getElementById("box_pocketbar_picture").style.display = "none";
    document.getElementById("section_pocketbar_list").style.display = "block";

}


function barSearch(searchLocation,searchBase,searchQuery) {
    var returnValueStatus = "noResult";
    var returnValue = "";

    switch(searchLocation) {
        case "drink":
            switch(searchBase) {
                case "name":
                    if ( DB.drinkListValues.indexOf( searchQuery ) != -1 ) {
                        returnValue = DB.drinkListAttrId[ DB.drinkListValues.indexOf( searchQuery ) ];
                    }
                    break;
                default:
                    returnValueStatus = "error";
                    break;
            }
            break;
        default:
            break;
    }
    if ( returnValue.length < 1 ) { returnValue = returnValueStatus; }
    return returnValue;
}

