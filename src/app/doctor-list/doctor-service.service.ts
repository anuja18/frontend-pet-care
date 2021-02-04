import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  private baseurl='https://localhost:5001/api/doctorsDetails';

  constructor(private httpClient:HttpClient) { 

  }
  getDoctorsByCity(city:string):Observable<any>{
    return this.httpClient.get<any>(this.baseurl+'/search/'+ city);
  }
}

