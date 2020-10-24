import { Injectable } from "@angular/core";
import { Province } from "../model/province.model";
import { UserToken } from "../model/user-token.model";

@Injectable({ providedIn: 'root'})
export class LocalStorageService{

   
    public putUserToken(userToken:UserToken){
        localStorage.setItem('AUTH',JSON.stringify(userToken));
    }

    public getUserToken()
    {
        return JSON.parse(localStorage.getItem("AUTH"));
    }

    public removeTokenUser(){
        localStorage.removeItem('AUTH');
    }

    public getProvinceList(): Province[] {
        return JSON.parse(localStorage.getItem("provinceList"));
    }

    public setProvinceList(province: Province[]): Province[] {
        localStorage.setItem("provinceList",JSON.stringify(province));
        return JSON.parse(localStorage.getItem("provinceList"));
    }
}
