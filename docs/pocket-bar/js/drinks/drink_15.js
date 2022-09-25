/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/


// Drink name: Swimming Pool

drink = new DrinkClass(15);

drink.setType(5);
drink.setBaseComponent(16);
drink.setGlass(3);

drink.setPreparationText("az összetevõket blenderben tört jéggel simára turmixoljuk, és long drinkes pohárba töltjük");
drink.setHistoryText("[?]");

drink.addIngredient(4, "cl", "product_7", [0,0]);
drink.addIngredient(2, "cl", "product_11", [0,0]);
drink.addIngredient(2, "cl", "component_19", [0,0]);
drink.addIngredient("", "belátás szerint", "component_17", [0,0]);
drink.addIngredient(2, "cl", "component_31", [0,0]);
drink.addIngredient(1, "adag", "component_30", [0,0]);

drink.addDecoration(13, [0,0]);
drink.addDecoration(6, [0,0]);

drink.addTool(2, [0,0]);

drink.addComment("Bols Academy vizsgakoktél");
drink.addComment("a poharat zúzott jéggel kell hûteni");
drink.addComment("Ha blenderben készítjük, akkor nem kell bele tejszín.");
drink.addComment("az állag ellenõrzéséhez meg kell kóstolni");

