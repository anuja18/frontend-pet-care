import { Component, OnInit } from '@angular/core';
import {DoctorServiceService} from './doctor-service.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctorList: DoctorCard[] = [];
  pinCode:string = "411007";

  constructor(private doctorService:DoctorServiceService) { }

  ngOnInit(): void {
    this.search();
  }

  search(){
    this.getDoctorList(this.pinCode);
  }

  getDoctorList(pin:string){
    this.doctorList = [];
     this.doctorService.getDoctorsByCity(pin).subscribe((data)=>{
      if(data.length>0){ 
      data.map((doctor:any)=>{
       let card:DoctorCard = new DoctorCard ()
       card.DocId = doctor.userId;
       card.FirstName = doctor.firstName;
       card.LastName = doctor.lastName;
       card.Experience = doctor.doctorDetails[0].experience;
       card.LandMark =(doctor.address.length!=0 ? doctor.address[0].landmark : "Aundh");
       card.City = (doctor.address.length!=0 ?doctor.address[0].city : "Pune");
       card.Fees = doctor.doctorDetails[0].fees;
       this.doctorList.push(card);
      })}else{
        this.doctorList = []
      }
    });
  }

}
export class DoctorCard{
  DocId!:number;
  FirstName!: string;
  LastName!: string;
  Experience!: number;
  LandMark!: string;
  City!: string;
  Fees!: number;
}
