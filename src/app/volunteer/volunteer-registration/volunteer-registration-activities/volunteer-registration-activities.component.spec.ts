import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VolunteerRegistrationActivitiesComponent} from './volunteer-registration-activities.component';

describe('VolunteerRegistrationActivitiesComponent', () => {
  let component: VolunteerRegistrationActivitiesComponent;
  let fixture: ComponentFixture<VolunteerRegistrationActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerRegistrationActivitiesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerRegistrationActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
