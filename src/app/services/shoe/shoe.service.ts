import { sample_shoes } from './../../../data';
import { Injectable } from '@angular/core';
import { Shoes } from 'src/app/shared/models/shoe';
@Injectable({
  providedIn: 'root'
})
export class ShoeService {

  constructor() { }

  getAllShoesBySearchTerm(searchTerm: string){
    return this.getAll().filter(shoe => shoe.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAll():Shoes[] {
    return sample_shoes;
  }
  getShoeById(shoeId: string):Shoes{
    return this.getAll().find(shoe =>shoe.id==shoeId)??new Shoes();
  }
}
