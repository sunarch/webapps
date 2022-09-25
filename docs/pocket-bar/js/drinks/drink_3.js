/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/


// Drink name: Bronx

drink = new DrinkClass(3);

drink.setType(3);
drink.setBaseComponent(6);
drink.setGlass(1);

drink.setPreparationText("az összetevõket shakerben jéggel összerázzuk, és koktélospohárba szűrjük");
drink.setHistoryText("[?]");

drink.addIngredient(3, "cl", "product_4", [0,0]);
drink.addIngredient(1.5, "cl", "component_4", [0,0]);
drink.addIngredient(1, "cl", "component_7", [0,0]);
drink.addIngredient(1.5, "cl", "component_8", [0,0]);

drink.addDecoration(0, [0,0]);

//drink.addTool(0, [0,0]);

drink.addComment("Bols Academy vizsgakoktél");
drink.addComment("duplán szűrjük");
drink.addComment("+ narancspeel");

