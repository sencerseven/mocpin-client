import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { take } from "rxjs/operators";
import { Constant } from "../constant/constant";
import { loyaltyInput } from "../model/loyalty-input.model";
import { Loyalty } from "../model/loyalty.model";
import { PageableModel } from "../model/pageable.model";

@Injectable({providedIn: 'root'})
export class LoyaltyService{

    loyaltyPageable = new BehaviorSubject<PageableModel>(null);
    constant = new Constant();
    
    constructor(private httpClient:HttpClient){}

    public getLoyaltyCard(id:number){
        return this.httpClient.get<Loyalty>(this.constant.SERVICE_URL+"/manage/loyalty",{
            params: new HttpParams().set('id',''+id)
        });
    }

    public getLoyaltyCardList(page?:number){

       var params = new HttpParams();
       if(page)
        params = params.append('page',''+page);
    
        return this.httpClient.get<PageableModel>(this.constant.SERVICE_URL+"/manage/loyalty/all", {params : params})
        .pipe(take(1)).subscribe(resData =>{
        
            this.loyaltyPageable.next(resData);
        })
    }

    public addLoyaltyCard(loyalty:loyaltyInput){
        return this.httpClient.post(this.constant.SERVICE_URL+"/manage/loyalty",loyalty).pipe(take(1));
    }


    public removeLoyaltyCard(id:number){
        return this.httpClient.delete(this.constant.SERVICE_URL+"/manage/loyalty",{
            params : new HttpParams().set('id',''+id)  
        }).pipe(take(1));
    }
}