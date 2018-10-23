import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {StakeholderRegistrationDataService} from '../../stakeholder-registration-data.service';

import {rsDefault, rsTouch} from '../../../form';


@Component({
  selector: 'app-stakeholder-registration-services-offered',
  templateUrl: './stakeholder-registration-services-offered.component.html',
  styleUrls: ['./stakeholder-registration-services-offered.component.css']
})
export class StakeholderRegistrationServicesOfferedComponent implements OnInit {

  public form: FormGroup;

  public regAttrForm: FormGroup;

  constructor(private dataService: StakeholderRegistrationDataService) {

    this.form = new FormGroup({
      Registration: new FormGroup({
        Attributes: new FormGroup({}, this.ServiceValidatorFactory())
      })
    });

    this.regAttrForm = this.form.get('Registration').get('Attributes') as FormGroup;
  }

  public ngOnInit() {

    const data = this.dataService.data;
    const regAttrData = (data.Registration && data.Registration.Attributes) ? data.Registration.Attributes : {};

    [
      'csc_hostels',
      'csc_privatehomeplacement',
      'csc_alternativecommunitybeds',
      'csc_supervisedapartments',

      'csc_adult',
      'csc_postsecondary',
      'csc_englishasasecondlanguage',
      'csc_generalequivalencydegree',
      'csc_research',
      'csc_diploma',
      'csc_certificate',
      'csc_apprenticeship',

      'csc_employmentinformation',
      'csc_trainingskillsdevelopment',
      'csc_employmentreferralservice',
      'csc_employer',

      'csc_buddhist',
      'csc_christian',
      'csc_hindu',
      'csc_islam',
      'csc_jewish',
      'csc_rastafarian',
      'csc_sikh',
      'csc_traditionalspirituality',
      'csc_wiccanpagan',

      'csc_criminal',
      'csc_family',
      'csc_civil',

      'csc_generalhealth',
      'csc_mentalhealth',

      'csc_angermgmtconflictresolution',
      'csc_communityoutreacheducation',
      'csc_emotionalsupport',
      'csc_employment',
      'csc_familysupport',
      'csc_health',
      'csc_housingandfinancialsupport',
      'csc_lifeskills',
      'csc_trauma',
      'csc_reintergration',
      'csc_substanceabuse',
      'csc_sexualabuse',

    ].forEach(field => {

      this.regAttrForm.addControl(field, new FormControl(rsDefault(regAttrData[field], false)));
    });
  }

  private ServiceValidatorFactory() {

    return (control: AbstractControl): { [key: string]: boolean } | null => {

      let selectedCount = 0;

      const formGroup = control as FormGroup;

      Object.keys(formGroup.controls).forEach(field => {

        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          if (control.value === true) {
            selectedCount++;
          }
        }
      });

      if (selectedCount === 0) {
        return {offered: true};
      }

      return null;
    };
  }

  public next() {
    rsTouch(this.form);
    this.dataService.synchronizeData(this.form.value);
  }
}
