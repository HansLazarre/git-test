import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StakeholderOrganizationUpdateComponent} from './stakeholder-organization-update.component';

describe('StakeholderOrganizationUpdateComponent', () => {
  let component: StakeholderOrganizationUpdateComponent;
  let fixture: ComponentFixture<StakeholderOrganizationUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StakeholderOrganizationUpdateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderOrganizationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
