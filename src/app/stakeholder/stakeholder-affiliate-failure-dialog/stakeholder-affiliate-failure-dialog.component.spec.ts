import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderAffiliateFailureDialogComponent} from './stakeholder-affiliate-failure-dialog.component';

describe('StakeholderAffiliateFailureDialogComponent', () => {
  let component: StakeholderAffiliateFailureDialogComponent;
  let fixture: ComponentFixture<StakeholderAffiliateFailureDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderAffiliateFailureDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderAffiliateFailureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
