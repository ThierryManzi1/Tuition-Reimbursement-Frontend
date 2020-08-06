import { Grade } from './../../submitted-grades/submitted-grades.component';
import { API_URL } from './../../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmitGradeService {

  constructor(private http: HttpClient) { }

  _url = `${API_URL}/grades/uploadTranscript`
  submitGrade(data: FormData){
    // const data: FormData = new FormData();
    // data.append('grade',mark)
    // data.append('file', file)
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post<any>(this._url,data)
  }

  getAllGrades(){
      return this.http.get<Grade[]>(`${API_URL}/grades/`); 
  }

  downloadTranscript(id):Observable<Blob>{
    return this.http.get(`${API_URL}/grades/downloadTranscript/${id}`,{ responseType: 'blob' })                
  }

  deleteGrade(id){
    return this.http.delete(`${API_URL}/grades/${id}`)
  }

  updateGrade(id,data: FormData){
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.put<any>(`${API_URL}/grades/uploadTranscript/${id}`,data)
  }
}
