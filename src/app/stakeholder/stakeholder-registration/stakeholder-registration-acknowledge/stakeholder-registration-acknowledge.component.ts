import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StakeholderRegistrationDataService} from '../../stakeholder-registration-data.service';
import {StakeholderHttpService} from '../../stakeholder-http.service';
import {rsTouch} from '../../../form';

@Component({
  selector: 'app-stakeholder-registration-acknowledge',
  templateUrl: './stakeholder-registration-acknowledge.component.html',
  styleUrls: ['./stakeholder-registration-acknowledge.component.css']
})
export class StakeholderRegistrationAcknowledgeComponent implements OnInit {

  public form: FormGroup;
  public regAttrForm: FormGroup;

  public success = undefined;
  public sending = false;

  constructor(private dataService: StakeholderRegistrationDataService, private httpService: StakeholderHttpService,
              private router: Router) {

    this.form = new FormGroup({
      Registration: new FormGroup({
        Attributes: new FormGroup({})
      })
    });

    this.regAttrForm = this.form.get('Registration').get('Attributes') as FormGroup;
  }

  public ngOnInit() {
    this.regAttrForm.addControl('csc_acknowledgeandsubmit',
      new FormControl(false, [Validators.required, Validators.pattern('true')]));
  }

  public finish() {
    rsTouch(this.form);
    this.dataService.synchronizeData(this.form.value);

    if (this.form.valid) {

      this.sending = true;
      this.success = undefined;

      this.httpService.registerStakeholder(this.dataService.data).subscribe(response => {

        this.sending = false;
        this.success = response !== undefined;

        if (this.success) {
          this.dataService.resetData();
          this.router.navigate(['stakeholder-registration/done']);
        }
      });
    }
  }
}
