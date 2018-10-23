import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {StakeholderRegistrationDataService} from '../../stakeholder-registration-data.service';

import {rsDefault, rsTouch} from '../../../form';


@Component({
  selector: 'app-stakeholder-registration-service-types',
  templateUrl: './stakeholder-registration-service-types.component.html',
  styleUrls: ['./stakeholder-registration-service-types.component.css']
})
export class StakeholderRegistrationServiceTypesComponent implements OnInit {

  public form: FormGroup;

  public regForm: FormGroup;
  public regAttrForm: FormGroup;
  public regOptsForm: FormGroup;

  constructor(private dataService: StakeholderRegistrationDataService) {

    this.form = new FormGroup({
      Registration: new FormGroup({
        Attributes: new FormGroup({}),
        OptionSets: new FormGroup({})
      }, [this.LanguageValidatorFactory(), this.GenderValidatorFactory()])
    });

    this.regForm = this.form.get('Registration') as FormGroup;
    this.regAttrForm = this.regForm.get('Attributes') as FormGroup;
    this.regOptsForm = this.regForm.get('OptionSets') as FormGroup;
  }

  public ngOnInit() {

    const data = this.dataService.data;
    const regAttrData = (data.Registration && data.Registration.Attributes) ? data.Registration.Attributes : {};
    const regOptsData = (data.Registration && data.Registration.OptionSets) ? data.Registration.OptionSets : {};


    this.regOptsForm.addControl('csc_preferredofficiallanguage',
      new FormControl(rsDefault(regOptsData.csc_preferredofficiallanguage, 0)));

    this.regAttrForm.addControl('csc_otherlanguagesspoken',
      new FormControl(rsDefault(regAttrData.csc_otherlanguagesspoken, '')));

    this.regAttrForm.addControl('csc_sexother',
      new FormControl(rsDefault(regAttrData.csc_sexother, '')));

    [
      'csc_men',
      'csc_women',

      'csc_incarcerated',
      'csc_communitysupervised',
      'csc_highriskoffenders',

      'csc_aged',
      'csc_youth',
      'csc_physicaldisability',
      'csc_mentalhealthneeds',
      'csc_motherchild',
      'csc_ethnoculturalgroups',

      'csc_inuit',
      'csc_metis',
      'csc_firstnations',

    ].forEach(field => {
      this.regAttrForm.addControl(field, new FormControl(rsDefault(regAttrData[field], false)));
    });
  }

  private LanguageValidatorFactory() {

    return (control: AbstractControl): { [key: string]: boolean } | null => {

      const formGroup = control as FormGroup;

      if (formGroup.get('OptionSets').get('csc_preferredofficiallanguage') &&
        formGroup.get('Attributes').get('csc_otherlanguagesspoken')) {
        if (formGroup.get('OptionSets').get('csc_preferredofficiallanguage').value === 0 &&
          formGroup.get('Attributes').get('csc_otherlanguagesspoken').value === '') {

          return {language: true}; // TODO only if touched
        }
      }

      return null;
    };
  }

  private GenderValidatorFactory() {

    return (control: AbstractControl): { [key: string]: boolean } | null => {

      const formGroup = control as FormGroup;

      if (formGroup.get('Attributes').get('csc_men') &&
        formGroup.get('Attributes').get('csc_women') &&
        formGroup.get('Attributes').get('csc_sexother')) {

        if (formGroup.get('Attributes').get('csc_men').value === false &&
          formGroup.get('Attributes').get('csc_women').value === false &&
          formGroup.get('Attributes').get('csc_sexother').value === '') {

          return {gender: true}; // TODO only if touched
        }
      }

      return null;
    };
  }

  public next() {
    rsTouch(this.form);
    this.dataService.synchronizeData(this.form.value);
  }
}
