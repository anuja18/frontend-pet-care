import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  subscription!:Subscription;
  source = interval(1000);
  loggedIn:boolean=false;
  isClicked:boolean = false;
  
  constructor(private loginService:LoginService, private route:Router) { }

  ngOnInit(): void {
    this.subscription = this.source.subscribe(()=>{
      if(localStorage.getItem("isActive")=="true"){
        this.loggedIn=true;
      }
    })
  }

  logOut(){
    const sessionId = localStorage.getItem("sessionId")
    if(sessionId!==null){
      this.loginService.logout(sessionId).subscribe(()=>{
        this.loggedIn = false;
        localStorage.setItem("sessionId","");
        localStorage.setItem("userId","");
        localStorage.setItem("isActive","false");
        this.route.navigate(['/login'])
      })
    }
    
  }

  clickEvent(){
    this.isClicked = !this.isClicked;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
