import { HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { JWTTokenService } from "../services/jwttoken.service";
import { LocalStorageService } from "../services/local-storage.service";

export interface RequestResponse
{
   status:string,
   code:number,
   error:string,
   data:any;
}

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    constructor(private router:Router,private localStorageService:LocalStorageService,
        private jwtTokenService:JWTTokenService){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        const token = this.jwtTokenService.getJwtToken();
    
        // this.localStorageService.userTokenChange.pipe(take(1),exhaustMap(user =>{}));
      
           if(!token){
               return next.handle(req);
           }
           const modifiedReq = req.clone({ headers: req.headers.set('Authorization', 'bearer' + token._token) });
           return next.handle(modifiedReq)
           .pipe(
                map((event: HttpEvent<HttpEventType>) =>
                {
                   if (event instanceof HttpResponse)
                   {
                    
                      if(event.body){
                          const requestResponse: RequestResponse = JSON.parse(JSON.stringify(event.body));
                          return event.clone({
                              body: requestResponse.data
                          });
                      }
                   }
                  

                   return event;
               })
           ,catchError((err) => {
               if(err instanceof HttpErrorResponse){
                if(err.status === 401){
                    if(err.error.error == 'invalid_token'){
                        this.router.navigate(['/auth']);
                    }
                }
               }
               
               return Observable.throw(err);
           })
        )
       
    }
    
}