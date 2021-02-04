import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'doctor-list',component:DoctorListComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'doctor-details/:id',component:DoctorDetailsComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'booking-confirmation',component:BookingConfirmationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
