import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderRegistrationConclusionComponent} from './stakeholder-registration-conclusion.component';

describe('StakeholderRegistrationConclusionComponent', () => {
  let component: StakeholderRegistrationConclusionComponent;
  let fixture: ComponentFixture<StakeholderRegistrationConclusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderRegistrationConclusionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderRegistrationConclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
