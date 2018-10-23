import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderRegistrationStepperComponent} from './stakeholder-registration-stepper.component';

describe('StakeholderRegistrationStepperComponent', () => {
  let component: StakeholderRegistrationStepperComponent;
  let fixture: ComponentFixture<StakeholderRegistrationStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderRegistrationStepperComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderRegistrationStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
