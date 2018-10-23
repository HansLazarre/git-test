import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderAffiliateDialogComponent} from './stakeholder-affiliate-dialog.component';

describe('StakeholderAffiliateDialogComponent', () => {
  let component: StakeholderAffiliateDialogComponent;
  let fixture: ComponentFixture<StakeholderAffiliateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderAffiliateDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderAffiliateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
