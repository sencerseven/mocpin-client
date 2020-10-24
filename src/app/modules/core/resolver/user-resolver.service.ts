import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { UserOutput } from "../model/user-output.model";
import { UserService } from "../services/user.service";


@Injectable({ providedIn: 'root' })
export class UserResolverService implements Resolve<UserOutput[]>{

    constructor(private userService:UserService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UserOutput[] | Observable<UserOutput[]> | Promise<UserOutput[]>
    {
        return new Promise<UserOutput[]>((resolve,reject) =>{
            this.userService.getCompanyUsers().subscribe(resData =>{
                console.log("resolve")
                resolve(resData);
            }
            );
        })
    }
    
}