import { ShoeBRService } from './../services/shoeBR/shoe-br.service';
import { Component, OnInit } from '@angular/core';
import { ShoeBRs } from '../shared/models/shoeBR';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bongro',
  templateUrl: './bongro.component.html',
  styleUrls: ['./bongro.component.css']
})
export class BongroComponent implements OnInit {
  shoeBRs: ShoeBRs[] = [];
  constructor(private fs:ShoeBRService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   if(params['searchItem1'])
    //   this.shoeBRs = this.fs.getAll().filter(shoeBR => shoeBR.name.toLowerCase().includes(params['searchItem1'].toLowerCase()));
    //   else
    //   this.shoeBRs = this.fs.getAll();
    // })
  }
}
