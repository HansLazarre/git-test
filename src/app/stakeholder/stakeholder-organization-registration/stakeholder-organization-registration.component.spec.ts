import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderOrganizationRegistrationComponent} from './stakeholder-organization-registration.component';

describe('StakeholderOrganizationRegistrationComponent', () => {
  let component: StakeholderOrganizationRegistrationComponent;
  let fixture: ComponentFixture<StakeholderOrganizationRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderOrganizationRegistrationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderOrganizationRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
