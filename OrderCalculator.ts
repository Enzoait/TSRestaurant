import { Order } from "./Order";

export class OrderCalculator extends Order {
    public static calculateOrderPrice(order: Order): number {
        return order.price * order.quantity;
    }
}