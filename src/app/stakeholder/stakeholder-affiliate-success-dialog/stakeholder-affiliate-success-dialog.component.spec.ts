import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderAffiliateSuccessDialogComponent} from './stakeholder-affiliate-success-dialog.component';

describe('StakeholderAffiliateSuccessDialogComponent', () => {
  let component: StakeholderAffiliateSuccessDialogComponent;
  let fixture: ComponentFixture<StakeholderAffiliateSuccessDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderAffiliateSuccessDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderAffiliateSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
