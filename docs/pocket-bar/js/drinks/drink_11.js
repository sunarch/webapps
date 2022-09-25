/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/


// Drink name: Margarita

drink = new DrinkClass(11);

drink.setType(3);
drink.setBaseComponent(27);
drink.setGlass(1);

drink.setPreparationText("az összetevőket shakerben jéggel összerázzuk, és sóval crustázott koktélospohárba szűrjük");
drink.setHistoryText("[?]");

drink.addIngredient(3.5, "cl", "product_9", [0,0]);
drink.addIngredient(2, "cl", "product_6", [0,0]);
drink.addIngredient(1.5, "cl", "component_11", [0,0]);

drink.addDecoration(11, [0,0]);
drink.addDecoration(10, [0,0]);

drink.addTool(1, [0,0]);

drink.addComment("Bols Academy vizsgakoktél");
drink.addComment("finomszűrés");

