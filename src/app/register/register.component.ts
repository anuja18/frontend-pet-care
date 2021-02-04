import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  role:string="Customer";

  constructor(private rgisterService:RegisterService, private router:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
      this.activeRoute.queryParams.subscribe((params)=> this.role = params.role)
  }

  onSubmit(){
    this.user.role = this.role;
    this.rgisterService.createUser(this.user).subscribe(()=>this.router.navigate(["/login"]));
  }

}

export class User {
  firstName!: string;
  lastName!: string;
  phone!: string;
  email_Id!: string;
  password!:string;
  confirmPassword!:string;
  role!:string;
}