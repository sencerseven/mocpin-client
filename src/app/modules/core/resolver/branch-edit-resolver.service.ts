import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { BranchOutput } from "../model/branch-output.model";
import { BranchService } from "../services/branch.service";

@Injectable({ providedIn: 'root' })
export class BranchEditResolver implements Resolve<BranchOutput>{

    constructor(private branchService:BranchService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): BranchOutput | Observable<BranchOutput> | Promise<BranchOutput>
    {
        return new Promise<BranchOutput>((resolve,reject) =>{
            return this.branchService.getBranch(route.params['id']).subscribe(resData =>{
                resolve(resData);
            })
        })
        
    }
    
}