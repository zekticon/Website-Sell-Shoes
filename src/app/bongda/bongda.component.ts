import { Component, OnInit } from '@angular/core'; 
import { ShoeService} from '../services/shoe/shoe.service'
import { Shoes } from '../shared/models/shoe';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bongda',
  templateUrl: './bongda.component.html',
  styleUrls: ['./bongda.component.css']
})
export class BongdaComponent implements OnInit {
  shoes:Shoes[] =[];
  constructor(private shoeService:ShoeService, private activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
        if(params.searchTerm)
        this.shoes = this.shoeService.getAllShoesBySearchTerm(params.searchTerm);
        else
        this.shoes = this.shoeService.getAll();
      })
   }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   if(params['searchItem'])
    //   this.shoes = this.fs.getAll().filter(shoe => shoe.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
    //   else
    //   this.shoes = this.fs.getAll();
    // })
  }
}
