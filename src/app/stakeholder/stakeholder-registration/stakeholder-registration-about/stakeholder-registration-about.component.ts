import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ngx-custom-validators';

import {StakeholderRegistrationDataService} from '../../stakeholder-registration-data.service';

import FormControlUtil from '../../../utils/form-control-util';
import {rsDefault, rsTouch} from '../../../form';


@Component({
  selector: 'app-stakeholder-registration-about',
  templateUrl: './stakeholder-registration-about.component.html',
  styleUrls: ['./stakeholder-registration-about.component.css']
})
export class StakeholderRegistrationAboutComponent implements OnInit {

  public form: FormGroup;

  public regAttrForm: FormGroup;

  public formUtil = FormControlUtil;

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

    this.regAttrForm.addControl('csc_aboutme',
      new FormControl(rsDefault(regAttrData.csc_aboutme, ''), Validators.required));

    this.regAttrForm.addControl('csc_website',
      new FormControl(rsDefault(regAttrData.csc_website, ''), CustomValidators.url));

    this.regAttrForm.addControl('csc_smfacebook',
      new FormControl(rsDefault(regAttrData.csc_smfacebook, ''), CustomValidators.url));

    this.regAttrForm.addControl('csc_smtwitter',
      new FormControl(rsDefault(regAttrData.csc_smtwitter, ''), CustomValidators.url));

    this.regAttrForm.addControl('csc_smlinkedin',
      new FormControl(rsDefault(regAttrData.csc_smlinkedin, ''), CustomValidators.url));
  }

  public next() {
    rsTouch(this.form);
    this.dataService.synchronizeData(this.form.value);
  }
}
