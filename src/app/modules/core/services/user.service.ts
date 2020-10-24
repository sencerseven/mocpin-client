import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { take, tap } from "rxjs/operators";
import { Constant } from "../constant/constant";
import { UserInput } from "../model/user-input.model";
import { UserOutput } from "../model/user-output.model";
import { LocalStorageService } from "./local-storage.service";


@Injectable({ providedIn: 'root'})
export class UserService implements OnInit{
    constant = new Constant();
    
    userList = new BehaviorSubject<UserOutput[]>(null);
    user = new BehaviorSubject<UserOutput>(null);

    constructor(private httpClient: HttpClient,private localStorageService:LocalStorageService){}

    ngOnInit(): void
    {
       
    }

    getCompanyUser(userId:number){
      return this.httpClient.get<UserOutput>(this.constant.SERVICE_URL+'/manage/user',{
          params: new HttpParams().set('id',''+userId)
      }).pipe(take(1),tap(resData =>{
        console.log(resData);
        this.user.next(resData);

      }));
    }    

    getCompanyUsers():Observable<UserOutput[]> {
     return this.httpClient.get<UserOutput[]>(this.constant.SERVICE_URL+'/manage/user/all').pipe(take(1),tap(resData =>{

     let userListTemp:UserOutput[] =[];
      const response:UserOutput[] = JSON.parse(JSON.stringify(resData));
      response.forEach(element => {
        userListTemp.push(element);

      });
      this.userList.next(userListTemp);
     }));
    }

    public registerUserForCompany(userInput:UserInput){
     return this.httpClient.post(this.constant.SERVICE_URL+'/manage/user',userInput).pipe(take(1));
    }

    public removeUserForCompany(userId:number){
      return this.httpClient.delete(this.constant.SERVICE_URL+'/manage/user',{
        params : new HttpParams().set('id',''+userId)
      }).pipe(take(1));
    }

}