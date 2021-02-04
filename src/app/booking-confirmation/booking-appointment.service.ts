import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingAppointmentService {

  private baseurl='https://localhost:5001/api/appointments';
  constructor(private httpClient:HttpClient) { }
  
  createAppointment(appointment:Appointment):Observable<Appointment>{
    return this.httpClient.post<Appointment>(this.baseurl,appointment);
  }
}

export class Appointment {
  timeSlot!:string;
  bookingDate!:string;
  typeOfPet!:string;
  notes!:string;
  custId!:string;
  docId!:string
}
