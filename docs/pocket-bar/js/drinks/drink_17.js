/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/


// Drink name: Side Car (English Version)

drink = new DrinkClass(17);

drink.setType(3);
drink.setBaseComponent(36);
drink.setGlass(1);

drink.setPreparationText("az összetevõket shakerben jéggel összerázzuk, és koktélospohárba szûrjük");
drink.setHistoryText("Side Car: a II. világháborúban egy amerikai tábornok a párizsi Ritz hotelben mindig ilyen kocsiban jött-ment.");

drink.addIngredient(4, "cl", "product_12", [0,0]);
drink.addIngredient(2, "cl", "product_6", [0,0]);
drink.addIngredient(2, "cl", "component_10", [0,0]);

drink.addDecoration(0, [0,0]);

drink.addTool(1, [0,0]);

drink.addComment("Bols Academy vizsgakoktél");
drink.addComment("2 verzió létezik (angol és francia)");
drink.addComment("sokáig kell rázni");
drink.addComment("2x kell szűrni");
drink.addComment("narancshéjjal illatosít és körbe a szélét majd bele");
drink.addComment("XXXXX");

