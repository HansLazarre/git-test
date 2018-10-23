import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import * as moment from 'moment';
import {VolunteerHttpService} from '../volunteer-http.service';

@Component({
  selector: 'app-volunteer-calendar-shift-dialog',
  templateUrl: './volunteer-calendar-shift-dialog.component.html',
  styleUrls: ['./volunteer-calendar-shift-dialog.component.css']
})
export class VolunteerCalendarShiftDialogComponent implements OnInit {

  public form: FormGroup;

  public shift;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private httpService: VolunteerHttpService, public dialogRef: MatDialogRef<VolunteerCalendarShiftDialogComponent>) {
    this.shift = data.shift;
    this.form = new FormGroup({
      startTime: new FormControl(this.formatTime(this.shift.start)),
      endTime: new FormControl(this.formatTime(this.shift.end)),
    });
  }

  public ngOnInit() {
  }

  public submit() {

    let st = this.form.value.startTime;
    let mst = moment(st, 'hh:mm a');
    let start = moment(this.shift.start);
    start.hour(mst.hour());
    start.minute(mst.minute());

    let et = this.form.value.endTime;
    let met = moment(et, 'hh:mm a');
    let end = moment(this.shift.end);
    end.hour(met.hour());
    end.minute(met.minutes());

    const actual = {
      shiftId: this.shift.meta.shiftId,
      actualStart: start.toDate().toISOString(),
      actualEnd: end.toDate().toISOString(),
    };

    if (this.shift.meta.volunteerId) { // if volunteerId then its an assistant schedule
      this.httpService.updateAssistantShift({...actual, ...{volunteerId: this.shift.meta.volunteerId}}).subscribe(success => {
        if(success) {
          this.dialogRef.close();
        }
      });
    }
    else {
      this.httpService.updateAssignedShift(actual).subscribe(success => {
        if(success) {
          this.dialogRef.close();
        }
      });
    }
  }

  public formatDate(dt: Date): String {
    return moment(dt).format('dddd, MMMM Do YYYY');
  }

  public formatTime(dt: Date): String {
    return moment(dt).format('hh:mm a');
  }
}
