import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {VolunteerRegistrationDataService} from '../../volunteer-registration-data.service';
import {VolunteerHttpService} from '../../volunteer-http.service';
import {rsTouch} from '../../../form';

@Component({
  selector: 'app-volunteer-registration-agreement',
  templateUrl: './volunteer-registration-agreement.component.html',
  styleUrls: ['./volunteer-registration-agreement.component.css']
})
export class VolunteerRegistrationAgreementComponent implements OnInit {

  public form: FormGroup;
  public regAttrForm: FormGroup;

  public success = undefined;
  public sending = false;

  constructor(private dataService: VolunteerRegistrationDataService, private httpService: VolunteerHttpService,
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

    this.regAttrForm.addControl('csc_agreetotermsandconditions',
      new FormControl(false, [Validators.required, Validators.pattern('true')]));
  }

  public finish() {
    rsTouch(this.form);
    this.dataService.synchronizeData(this.form.value);

    if (this.form.valid) {

      this.sending = true;
      this.success = undefined;

      this.httpService.register(this.dataService.data).subscribe(response => {

        this.sending = false;
        this.success = response !== undefined;

        if (this.success) {
          this.dataService.resetData();
          this.router.navigate(['volunteer-application/done']);
        }
      });
    }
  }
}
