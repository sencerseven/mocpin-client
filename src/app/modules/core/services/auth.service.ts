import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, take, tap } from "rxjs/operators";
import { Constant } from "../constant/constant";
import { AccountDetail } from "../model/account-detail.model";
import { Account } from "../model/account.model";
import { CompanyInputModel } from "../model/company-input.model";
import { UserInput } from "../model/user-input.model";
import { UserToken } from "../model/user-token.model";
import { JWTTokenService } from "./jwttoken.service";
import { LocalStorageService } from "./local-storage.service";

export interface AuthResponseData
{
    access_token:string,
    expires_in:number,
    refresh_token:string,
    scope:string,
    token_type:string;

}

export interface inputUserRegister{
    inputUserRegister:UserInput;
    inputCompanyInfo:CompanyInputModel;
}

@Injectable({providedIn : 'root'})
export class AuthService{
 
    account = new BehaviorSubject<Account>(this.getAccount());
    constant = new Constant();

    constructor(
        private jwtTokenService:JWTTokenService,
        private localStorage:LocalStorageService,
        private router:Router,
        private httpClient: HttpClient){}

    public autoLogin(){
        
        const userData:{
            username:string
            _rtoken:string
            _token:string,
            _tokenExpirationDate:Date
        }=JSON.parse(localStorage.getItem('auth'));
        if(!userData){
            return;
        }
        const decodedToken = this.parseJwt(userData._rtoken);

        if (!decodedToken){
            return;
        }
        const accountDetail:AccountDetail = decodedToken['user_detail'];
        const account:Account = new Account(decodedToken['user_name'],accountDetail);

     //   const user = new UserToken(userData.username,userData._token,userData._tokenExpirationDate,userData._rtoken);
      //  this.userToken.next(user);
      //  this.userService.getUserDetail(userData.username);
        

    }
    
    public login(username: string, password: string){

        var formData: any = new FormData();
        formData.append('grant_type', 'password');
        formData.append('client_id', 'mocpin');
        formData.append('client_secret', 'mocpinSecret');
        formData.append('username', username);
        formData.append('password', password);
        return this.httpClient.post<AuthResponseData>(
            this.constant.SERVICE_URL+"/oauth/token",
            formData
        ).pipe(catchError(this.handleError),tap(resData =>{
            console.log("hello");
            const expirationDate = new Date(new Date().getTime() + +resData.expires_in * 1000);
            const userToken = new UserToken(username, resData.access_token, expirationDate, resData.refresh_token);
            this.jwtTokenService.setToken(userToken);
            const account = this.getAccount();
            this.account.next(account);
        }));
    }

    public register(userInput:UserInput,companyInput:CompanyInputModel){
        
        let object:inputUserRegister = {
            inputUserRegister : userInput,
            inputCompanyInfo : companyInput
            
        };
        
        
        return this.httpClient.post<AuthResponseData>(
            this.constant.SERVICE_URL+"/auth/company-register",
            object
        ).pipe(take(1));
    }

    getAccount(){
        
        const decodedToken = this.jwtTokenService.getDecodeToken();
        if(!!decodedToken){
            let accountDetail:AccountDetail = this.localStorage.getAccountDetail();
            if(!accountDetail){
                 accountDetail = decodedToken.user_detail;
                this.localStorage.putAccountDetail(accountDetail);
            }
            
            var account: Account = new Account(decodedToken['user_name'], accountDetail,null,this.jwtTokenService.getRole());
        }    
       return account;
    }

    private handleError(errRes: HttpErrorResponse)
    {
        let errorMessage = 'beklenmeyen hata';
        switch(errRes.error.error){
            case 'invalid_grant':
              errorMessage = 'Kullanıcı Adı/Şifre hatası. Lütfen tekrar deneyiniz.';  
              break; 
        }
       return throwError(errorMessage);
    }

    public logout(){
        this.router.navigate(['/auth']);
        this.jwtTokenService.removeToken();
        this.localStorage.removeAccountDetail();
    }

    public parseJwt(token)
    {
            let jwtData = token.split('.')[1]
            let decodedJwtJsonData = window.atob(jwtData)
            let decodedJwtData = JSON.parse(decodedJwtJsonData)
            return decodedJwtData;
    }

    public updateAccount(account:Account){
        this.account.next(account);
        this.localStorage.putAccountDetail(account.accountDetail);
    }
}