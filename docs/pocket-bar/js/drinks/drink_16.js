/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/


// Drink name: Caipirinha

drink = new DrinkClass(16);

drink.setType(6);
drink.setBaseComponent(32);
drink.setGlass(2);

drink.setPreparationText("egy fél lime-ot cikkekre vágunk, és a barna cukorral együtt a pohárba tesszük, majd törõfával szétnyomjuk. A poharat feltöltjük tört jéggel, rátöltjük a cacha&#1195;át, és bárkanállal felkeverjük, majd végül friss tört jeget teszünk az ital tetejére. Vastag szívószállal szervírozzuk.");
drink.setHistoryText("[?]");

drink.addIngredient(5, "cl", "component_32", [0,0]);
drink.addIngredient(2, "bárkanál", "component_35", [0,0]);
drink.addIngredient(4, "db", "component_33", [0,0]);
drink.addIngredient(1, "adag", "component_30", [0,0]);

drink.addDecoration(15, [0,0]);

drink.addTool(4, [0,0]);
drink.addTool(6, [0,0]);

drink.addComment("Bols Academy vizsgakoktél");

