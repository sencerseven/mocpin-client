import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { take, tap } from "rxjs/operators";
import { Constant } from "../constant/constant";
import { BranchInput } from "../model/branch-input.model";
import { BranchOutput } from "../model/branch-output.model";

@Injectable({providedIn: 'root'})
export class BranchService{

    companyBranches = new BehaviorSubject<BranchOutput[]>(null);
    constant = new Constant();
    
    constructor(private httpClient:HttpClient){}


    public getAllBranchForList(){
       return this.httpClient.get<BranchOutput[]>(this.constant.SERVICE_URL+"/manage/branch/all").pipe(take(1),
        tap(resData =>{
            this.companyBranches.next(resData);
        }))
    }

    public getBranch(id:number){
        return this.httpClient.get<BranchOutput>(this.constant.SERVICE_URL+"/manage/branch",{
            params : new HttpParams().set('id',''+id)  
        }).pipe(take(1));
    }

    public updateBranch(branch:BranchInput){
       return this.httpClient.post(this.constant.SERVICE_URL+"/manage/branch",branch).pipe(take(1))
    }

    public removeBranch(id:number){
        return this.httpClient.delete(this.constant.SERVICE_URL+"/manage/branch",{
            params : new HttpParams().set('id',''+id)  
        }).pipe(take(1));
    }

}