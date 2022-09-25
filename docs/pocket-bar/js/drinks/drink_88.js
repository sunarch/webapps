/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/


// Drink name: Spring Wind

drink = new DrinkClass(88);

drink.setType(0);
drink.setBaseComponent(0);
drink.setGlass(3);

drink.setPreparationText("Keverve.");
drink.setHistoryText("[?]");

drink.addIngredient(4, "cl", "product_13", [0,0]);
drink.addIngredient(2, "cl", "component_45", [0,0]);
drink.addIngredient(20, "cl", "component_44", [0,0]);
drink.addIngredient(5, "szem", "component_46", [0,0]);

//drink.addDecoration(-1, [0,0]);

//drink.addTool(0, [0,0]);

drink.addComment("Megalkotó: Németh Zoltán");
drink.addComment("Névadás: Németh András");

