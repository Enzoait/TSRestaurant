import { Order } from "./Order";
import { OrderCalculator } from "./OrderCalculator";
import { Meal } from "./Meal";
import { Dessert } from "./Dessert";
import { Drink } from "./Drink";

var order = new Order(1, "Entrée du jour", 10, 2);
var order2 = new Order(2, "Plat du jour", 40, 1);
console.log(`Total de ${order.name} : ${OrderCalculator.calculateOrderPrice(order)}€`);
console.log(`Total de ${order2.name} : ${OrderCalculator.calculateOrderPrice(order2)}€`);

var pizza = new Meal("Pizza", 18);
console.log(`Prix d'un(e) ${pizza.getName()} à l'unité : ${pizza.getPrice()}€`);
var jusDeFruits = new Drink("Jus de fruit", 3);
console.log(`Prix d'un(e) ${jusDeFruits.getName()}  à l'unité : ${jusDeFruits.getPrice()}€`);
var tiramisu = new Dessert("Tiramisu", 5);
console.log(`Prix d'un(e) ${tiramisu.getName()}  à l'unité : ${tiramisu.getPrice()}€`);