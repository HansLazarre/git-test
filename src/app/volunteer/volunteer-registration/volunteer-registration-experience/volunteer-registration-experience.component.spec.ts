import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VolunteerRegistrationExperienceComponent} from './volunteer-registration-experience.component';

describe('VolunteerRegistrationExperienceComponent', () => {
  let component: VolunteerRegistrationExperienceComponent;
  let fixture: ComponentFixture<VolunteerRegistrationExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerRegistrationExperienceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerRegistrationExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
