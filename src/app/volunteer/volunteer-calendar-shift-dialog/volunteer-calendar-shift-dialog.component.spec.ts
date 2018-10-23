import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VolunteerCalendarShiftDialogComponent} from './volunteer-calendar-shift-dialog.component';

describe('VolunteerCalendarShiftDialogComponent', () => {
  let component: VolunteerCalendarShiftDialogComponent;
  let fixture: ComponentFixture<VolunteerCalendarShiftDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerCalendarShiftDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerCalendarShiftDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
