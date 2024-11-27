export class MenuItem {
    private name: string;
    private price: number;

    constructor (name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    public get Name(): string {
        return this.name;
    }

    public set Name(value: string) {
        this.name = value;
    }

    public get Price(): number {
        return this.price;
    }

    public set Price(value: number) {
        this.price = value;
    }
}