import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { take, tap } from "rxjs/operators";
import { Constant } from "../constant/constant";
import { District } from "../model/district.model";
import { Province } from "../model/province.model";
import { LocalStorageService } from "./local-storage.service";

@Injectable({providedIn : 'root'})
export class PlacesService{
province= new BehaviorSubject<Province[]>(null);
district= new BehaviorSubject<District[]>(null);
constant = new Constant();

constructor(private localStorageService:LocalStorageService,private httpClient:HttpClient){}


getProvinceList(){
    let province:Province[] = this.localStorageService.getProvinceList();
    if(province){
        console.log(province);
        this.province.next(province);
    }
        
    this.httpClient.get<Province[]>(this.constant.SERVICE_URL+'/places/province').pipe(take(1))
    .subscribe(resData =>{
        this.localStorageService.setProvinceList(resData);
        this.province.next(resData);
    });
    
}

getDistrictList(id:number) {
    return this.httpClient.get<District[]>(this.constant.SERVICE_URL+'/places/district',{
        params: new HttpParams().set('id',''+id)
    }).pipe(take(1),tap(resData=>{
        console.log("getDestrictList");
    }));
}

}