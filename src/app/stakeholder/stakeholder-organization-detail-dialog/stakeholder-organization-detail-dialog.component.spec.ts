import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderOrganizationDetailDialogComponent} from './stakeholder-organization-detail-dialog.component';

describe('StakeholderOrganizationDetailDialogComponent', () => {
  let component: StakeholderOrganizationDetailDialogComponent;
  let fixture: ComponentFixture<StakeholderOrganizationDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderOrganizationDetailDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderOrganizationDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
