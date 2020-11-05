import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { take } from "rxjs/operators";
import { Constant } from "../constant/constant";
import { Company } from "../model/company.model";

@Injectable({providedIn : 'root'})
export class CompanyService{

    constant = new Constant();

    constructor(private httpClient:HttpClient){}

    public getOwnCompany(){
        return this.httpClient.get<Company>(this.constant.SERVICE_URL+"/manage/company").pipe(take(1));
    }

    public updateOwnCompany(formData:FormData){
       return this.httpClient.post<Company>(this.constant.SERVICE_URL+"/manage/company",formData).pipe(take(1));
    }

    
}