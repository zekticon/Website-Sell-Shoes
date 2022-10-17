import { Shoes } from "./shoe";
import { ShoeBRs } from "./shoeBR";

export class CartItem{
    constructor(public shoe: Shoes){}
    quantity:number =1;
    price: number =this.shoe.price;
}
export class CartItem1{
    constructor(public shoeBR: ShoeBRs){}
    quantity:number =1;
    price: number =this.shoeBR.price;
}