import { ShoeBRService } from './../services/shoeBR/shoe-br.service';
import { Component, OnInit } from '@angular/core';
import { ShoeBRs } from '../shared/models/shoeBR';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-phukien-bd',
  templateUrl: './phukien-bd.component.html',
  styleUrls: ['./phukien-bd.component.css']
})
export class PhukienBDComponent implements OnInit {
  shoeBRs: ShoeBRs[] = [];
  constructor(private shoeBRService:ShoeBRService,private activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm1)
      this.shoeBRs = this.shoeBRService.getAllShoeBRsBySearchTerm(params.searchTerm1);
      else
      this.shoeBRs = shoeBRService.getAll();
    })
   }

  ngOnInit(): void {
  }
}
