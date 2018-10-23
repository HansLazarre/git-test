import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VolunteerRegistrationContactComponent} from './volunteer-registration-contact.component';

describe('VolunteerRegistrationContactComponent', () => {
  let component: VolunteerRegistrationContactComponent;
  let fixture: ComponentFixture<VolunteerRegistrationContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerRegistrationContactComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerRegistrationContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
