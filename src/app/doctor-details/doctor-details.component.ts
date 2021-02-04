import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DoctorDetailsService} from './doctor-details.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  card: DoctorDetails = new DoctorDetails;
  id!:string

  constructor(private doctorDetailsService:DoctorDetailsService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id!==null){
    this.getDoctorDetails(id);
    localStorage.setItem("docId",id);
  }
  }

  bookAppointment(){
    let isUserActive = localStorage.getItem('isActive');
    console.log(isUserActive);
    if(isUserActive && isUserActive==="true"){
      this.router.navigate(['/appointment'])
    }else{
      localStorage.setItem("returnUrl",this.router.url);
      this.router.navigate(['/login'])
    }
  }

  getDoctorDetails(id:string){
    this.doctorDetailsService.getDoctorsDetails(+id).subscribe((doctor)=>{
   
      
       this.card.DocId = doctor.userId;
       this.card.FirstName = doctor.firstName;
       this.card.LastName = doctor.lastName;
       this.card.Phone = doctor.phone;
       this.card.EmailId = doctor.email_Id;
       this.card.Degree = doctor.doctorDetails[0].degree;
       this.card.Specialization = doctor.doctorDetails[0].specializationIn;
       this.card.Experience = doctor.doctorDetails[0].experience;
       this.card.LandMark =(doctor.address.length!=0 ? doctor.address[0].landmark : "Aundh");
       this.card.City = (doctor.address.length!=0 ?doctor.address[0].city : "Pune");
       this.card.Fees = doctor.doctorDetails[0].fees;
       this.card.Bio = doctor.doctorDetails[0].bio;
       this.card.Line1 =(doctor.address.length!=0 ? doctor.address[0].line1 : "Not Available");
       this.card.Line2 =(doctor.address.length!=0 ? doctor.address[0].line2 : "Not Available");
       this.card.State =(doctor.address.length!=0 ? doctor.address[0].state : "Maharastra");
       this.card.PinCode =(doctor.address.length!=0 ? doctor.address[0].pinCode : 411007);
    });
  }

}

export class DoctorDetails{
  DocId!:number;
  FirstName!: string;
  LastName!: string;
  Phone!:number;
  EmailId !:string;
  Degree!:string;
  Specialization !:string;
  Experience!: number;
  LandMark!: string;
  City!: string;
  Fees!: number;
  Bio!:string;
  Line1!:string;
  Line2!:string;
  State!:string;
  PinCode!:number;

}
