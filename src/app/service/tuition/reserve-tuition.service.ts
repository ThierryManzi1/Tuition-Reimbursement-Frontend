import { TuitionBudget } from './../../reserved-tuitions/reserved-tuitions.component';
import { API_URL } from './../../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReserveTuitionService {

  constructor(private http: HttpClient) { }
   
//   Access to XMLHttpRequest at 'http://localhost:8282/reservetuition/' 
// from origin 'http://localhost:4200' has been blocked by CORS policy: 
// No 'Access-Control-Allow-Origin' 
// header is present on the requested resource.
  
 
  reserveTuition(tuition){
    // let basicAuthString = this.createBasicAuthHeader();

    // let headers = new HttpHeaders({
    //   Authorization : basicAuthString
    // });
    return this.http.post(`${API_URL}/reservetuition/`,tuition,
    //{headers}
    )
  }

  getAllReservedTuitions(){
    return this.http.get<TuitionBudget[]>(`${API_URL}/reservetuition/`)
  }

  retriveReservedTuition(id){
    return this.http.get<TuitionBudget>(`${API_URL}/reservetuition/${id}`)
  }

  updateReservedTuition(id, tuitionBudjet){
    return this.http.put(`${API_URL}/reservetuition/${id}`,tuitionBudjet)
  }

  deleteReservedTuition(id){
    return this.http.delete(`${API_URL}/reservetuition/${id}`)
  }

  // createBasicAuthHeader(){
  //   let username = 'admin'
  //   let password ='admin'
  //   let basicAuth ='Basic ' + window.btoa(username + ':' +password);

  //   return basicAuth;
  // }

}
