import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { HttpClientModule } from '@angular/common/http';
import {SpecialCharacterValidatorDirective} from './shared/special-character-validator.directive';

import { FormsModule } from '@angular/forms';
import { MatchPasswordDirective } from './shared/match-password.directive';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DoctorListComponent,
    RegisterComponent,
    LoginComponent,
    DoctorDetailsComponent,
    SpecialCharacterValidatorDirective,
    MatchPasswordDirective,
    AboutUsComponent,
    AppointmentComponent,
    BookingConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
