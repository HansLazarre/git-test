import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VolunteerRegistrationStepperComponent} from './volunteer-registration-stepper.component';

describe('VolunteerRegistrationStepperComponent', () => {
  let component: VolunteerRegistrationStepperComponent;
  let fixture: ComponentFixture<VolunteerRegistrationStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerRegistrationStepperComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerRegistrationStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
