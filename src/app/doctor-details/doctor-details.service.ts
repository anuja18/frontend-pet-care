import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorDetailsService {

  private baseurl='https://localhost:5001/api/doctorsDetails';

  constructor(private httpClient:HttpClient) { }

  getDoctorsDetails(userId:number):Observable<any>{
    return this.httpClient.get<any>(this.baseurl+"/"+userId);
  }
}

