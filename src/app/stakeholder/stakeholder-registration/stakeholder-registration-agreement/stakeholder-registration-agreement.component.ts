import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StakeholderRegistrationDataService} from '../../stakeholder-registration-data.service';
import {rsTouch} from '../../../form';

@Component({
  selector: 'app-stakeholder-registration-agreement',
  templateUrl: './stakeholder-registration-agreement.component.html',
  styleUrls: ['./stakeholder-registration-agreement.component.css']
})
export class StakeholderRegistrationAgreementComponent implements OnInit {

  public form: FormGroup;

  public regAttrForm: FormGroup;

  constructor(private dataService: StakeholderRegistrationDataService) {

    this.form = new FormGroup({
      Registration: new FormGroup({
        Attributes: new FormGroup({})
      })
    });

    this.regAttrForm = this.form.get('Registration').get('Attributes') as FormGroup;
  }

  public ngOnInit() {

    const data = this.dataService.data;
    const regAttrData = (data.Registration && data.Registration.Attributes) ? data.Registration.Attributes : {};

    this.regAttrForm.addControl('csc_agreetotermsandconditions',
      new FormControl(regAttrData.csc_agreetotermsandconditions, [Validators.required, Validators.pattern('true')]));
  }

  public next() {
    rsTouch(this.form);
    this.dataService.synchronizeData(this.form.value);
  }
}
