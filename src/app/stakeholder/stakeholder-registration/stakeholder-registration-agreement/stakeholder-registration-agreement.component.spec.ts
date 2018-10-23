import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderRegistrationAgreementComponent} from './stakeholder-registration-agreement.component';

describe('StakeholderRegistrationAgreementComponent', () => {
  let component: StakeholderRegistrationAgreementComponent;
  let fixture: ComponentFixture<StakeholderRegistrationAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderRegistrationAgreementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderRegistrationAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
