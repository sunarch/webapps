/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/


// Drink name: [N.Z. 1/B]

drink = new DrinkClass(9);

drink.setType(4);
drink.setBaseComponent(9);
drink.setGlass(1);

drink.setPreparationText("[?]");
drink.setHistoryText("[?]");

drink.addIngredient(3, "cl", "component_9", [0,0]);
drink.addIngredient(1.5, "cl", "component_20", [0,0]);
drink.addIngredient(4, "cl", "component_21", [0,0]);

drink.addDecoration(5, [0,0]);
drink.addDecoration(6, [0,0]);

//drink.addTool(0, [0,0]);

drink.addComment("Feltaláló: Németh Zoltán [1/B]");

