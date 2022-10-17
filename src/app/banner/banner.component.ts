import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Banner: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    autoWidth: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    navSpeed: 50,
    navText: ['<','>'],
    responsive:{
      0:{
        items:1
      },
      180:{
        items:2
      },
      100:{
        items:3
      },
      30:{
        items:1
      }
    },
    nav:true,
  }

}
