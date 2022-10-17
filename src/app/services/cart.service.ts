import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { CartItem1 } from '../shared/models/CartItem';
import { Shoes } from '../shared/models/shoe';
import { ShoeBRs } from '../shared/models/shoeBR';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  addToCart(shoe: Shoes):void {
    let cartItem = this.cart.items.find(item => item.shoe.id ===shoe.id)
    if (cartItem) {
      // this.changeQuantity(shoe.id, cartItem.quantity +1)
      return;
    }
    this.cart.items.push(new CartItem(shoe));
    this.setCartToLocalStorage();
  }
  removeFromCart(shoeId:string) :void {
    this.cart.items = this.cart.items.filter(item => item.shoe.id != shoeId)
    this.setCartToLocalStorage();
  }
  changeQuantity(quantity:number, shoeId:string){
    let cartItem = this.cart.items.find(item => item.shoe.id === shoeId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price=quantity*cartItem.shoe.price;
    this.setCartToLocalStorage();
  }
  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }
  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }
  private setCartToLocalStorage(): void {
    this.cart.TongGia = this.cart.items.reduce((prevSum,currentItem)=> prevSum + currentItem.price,0);
    this.cart.TongSoLuong = this.cart.items.reduce((prevSum,currentItem)=> prevSum + currentItem.quantity,0);
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartJson);
    this.cartSubject.next(this.cart);
  }
  private getCartFromLocalStorage():Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson) : new Cart();
  }
  // addToCart1(shoeBR: ShoeBRs):void {
  //   let cartItem1 = this.cart.items1.find(item => item.shoeBR.id ===shoeBR.id)
  //   if (cartItem1) {
  //     // this.changeQuantity(shoe.id, cartItem.quantity +1)
  //     return;
  //   }
  //   this.cart.items1.push(new CartItem1(shoeBR));
  //   this.setCartToLocalStorage1();
  // }
  removeFromCart1(shoeBRId:string) :void {
    this.cart.items1 = this.cart.items1.filter(item => item.shoeBR.id != shoeBRId)
    this.setCartToLocalStorage1();
  }
  changeQuantity1(quantity:number, shoeBRId:string){
    let cartItem1 = this.cart.items1.find(item => item.shoeBR.id === shoeBRId);
    if(!cartItem1) return;
    cartItem1.quantity = quantity;
    cartItem1.price=quantity*cartItem1.shoeBR.price;
    this.setCartToLocalStorage1();
  }
  private setCartToLocalStorage1(): void {
    this.cart.TongGia = this.cart.items1.reduce((prevSum,currentItem)=> prevSum + currentItem.price,0);
    this.cart.TongSoLuong = this.cart.items1.reduce((prevSum,currentItem)=> prevSum + currentItem.quantity,0);
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartJson);
    this.cartSubject.next(this.cart);
  }
}
