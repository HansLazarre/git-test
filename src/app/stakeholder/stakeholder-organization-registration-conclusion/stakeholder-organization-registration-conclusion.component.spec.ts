import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderOrganizationRegistrationConclusionComponent} from './stakeholder-organization-registration-conclusion.component';

describe('StakeholderOrganizationRegistrationConclusionComponent', () => {
  let component: StakeholderOrganizationRegistrationConclusionComponent;
  let fixture: ComponentFixture<StakeholderOrganizationRegistrationConclusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderOrganizationRegistrationConclusionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderOrganizationRegistrationConclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
