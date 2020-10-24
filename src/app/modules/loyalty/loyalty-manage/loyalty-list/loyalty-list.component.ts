import { Component, OnInit } from '@angular/core';
import { Loyalty } from 'src/app/modules/core/model/loyalty.model';
import { PageableModel } from 'src/app/modules/core/model/pageable.model';
import { LoyaltyService } from 'src/app/modules/core/services/loyalty.service';

@Component({
  selector: 'app-loyalty-list',
  templateUrl: './loyalty-list.component.html',
  styleUrls: ['./loyalty-list.component.css']
})
export class LoyaltyListComponent implements OnInit {
  pageable:PageableModel;
  loyalities:Loyalty[];

  constructor(private loyaltyService: LoyaltyService) { }

  ngOnInit(): void {
    this.loyaltyService.loyaltyPageable.subscribe(resData=>{
      if(resData){
        console.log(resData);
        this.pageable = resData;
        this.loyalities = this.pageable.content;
        
      }
    })
    this.changePage(0);
  }

  changePage(pageNumber: number){
    this.loyaltyService.getLoyaltyCardList(pageNumber);
  }

  counter(i: number){
    return new Array(i);
  }

}
