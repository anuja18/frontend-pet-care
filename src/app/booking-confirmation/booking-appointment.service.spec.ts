import { TestBed } from '@angular/core/testing';

import { BookingAppointmentService } from './booking-appointment.service';

describe('BookingAppointmentService', () => {
  let service: BookingAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
