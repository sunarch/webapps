/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/


// Drink name: Daiquiri

drink = new DrinkClass(4);

drink.setType(3);
drink.setBaseComponent(9);
drink.setGlass(1);

drink.setPreparationText("az összetevõket shakerben jéggel összerázzuk, és koktélospohárba szűrjük");
drink.setHistoryText("[?]");

drink.addIngredient(4.5, "cl", "product_5", [0,0]);
drink.addIngredient(2, "cl", "component_10", [0,0]);
drink.addIngredient(2, "cl", "component_11", [0,0]);
drink.addIngredient(0.5, "cl", "component_12", [0,0]);

drink.addDecoration(4, [0,0]);

//drink.addTool(0, [0,0]);

drink.addComment("Bols Academy vizsgakoktél");
drink.addComment("dupla szûrés");

