import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {VolunteerRegistrationDataService} from '../../volunteer-registration-data.service';
import {rsDefault, rsFieldClass, rsTouch} from '../../../form';


enum ApplyingFor {
  General = 862430000,
  CAC,
  REAC,
}

@Component({
  selector: 'app-volunteer-registration-activities',
  templateUrl: './volunteer-registration-activities.component.html',
  styleUrls: ['./volunteer-registration-activities.component.css']
})
export class VolunteerRegistrationActivitiesComponent implements OnInit {

  public form: FormGroup;

  public regAttrForm: FormGroup;

  public regOptsForm: FormGroup;

  public fieldClass = rsFieldClass;

  public readonly ApplyingFor = ApplyingFor;

  // check box
  static readonly otherFields = ['csc_activityreligiousprograms', 'csc_activitycounselling', 'csc_activityeducation',
    'csc_activityartsandcrafts', 'csc_activitynonsecurityescort', 'csc_activityrestorativejustice',
    'csc_activityleisure', 'csc_activityaboriginaloffenders', 'csc_activityadministrative'];

  constructor(private dataService: VolunteerRegistrationDataService) {

    this.form = new FormGroup({
      Registration: new FormGroup({
        Attributes: new FormGroup({}),
        OptionSets: new FormGroup({})
      }, VolunteerRegistrationActivitiesComponent.ApplyingForValidatorFactory())
    });

    this.regAttrForm = this.form.get('Registration').get('Attributes') as FormGroup;
    this.regOptsForm = this.form.get('Registration').get('OptionSets') as FormGroup;
  }

  public ngOnInit() {

    const data = this.dataService.data;
    const regAttrData = (data.Registration && data.Registration.Attributes) ? data.Registration.Attributes : {};
    const regOptsData = (data.Registration && data.Registration.OptionSets) ? data.Registration.OptionSets : {};

    this.regOptsForm.addControl('csc_applyingfor',
      new FormControl(regOptsData.csc_applyingfor, Validators.required));

    const fnApplyingFor = value => {
      VolunteerRegistrationActivitiesComponent.otherFields.forEach(field => {

        if (value === ApplyingFor.General) {
          this.regAttrForm.addControl(field, new FormControl(regAttrData[field]));
        }
        else {
          regAttrData[field] = false;
          this.regAttrForm.removeControl(field);
        }
      });

      if (value === ApplyingFor.General) {
        this.regAttrForm.addControl('csc_activityotherspecify', new FormControl(regAttrData.csc_activityotherspecify));
      }
      else {
        regAttrData.csc_activityotherspecify = '';
        this.regAttrForm.removeControl('csc_activityotherspecify');
      }
    };

    this.regOptsForm.get('csc_applyingfor').valueChanges.subscribe(fnApplyingFor);

    fnApplyingFor(this.regOptsForm.get('csc_applyingfor').value);


    this.regAttrForm.addControl('csc_activityreasonsforchoice',
      new FormControl(rsDefault(regAttrData.csc_activityreasonsforchoice, ''), Validators.required));
  }

  private static ApplyingForValidatorFactory() {

    return (control: AbstractControl): { [key: string]: boolean } | null => {

      const formGroup = control as FormGroup;

      const regAttrForm = formGroup.get('Attributes') as FormGroup;
      const regOptsForm = formGroup.get('OptionSets') as FormGroup;

      if (regAttrForm && regOptsForm) {

        const applyingFor = regOptsForm.get('csc_applyingfor');

        const activityOther = regAttrForm.get('csc_activityotherspecify');

        if (applyingFor && applyingFor.value === ApplyingFor.General) {

          let selectedCount = 0;

          VolunteerRegistrationActivitiesComponent.otherFields.forEach(field => {

            const control = regAttrForm.get(field);
            if (control instanceof FormControl) {
              if (control.value === true) {
                selectedCount++;
              }
            }
          });

          if (selectedCount === 0 && activityOther && !activityOther.value) {
            return {applyingFor: true};
          }
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
