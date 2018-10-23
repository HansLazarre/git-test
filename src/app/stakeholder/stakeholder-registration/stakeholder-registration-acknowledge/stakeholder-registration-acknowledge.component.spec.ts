import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderRegistrationAcknowledgeComponent} from './stakeholder-registration-acknowledge.component';

describe('StakeholderRegistrationAcknowledgeComponent', () => {
  let component: StakeholderRegistrationAcknowledgeComponent;
  let fixture: ComponentFixture<StakeholderRegistrationAcknowledgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderRegistrationAcknowledgeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderRegistrationAcknowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
