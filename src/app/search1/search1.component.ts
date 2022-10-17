import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
@Component({
  selector: 'app-search1',
  templateUrl: './search1.component.html',
  styleUrls: ['./search1.component.css']
})
export class Search1Component implements OnInit {
  searchTerm1 ='';
  constructor(private activatedRoute:ActivatedRoute, private router:Router) { 
    activatedRoute.params.subscribe((params)=>{
      if (params.searchTerm1)
      this.searchTerm1 = params.searchTerm1;
    });    
  }

  ngOnInit(): void {
  }
  search(term:string): void{
    if(term)
    this.router.navigateByUrl('/search1/'+term);
  }
}