import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VolunteerRegistrationReferenceComponent} from './volunteer-registration-reference.component';

describe('VolunteerRegistrationReferenceComponent', () => {
  let component: VolunteerRegistrationReferenceComponent;
  let fixture: ComponentFixture<VolunteerRegistrationReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerRegistrationReferenceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerRegistrationReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
