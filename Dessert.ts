import { MenuItem } from "./MenuItem";

export class Dessert extends MenuItem{

    public override getPrice(): number {
        return this.Price;
    }

    public override getName(): string {
        return this.Name;
    }
}