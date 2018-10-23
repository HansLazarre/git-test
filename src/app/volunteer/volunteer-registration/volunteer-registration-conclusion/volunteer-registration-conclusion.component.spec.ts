import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VolunteerRegistrationConclusionComponent} from './volunteer-registration-conclusion.component';

describe('VolunteerRegistrationConclusionComponent', () => {
  let component: VolunteerRegistrationConclusionComponent;
  let fixture: ComponentFixture<VolunteerRegistrationConclusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerRegistrationConclusionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerRegistrationConclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
