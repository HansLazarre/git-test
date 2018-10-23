import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderInformationComponent} from './stakeholder-information.component';

describe('StakeholderInformationComponent', () => {
  let component: StakeholderInformationComponent;
  let fixture: ComponentFixture<StakeholderInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderInformationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
