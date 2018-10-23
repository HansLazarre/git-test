import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderRegistrationServicesOfferedComponent} from './stakeholder-registration-services-offered.component';

describe('StakeholderRegistrationServicesOfferedComponent', () => {
  let component: StakeholderRegistrationServicesOfferedComponent;
  let fixture: ComponentFixture<StakeholderRegistrationServicesOfferedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderRegistrationServicesOfferedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderRegistrationServicesOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
