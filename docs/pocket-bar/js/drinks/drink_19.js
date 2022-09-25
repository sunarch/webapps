/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/


// Drink name: Absolut Flying

drink = new DrinkClass(19);

drink.setType(7);
drink.setBaseComponent(16);
drink.setGlass(4);

drink.setPreparationText("shotos pohárba töltjük a vodkát, majd egy lime- vagy citromkarikát a kés hegyével több helyen átszúrunk, és megszórjuk barna cukorral, majd ráhelyezzük a pohárra, és óvatosan rátöltjük az overproof rumot, végül meggyújtjuk.");
drink.setHistoryText("[?]");

drink.addIngredient(4, "cl", "product_7", [0,0]);
drink.addIngredient("pár", "csepp", "product_14", [0,0]);
drink.addIngredient(1, "db", "component_41", [0,0]);
drink.addIngredient(1, "adag", "component_35", [0,0]);

drink.addDecoration("decoration_0", [0,0]);

//drink.addTool(0, [0,0]);

drink.addComment("overproof rum: 80%-os alkoholtartalom > Stroh 80");

