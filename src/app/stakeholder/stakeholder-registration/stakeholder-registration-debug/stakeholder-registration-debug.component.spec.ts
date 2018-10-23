import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderRegistrationDebugComponent} from './stakeholder-registration-debug.component';

describe('StakeholderRegistrationDebugComponent', () => {
  let component: StakeholderRegistrationDebugComponent;
  let fixture: ComponentFixture<StakeholderRegistrationDebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderRegistrationDebugComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderRegistrationDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
