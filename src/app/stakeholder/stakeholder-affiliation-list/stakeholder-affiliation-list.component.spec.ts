import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderAffiliationListComponent} from './stakeholder-affiliation-list.component';

describe('StakeholderAffiliationListComponent', () => {
  let component: StakeholderAffiliationListComponent;
  let fixture: ComponentFixture<StakeholderAffiliationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderAffiliationListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderAffiliationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
