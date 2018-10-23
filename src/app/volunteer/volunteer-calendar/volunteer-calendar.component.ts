import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CalendarEvent, CalendarView} from 'angular-calendar';
import {VolunteerHttpService} from '../volunteer-http.service';
import {VolunteerCalendarShiftDialogComponent} from '../volunteer-calendar-shift-dialog/volunteer-calendar-shift-dialog.component';
import {AuthService} from '../../services/auth.service';


registerLocaleData(localeFr);

@Component({
  selector: 'app-volunteer-calendar',
  templateUrl: './volunteer-calendar.component.html',
  styleUrls: ['./volunteer-calendar.component.css']
})
export class VolunteerCalendarComponent implements OnInit {

  activeDayIsOpen: boolean;

  view: CalendarView = CalendarView.Month;

  @Inject(LOCALE_ID) public locale: string;

  viewDate: Date = new Date();

  events$: Observable<Array<CalendarEvent>>;

  eventClicked({event}: { event: CalendarEvent }): void {
    let dialogRef = this.dialog.open(VolunteerCalendarShiftDialogComponent, {data: {shift: event}});

    dialogRef.beforeClose().subscribe(() => {
      this.getShifts();
    });
  }

  constructor(private httpService: VolunteerHttpService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getShifts();
  }

  getShifts() {
    this.events$ = this.httpService.getSchedule().pipe(
      map((data: { assignedShifts: any, assistantShifts: any }) => {

        const assignedShiftsData = data.assignedShifts.map(shift => {
          return {
            title: shift.name,
            start: new Date(shift.actualStart ? shift.actualStart : shift.scheduledStart),
            end: new Date(shift.actualEnd ? shift.actualEnd : shift.scheduledEnd),
            color: {
              primary: '#e3bc08',
              secondary: '#FDF1BA'
            },
            meta: {
              shiftId: shift.shiftId,
              scheduledStart: new Date(shift.scheduledStart),
              scheduledEnd: new Date(shift.scheduledEnd),
            }
          };
        });

        const assistantShiftsData = data.assistantShifts.map(shift => {
          return {
            title: shift.name,
            start: new Date(shift.actualStart ? shift.actualStart : shift.scheduledStart),
            end: new Date(shift.actualEnd ? shift.actualEnd : shift.scheduledEnd),
            color: {
              primary: '#ad2121',
              secondary: '#FAE3E3',
            },
            meta: {
              volunteerId: shift.volunteerId, // denotes assistant shift (important in dialog)
              shiftId: shift.shiftId,
              scheduledStart: new Date(shift.scheduledStart),
              scheduledEnd: new Date(shift.scheduledEnd),
            }
          };
        });

        return assignedShiftsData.concat(assistantShiftsData);
      }));
  }
}
