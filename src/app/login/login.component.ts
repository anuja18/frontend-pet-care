import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  creds:Credentials = new Credentials();
  message:string ="";
  constructor(private loginService:LoginService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loginService.login(this.creds).subscribe((session)=>{
      if(session&&session.isActive){
        localStorage.setItem("sessionId",session.sessionId);
        localStorage.setItem("userId",session.userId);
        localStorage.setItem("isActive", session.isActive.toString());
        let returnUrl = localStorage.getItem('returnUrl')
        if(returnUrl){
          this.route.navigate([returnUrl]);
        }else{
          this.route.navigate(["/home"]);
        }
        
        
      }else{
        this.message = "Invalid emailId or password."
      }
    })
  }

}

export class Credentials {
  emailId!:string;
  password!:string;
}