/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/


// Drink name: Americano

drink = new DrinkClass(2);

drink.setType(2);
drink.setBaseComponent(3);
drink.setGlass(2);

drink.setPreparationText("az összetevőket koktéljéggel teli old fashioned pohárba töltjük, szódával felspricceljük, narancshéjjal illatosítjuk");
drink.setHistoryText("a név onnan ered, hogy az amerikai katonák szerették");

drink.addIngredient(3, "cl", "component_4", [0,0]);
drink.addIngredient(3, "cl", "component_3", [0,0]);
drink.addIngredient(1, "unit", "component_5", [0,0]);

drink.addDecoration(2, [1,1]);
drink.addDecoration(3, [1,2]);

//drink.addTool(0,  [0,0]);

drink.addComment("Bols Academy vizsgakoktél");
drink.addComment("Campari: Milano/Torino");
drink.addComment("az eredeti receptben narancshéj helyett citromhéj van");

