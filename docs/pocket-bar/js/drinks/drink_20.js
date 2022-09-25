/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/


// Drink name: Piña Colada

drink = new DrinkClass(20);

drink.setType(5);
drink.setBaseComponent(9);
drink.setGlass(3);

drink.setPreparationText("az összetevõket blenderben tört jéggel simára turmixoljuk és long drinkes pohárba töltjük. (Amennyiben nem áll rendelkezésre friss ananász vagy blender, helyettesítsük a gyümölcsöt 2 cl tejszínnel, és rázzuk össze shakerben, szûrjük tört jégre.)");
drink.setHistoryText("[?]");

drink.addIngredient(4, "cl", "product_5", [0,0]);
drink.addIngredient(3, "cl", "component_19", [0,0]);
drink.addIngredient(1, "adag", "component_17", [0,0]);
drink.addIngredient("1/4", "szelet", "component_43", [0,0]);

drink.addDecoration(16, [0,0]);
drink.addDecoration(6, [0,0]);
drink.addDecoration(14, [0,0]);

drink.addTool(2, [0,0]);
drink.addTool(1, [0,0]);

drink.addComment("nem finoman szűrjük");

