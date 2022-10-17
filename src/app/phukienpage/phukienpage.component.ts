import { Component, OnInit } from '@angular/core';
import { ShoeBRs } from 'src/app/shared/models/shoeBR';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoeBRService } from '../services/shoeBR/shoe-br.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-phukienpage',
  templateUrl: './phukienpage.component.html',
  styleUrls: ['./phukienpage.component.css']
})
export class PhukienpageComponent implements OnInit {
  shoeBR!: ShoeBRs;
  constructor(private activatedRoute:ActivatedRoute, private shoeBRService: ShoeBRService, private cartService: CartService, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.shoeBR = shoeBRService.getShoeBRById(params.id);
    })
   }

  ngOnInit(): void {
  }
  addToCart1(){
    this.cartService.addToCart(this.shoeBR);
    this.router.navigateByUrl('/shopping-cart');
  }
}

