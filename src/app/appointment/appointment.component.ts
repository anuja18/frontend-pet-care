import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment, BookingAppointmentService } from '../booking-confirmation/booking-appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  private today = new Date();
  timeSlot:string="8:00 AM";
  date:string =  this.today.toISOString().substr(0,10);
  notes!:string;
  typeOfPet:string ="Cats";
  
  
  constructor(private appointmentService:BookingAppointmentService, private router:Router) { }

  ngOnInit(): void {
  }

  bookAppointment(){
    
    let appointment = new Appointment()
    appointment.bookingDate = this.date;
    appointment.notes= this.notes;
    appointment.timeSlot = this.timeSlot;
    appointment.typeOfPet = this.typeOfPet;
    let custId = localStorage.getItem("userId");
    let docId = localStorage.getItem("docId");
    if(custId){
      appointment.custId = custId;
    }
    if(docId){
      appointment.docId=docId;
    }
    this.appointmentService.createAppointment(appointment).subscribe((data)=>{
      this.router.navigate(["booking-confirmation"])
    })
  }

}
