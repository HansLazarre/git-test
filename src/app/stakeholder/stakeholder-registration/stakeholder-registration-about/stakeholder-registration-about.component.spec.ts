import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderRegistrationAboutComponent} from './stakeholder-registration-about.component';

describe('StakeholderRegistrationAboutComponent', () => {
  let component: StakeholderRegistrationAboutComponent;
  let fixture: ComponentFixture<StakeholderRegistrationAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderRegistrationAboutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderRegistrationAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
