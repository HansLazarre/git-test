import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderOwnerOrganizationListComponent} from './stakeholder-owner-organization-list.component';

describe('StakeholderOwnerOrganizationListComponent', () => {
  let component: StakeholderOwnerOrganizationListComponent;
  let fixture: ComponentFixture<StakeholderOwnerOrganizationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderOwnerOrganizationListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderOwnerOrganizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
