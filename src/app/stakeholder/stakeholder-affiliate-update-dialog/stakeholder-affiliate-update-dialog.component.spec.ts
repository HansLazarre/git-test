import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderAffiliateUpdateDialogComponent} from './stakeholder-affiliate-update-dialog.component';

describe('StakeholderAffiliateUpdateDialogComponent', () => {
  let component: StakeholderAffiliateUpdateDialogComponent;
  let fixture: ComponentFixture<StakeholderAffiliateUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderAffiliateUpdateDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderAffiliateUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
