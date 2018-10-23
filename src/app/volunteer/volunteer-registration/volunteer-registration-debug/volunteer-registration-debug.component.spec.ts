import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VolunteerRegistrationDebugComponent} from './volunteer-registration-debug.component';

describe('VolunteerRegistrationDebugComponent', () => {
  let component: VolunteerRegistrationDebugComponent;
  let fixture: ComponentFixture<VolunteerRegistrationDebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerRegistrationDebugComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerRegistrationDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
