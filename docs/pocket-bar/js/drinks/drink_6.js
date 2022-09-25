/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/


// Drink name: Frozen Daiquiri

drink = new DrinkClass(6);

drink.setType(3);
drink.setBaseComponent(9);
drink.setGlass(1);

drink.setPreparationText("Daiquiri: [az összetevõket shakerben jéggel összerázzuk, és koktélospohárba szûrjük]<br/>Frozen Daiquiri: a receptúra megegyezik a Daiquiriéval, viszont az italt blenderben készítjük friss gyümölcsökkel, zúzott jéggel");
drink.setHistoryText("[?]");

drink.addIngredient(4.5, "cl", "product_5", [0,0]);
drink.addIngredient(2, "cl", "component_10", [1,1]);
drink.addIngredient(2, "cl", "component_11", [1,2]);
drink.addIngredient(0.5, "cl", "component_12", [2,1]);
drink.addIngredient(1, "unit", "component_15", [2,2]);

drink.addDecoration(4, [0,0]);

//drink.addTool(0, [0,0]);

drink.addComment("Bols Academy vizsgakoktél");
drink.addComment("dupla szűrés");

