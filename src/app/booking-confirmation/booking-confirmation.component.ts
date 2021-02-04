import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingAppointmentService } from './booking-appointment.service';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit {

  constructor(private appointmentService:BookingAppointmentService, private router:Router) { }

  ngOnInit(): void {
  }

 

}
