import { API_URL } from './../../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  createUser(user){
    // let basicAuthString = this.createBasicAuthHeader();

    // let headers = new HttpHeaders({
    //   Authorization : basicAuthString
    // });
    return this.http.post(`${API_URL}/register/`,user
    //{headers}
    )
  }
}
