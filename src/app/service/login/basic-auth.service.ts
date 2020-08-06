import { API_URL } from './../../app.constants';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private http: HttpClient) { }

  
  executeBasicAuthBean(username, password){
    
    let basicAuth ='Basic ' + window.btoa(username + ':' +password);
    
    let headers = new HttpHeaders({
      Authorization : basicAuth
    });

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
    {headers}).pipe(
      map(
        data =>{
          sessionStorage.setItem("authenticateUser", username);
          sessionStorage.setItem('token',basicAuth);
          return data;

        }
      )
    )
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticateUser')
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem('token')
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser')
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem('authenticateUser');
    sessionStorage.removeItem('token')
  }
}

export class AuthenticationBean{
  constructor(public message: string){}
}
