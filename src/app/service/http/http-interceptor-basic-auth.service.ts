import { BasicAuthService } from './../login/basic-auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthService : BasicAuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username = 'admin'
    // let password ='admin'
    //let basicAuth ='Basic ' + window.btoa(username + ':' +password);
    let basicAuth =this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();

    if(basicAuth && username){
      request = request.clone({
        setHeaders:{
          Authorization : basicAuth
        }
      })
    }
    
    return next.handle(request);
  };

}
