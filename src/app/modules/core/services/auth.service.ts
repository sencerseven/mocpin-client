import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Constant } from "../constant/constant";
import { AccountDetail } from "../model/account-detail.model";
import { Account } from "../model/account.model";
import { UserToken } from "../model/user-token.model";
import { JWTTokenService } from "./jwttoken.service";

export interface AuthResponseData
{
    access_token:string,
    expires_in:number,
    refresh_token:string,
    scope:string,
    token_type:string;

}

@Injectable({providedIn : 'root'})
export class AuthService{
 
    account = new BehaviorSubject<Account>(this.getAccount());
    constant = new Constant();

    constructor(
        private jwtTokenService:JWTTokenService,
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

    getAccount(){
        const decodedToken = this.jwtTokenService.getDecodeToken();
        if(!!decodedToken){
            const accountDetail: AccountDetail = decodedToken.user_detail;
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
    }

    public parseJwt(token)
    {
            let jwtData = token.split('.')[1]
            let decodedJwtJsonData = window.atob(jwtData)
            let decodedJwtData = JSON.parse(decodedJwtJsonData)
            return decodedJwtData;
    }
}