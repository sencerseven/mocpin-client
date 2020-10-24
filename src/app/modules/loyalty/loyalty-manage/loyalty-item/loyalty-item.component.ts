import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loyalty } from 'src/app/modules/core/model/loyalty.model';
import { LoyaltyService } from 'src/app/modules/core/services/loyalty.service';

@Component({
  selector: '[app-loyalty-item]',
  templateUrl: './loyalty-item.component.html',
  styleUrls: ['./loyalty-item.component.css']
})
export class LoyaltyItemComponent implements OnInit {

  @Input("loyalty") loyalty: Loyalty;
  constructor(private router:Router,private loyaltyService:LoyaltyService) { }

  ngOnInit(): void {
  }

  edit(){
    
  }

  remove(id:number){
      this.loyaltyService.removeLoyaltyCard(id).subscribe(resData =>{
       this.loyaltyService.getLoyaltyCardList();
      });
  }

}
