import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VolunteerRegistrationEmergencyContactComponent} from './volunteer-registration-emergency-contact.component';

describe('VolunteerRegistrationEmergencyContactComponent', () => {
  let component: VolunteerRegistrationEmergencyContactComponent;
  let fixture: ComponentFixture<VolunteerRegistrationEmergencyContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerRegistrationEmergencyContactComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerRegistrationEmergencyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
