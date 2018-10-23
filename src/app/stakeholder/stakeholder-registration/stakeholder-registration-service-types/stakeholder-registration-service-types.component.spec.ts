import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderRegistrationServiceTypesComponent} from './stakeholder-registration-service-types.component';

describe('StakeholderRegistrationServiceTypesComponent', () => {
  let component: StakeholderRegistrationServiceTypesComponent;
  let fixture: ComponentFixture<StakeholderRegistrationServiceTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderRegistrationServiceTypesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderRegistrationServiceTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
