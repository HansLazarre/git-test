import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VolunteerRegistrationSecurityComponent} from './volunteer-registration-security.component';

describe('VolunteerRegistrationSecurityComponent', () => {
  let component: VolunteerRegistrationSecurityComponent;
  let fixture: ComponentFixture<VolunteerRegistrationSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerRegistrationSecurityComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerRegistrationSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
