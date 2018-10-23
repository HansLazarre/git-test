import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderRegistrationContactComponent} from './stakeholder-registration-contact.component';

describe('StakeholderRegistrationContactComponent', () => {
  let component: StakeholderRegistrationContactComponent;
  let fixture: ComponentFixture<StakeholderRegistrationContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderRegistrationContactComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderRegistrationContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
