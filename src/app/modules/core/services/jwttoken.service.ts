import { Injectable } from "@angular/core";
import { UserToken } from "../model/user-token.model";
import { LocalStorageService } from "./local-storage.service";

@Injectable({providedIn :'root'})
export class JWTTokenService{

    jwtToken:UserToken;
    decodedToken: { [key: string]: any };
 
    constructor(private localStorageService:LocalStorageService) {
    }
 
    setToken(token:UserToken) {
      if (token) {
        this.localStorageService.putUserToken(token);
      }
    }
 
    getJwtToken(){
        this.jwtToken = JSON.parse(localStorage.getItem("AUTH"));
        return this.jwtToken; 
    }

    private decodeToken() {
      this.getJwtToken();
      if (!!this.jwtToken) {
      this.decodedToken = JSON.parse(window.atob(this.jwtToken._token.split(".")[1]));
      }
    }
 
    getDecodeToken() {
      this.decodeToken();  
      return this.decodedToken;
    }
 
    getUser() {
      this.decodeToken();
      return this.decodedToken ? this.decodedToken.displayname : null;
    }

    getRole(){
        this.decodeToken();
        if(this.jwtToken){
            const authorities:any = this.decodedToken['authorities'];    
            for(let i=0; i<authorities.length; i++){
                authorities[i] = authorities[i].replace('ROLE_','');
            }
            return authorities;
        }
    }
 
    getEmailId() {
      this.decodeToken();
      return this.decodedToken ? this.decodedToken.email : null;
    }
 
    getExpiryTime() {
      this.decodeToken();
      return this.decodedToken ? this.decodedToken.exp : null;
    }
 
    isTokenExpired(): boolean {
      const expiryTime: number = +this.getExpiryTime();
      if (expiryTime) {
        return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
      } else {
        return false;
      }
    }

    removeToken(){
      this.jwtToken = null;
      this.decodedToken = null;
      this.localStorageService.removeTokenUser();
    }
}