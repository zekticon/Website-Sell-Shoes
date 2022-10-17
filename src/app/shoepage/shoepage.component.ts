import { Shoes } from 'src/app/shared/models/shoe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoeService } from '../services/shoe/shoe.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shoepage',
  templateUrl: './shoepage.component.html',
  styleUrls: ['./shoepage.component.css']
})
export class ShoepageComponent implements OnInit {
  shoe!: Shoes;
  constructor(private activatedRoute:ActivatedRoute, shoeService: ShoeService, private cartService: CartService, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        this.shoe = shoeService.getShoeById(params.id);
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.shoe);
    this.router.navigateByUrl('/shopping-cart');
  }
}
