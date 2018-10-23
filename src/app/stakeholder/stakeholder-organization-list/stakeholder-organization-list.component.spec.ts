import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderOrganizationListComponent} from './stakeholder-organization-list.component';

describe('StakeholderOrganizationListComponent', () => {
  let component: StakeholderOrganizationListComponent;
  let fixture: ComponentFixture<StakeholderOrganizationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderOrganizationListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderOrganizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
