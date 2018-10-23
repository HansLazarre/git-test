import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderContactConclusionComponent} from './stakeholder-contact-conclusion.component';

describe('StakeholderContactConclusionComponent', () => {
  let component: StakeholderContactConclusionComponent;
  let fixture: ComponentFixture<StakeholderContactConclusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderContactConclusionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderContactConclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
