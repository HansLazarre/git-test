import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderContactComponent} from './stakeholder-contact.component';

describe('StakeholderContactComponent', () => {
  let component: StakeholderContactComponent;
  let fixture: ComponentFixture<StakeholderContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderContactComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
