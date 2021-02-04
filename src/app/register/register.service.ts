import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './register.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'https://localhost:5001/api/';
  constructor(private httpClient:HttpClient ) { }

  createUser(user:User):Observable<any>{
    return this.httpClient.post<User>(this.baseUrl+'users',user);
  }
}
