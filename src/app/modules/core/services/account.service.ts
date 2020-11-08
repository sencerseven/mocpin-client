import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { ApiResponeModel } from "../constant/api-response.model";
import { Constant } from "../constant/constant";
import { AccountDetail } from "../model/account-detail.model";
import { Account } from "../model/account.model";
import { ProfileInput } from "../model/profile-input.model";
import { AuthService } from "./auth.service";
import { JWTTokenService } from "./jwttoken.service";

@Injectable({ providedIn : 'root'})
export class AccountService{
    constant = new Constant();
    account:Account;
    constructor(private authService:AuthService,
      private jwtTokenService:JWTTokenService,
      private httpClient:HttpClient){}


    public getAccountDetail(userName:string){
        
        let account = new Account(userName,null);
   
         this.httpClient.get<ApiResponeModel>(this.constant.SERVICE_URL+'/manage/myprofile')
           .subscribe(resData=>{
             if(resData.code === '200'){
             
              const role = this.jwtTokenService.getRole();
               const data = <AccountDetail>resData.data;
               const accountDetail = new AccountDetail(data.id,data.firstName,data.lastName,data.emailAdress);
               this.account = new Account(userName,accountDetail,null,role);
             }
           });
       }

       public updateProfile(profileInput:ProfileInput) : Observable<any>{
        return this.httpClient.post<ApiResponeModel>(this.constant.SERVICE_URL+'/manage/myprofile',profileInput).pipe(take(1));
      }

}