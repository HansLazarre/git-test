import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VolunteerRegistrationAgreementComponent} from './volunteer-registration-agreement.component';

describe('VolunteerRegistrationAgreementComponent', () => {
  let component: VolunteerRegistrationAgreementComponent;
  let fixture: ComponentFixture<VolunteerRegistrationAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerRegistrationAgreementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerRegistrationAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
