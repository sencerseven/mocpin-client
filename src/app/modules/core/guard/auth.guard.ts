import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { AuthService } from "../services/auth.service";
import { JWTTokenService } from "../services/jwttoken.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{

    constructor(private authService:AuthService,private jwtTokenService:JWTTokenService,private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
    {

        const tokenRole = this.jwtTokenService.getRole();
        const roles = this.getChildRole(route);
        if(!!tokenRole){
            if(!!roles && !roles.includes(tokenRole[0])){
                if(this.router.url == '/auth' || this.router.url == '/'){
                    this.router.navigate(['/auth']);
                }else{
                    this.router.navigate(['/']);
                }

            }
            return true;
        } else
        {
             this.router.navigate(['/auth']);
        }
    }


    getChildRole(route:ActivatedRouteSnapshot){
        
        const hasRole = !!route.data.roles    
        let role;
        if(!hasRole && !!route.firstChild){
            role = this.getChildRole(route.firstChild);
        }else{
            role = route.data.roles;
        }
        return role;
    }

}