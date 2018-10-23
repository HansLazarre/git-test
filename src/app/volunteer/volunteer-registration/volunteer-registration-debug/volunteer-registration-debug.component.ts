import {Component, OnInit} from '@angular/core';
import {VolunteerRegistrationDataService} from '../../volunteer-registration-data.service';

@Component({
  selector: 'app-volunteer-registration-debug',
  templateUrl: './volunteer-registration-debug.component.html',
  styleUrls: ['./volunteer-registration-debug.component.css']
})
export class VolunteerRegistrationDebugComponent implements OnInit {

  constructor(public dataService: VolunteerRegistrationDataService) {
  }

  public ngOnInit() {
  }

  public getJsonData() {
    return JSON.stringify(this.dataService.data, null, 2);
  }
}
