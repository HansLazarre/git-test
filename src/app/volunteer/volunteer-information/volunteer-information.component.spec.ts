import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VolunteerInformationComponent} from './volunteer-information.component';

describe('VolunteerInformationComponent', () => {
  let component: VolunteerInformationComponent;
  let fixture: ComponentFixture<VolunteerInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerInformationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
