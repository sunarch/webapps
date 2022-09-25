/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/


/* DrinkClass.js */

/* A class representing a single drink instance with its details */

function DrinkClass(argRefIdNum) {

    this.refId = "drink_" + argRefIdNum;
    this.typeRefId = "";
    this.baseComponentRefId = "";
    this.glassRefId = "";
    this.imageSrc = "../images/drinks/" + this.refId + ".jpg";
    this.preparation = "";
    this.history = "";
    this.ingredientList = [];
    this.decorationList = [];
    this.toolList = [];
    this.commentList = [];
    
    
    /* Getters and Setters */
    
    this.getName = function() { return getDrinkNameByRefId(this.refId); }
    
    this.setType = function(argRefIdNum) { this.typeRefId = "type_" + argRefIdNum.toString(); }
    this.getTypeRefId = function() { return this.typeRefId; }
    this.getTypeName = function() { return getTypeNameByRefId(this.typeRefId); }
    
    this.setBaseComponent = function(argRefIdNum) { this.baseComponentRefId = "component_" + argRefIdNum.toString(); }
    this.getBaseComponentRefId = function() { return this.baseComponentRefId; }
    this.getBaseComponentName = function() { return getBaseComponentNameByRefId(this.baseComponentRefId); }
    
    this.setGlass = function(argRefIdNum) { this.glassRefId = "glass_" + argRefIdNum.toString(); }
    this.getGlassRefId = function() { return this.glassRefId; }
    
    this.getGlassName = function() { return getGlassNameByRefId(this.glassRefId); }
    
    this.getImageSrc = function() { return this.imageSrc; }
    
    this.setPreparationText = function(argText) { this.preparation = argText; }
    this.getPreparationText = function() { return this.preparation; }
    
    this.setHistoryText = function(argText) { this.history = argText;}
    this.getHistoryText = function() { return this.history; }
    
    this.addIngredient = function(argAmount, argUnit, argRefId, argOption) {
        this.ingredientList.push({ "optGr" : argOption[0].toString(),
                                   "opt" : argOption[1].toString(), 
                                   "amount" : argAmount.toString(), 
                                   "unit" : argUnit,
                                   "refId" : argRefId,
                                   "name" : "",
                                   "display" : ""
                                 });
    }
    this.getIngredientList = function() {
        var n = 0;
        
        for (n = 0; n < this.ingredientList.length; n++) {
            this.ingredientList[n].name = getIngredientNameByRefId(this.ingredientList[n].refId);
            this.ingredientList[n].display = formatIngredientDisplay(this.ingredientList[n]);
        }
        
        return this.ingredientList;
    }
    
    this.addDecoration = function(argRefIdNum, argOption) {
        this.decorationList.push({ "optGr" : argOption[0].toString(),
                                   "opt" : argOption[1].toString(),
                                   "refId" : "decoration_" + argRefIdNum,
                                   "name" : "",
                                   "display" : ""
                                 });
    }
    this.getDecorationList = function() {
        var n = 0;
        
        for (n = 0; n < this.decorationList.length; n++) {
            this.decorationList[n].name = getDecorationNameByRefId(this.decorationList[n].refId);
            this.decorationList[n].display = formatDecorationDisplay(this.decorationList[n]);
        }
        
        return this.decorationList;
    }
    
    this.addTool = function(argRefIdNum, argOption) {
        this.toolList.push({ "optGr" : argOption[0].toString(),
                             "opt" : argOption[1].toString(),
                             "refId" : "tool_" + argRefIdNum,
                             "name" : "",
                             "display" : ""
                           });
    }
    this.getToolList = function() {
        var n = 0;
        
        for (n = 0; n < this.toolList.length; n++) {
            this.toolList[n].name = getToolNameByRefId(this.toolList[n].refId);
            this.toolList[n].display = formatToolDisplay(this.toolList[n]);
        }
        
        return this.toolList;
    }
    
    this.addComment = function(argComment) {
        this.commentList.push(argComment);
    }
    this.getCommentList = function() {
        return this.commentList;
    }
}

