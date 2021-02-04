import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from './login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'https://localhost:5001/api/users';
  constructor(private httpClient:HttpClient) { }
  login(creds:Credentials):Observable<Session>{
    return this.httpClient.post<Session>(this.baseUrl+"/login",creds);
  }

  logout(sessionId:string):Observable<string>{
    return this.httpClient.put<string>(this.baseUrl+'/logout/'+sessionId,{});
  }

}

export class Session {
  sessionId!:string;
  userId!:string;
  email_id!:string;
  role!:string;
  isActive!:boolean
}
