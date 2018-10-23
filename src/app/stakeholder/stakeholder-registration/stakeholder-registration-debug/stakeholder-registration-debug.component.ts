import {Component, OnInit} from '@angular/core';
import {StakeholderRegistrationDataService} from '../../stakeholder-registration-data.service';

@Component({
  selector: 'app-stakeholder-registration-debug',
  templateUrl: './stakeholder-registration-debug.component.html',
  styleUrls: ['./stakeholder-registration-debug.component.css']
})
export class StakeholderRegistrationDebugComponent implements OnInit {

  constructor(public dataService: StakeholderRegistrationDataService) {
  }

  public ngOnInit() {
  }

  public getJsonData() {
    return JSON.stringify(this.dataService.data, null, 2);
  }
}
