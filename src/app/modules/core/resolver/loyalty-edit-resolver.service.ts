import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { Loyalty } from "../model/loyalty.model";
import { BranchService } from "../services/branch.service";
import { LoyaltyService } from "../services/loyalty.service";



@Injectable({ providedIn: 'root' })
export class LoyaltyEditResolverService implements Resolve<Loyalty>{

    constructor(private loyaltyService:LoyaltyService,private branchService:BranchService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Loyalty | Observable<Loyalty> | Promise<Loyalty>
    {
       
       return new Promise<Loyalty>((resolve,reject) =>{
            return this.loyaltyService.getLoyaltyCard(route.params['id']).pipe(take(1)).subscribe(resData=>{
                console.log("resolver " + resData.name);
                resolve(resData);
            })
        })
        
    }


   
    
}   