import { Injectable } from '@angular/core';
import { ShoeBRs } from 'src/app/shared/models/shoeBR';
import { sample_shoeBRs } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class ShoeBRService {

  constructor() { }
  getShoeBRById(shoeBRId: string):ShoeBRs{
    return this.getAll().find(shoeBR => shoeBR.id == shoeBRId)??new ShoeBRs();
  }
  getAll():ShoeBRs[] {
    return sample_shoeBRs;
  }
  getAllShoeBRsBySearchTerm(searchTerm1: string){
    return this.getAll().filter(shoeBR => shoeBR.name.toLowerCase().includes(searchTerm1.toLowerCase()));
  }
}
