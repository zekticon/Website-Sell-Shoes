import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart!:Cart;
  constructor( private cartService: CartService) { 
    this.cartService.getCartObservable().subscribe((cart)=>{
      this.cart = cart;
    })
  }

  ngOnInit(): void {
  }
  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.shoe.id);
  }
  changeQuantity(cartItem: CartItem, quantityInString:string){
    const  quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(quantity,cartItem.shoe.id);
  }
}
