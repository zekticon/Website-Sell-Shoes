import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoeService } from '../services/shoe/shoe.service';
import { ShoeBRService } from '../services/shoeBR/shoe-br.service';
import { Shoes } from '../shared/models/shoe';
import { ShoeBRs } from '../shared/models/shoeBR';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  shoes:Shoes[] = [];
  shoeBRs:ShoeBRs[] = [];
  constructor(private shoeService:ShoeService, private shoeBRService:ShoeBRService) {
      this.shoes = this.shoeService.getAll();
      this.shoeBRs = this.shoeBRService.getAll()
   }

  ngOnInit(): void {
  }

}
