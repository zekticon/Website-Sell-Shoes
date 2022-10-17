import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem1 } from '../shared/models/CartItem';

@Component({
  selector: 'app-shoppingcart1',
  templateUrl: './shoppingcart1.component.html',
  styleUrls: ['./shoppingcart1.component.css']
})
export class Shoppingcart1Component implements OnInit {
  cart!:Cart;
   constructor( private cartService: CartService) { 
     this.cartService.getCartObservable().subscribe((cart)=>{
       this.cart = cart;
     })
  }

  ngOnInit(): void {
  }
  removeFromCart1(cartItem1: CartItem1){
    this.cartService.removeFromCart1(cartItem1.shoeBR.id);
  }
  changeQuantity1(cartItem1: CartItem1, quantityInString:string){
    const  quantity = parseInt(quantityInString);
    this.cartService.changeQuantity1(quantity,cartItem1.shoeBR.id);
  }
}
