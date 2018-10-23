import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {rsDefault, rsFieldClass, rsTouch} from '../../../form';
import {VolunteerRegistrationDataService} from '../../volunteer-registration-data.service';
import {ValidatePhone} from '../../../validators/phone.validator';

enum Relationship {
  Professional = 862430000,
  Personal
}

@Component({
  selector: 'app-volunteer-registration-reference',
  templateUrl: './volunteer-registration-reference.component.html',
  styleUrls: ['./volunteer-registration-reference.component.css']
})
export class VolunteerRegistrationReferenceComponent implements OnInit {

  public form: FormGroup;

  public regForm: FormGroup;

  public regAttrForm: FormGroup;

  public regOptsForm: FormGroup;

  public fieldClass = rsFieldClass;

  public readonly Relationship = Relationship;

  constructor(private dataService: VolunteerRegistrationDataService) {

    this.form = new FormGroup({
      Registration: new FormGroup({
        Attributes: new FormGroup({}),
        OptionSets: new FormGroup({})
      }, [this.Contact1ValidatorFactory(), this.Contact2ValidatorFactory()])
    });

    this.regForm = this.form.get('Registration') as FormGroup;
    this.regAttrForm = this.form.get('Registration').get('Attributes') as FormGroup;
    this.regOptsForm = this.form.get('Registration').get('OptionSets') as FormGroup;
  }

  public ngOnInit() {

    const data = this.dataService.data;
    const regAttrData = (data.Registration && data.Registration.Attributes) ? data.Registration.Attributes : {};
    const regOptsData = (data.Registration && data.Registration.OptionSets) ? data.Registration.OptionSets : {};

    this.regAttrForm.addControl('csc_reference1name',
      new FormControl(regAttrData.csc_reference1name, Validators.required));

    this.regAttrForm.addControl('csc_reference1title',
      new FormControl(rsDefault(regAttrData.csc_reference1title, '')));

    this.regAttrForm.addControl('csc_reference1telephone',
      new FormControl(rsDefault(regAttrData.csc_reference1telephone, ''), ValidatePhone));

    this.regAttrForm.addControl('csc_reference1email',
      new FormControl(rsDefault(regAttrData.csc_reference1email, ''), Validators.email));

    this.regOptsForm.addControl('csc_reference1relationship',
      new FormControl(regOptsData.csc_reference1relationship, Validators.required));

    //
    this.regAttrForm.addControl('csc_reference2name',
      new FormControl(regAttrData.csc_reference2name, Validators.required));

    this.regAttrForm.addControl('csc_reference2title',
      new FormControl(rsDefault(regAttrData.csc_reference2title, '')));

    this.regAttrForm.addControl('csc_reference2telephone',
      new FormControl(rsDefault(regAttrData.csc_reference2telephone, ''), ValidatePhone));

    this.regAttrForm.addControl('csc_reference2email',
      new FormControl(rsDefault(regAttrData.csc_reference2email, ''), Validators.email));

    this.regOptsForm.addControl('csc_reference2relationship',
      new FormControl(regOptsData.csc_reference2relationship, Validators.required));
  }

  private Contact1ValidatorFactory() {

    return (control: AbstractControl): { [key: string]: boolean } | null => {

      const formGroup = control as FormGroup;

      if (formGroup.get('Attributes').get('csc_reference1email') &&
        formGroup.get('Attributes').get('csc_reference1telephone')) {

        if (formGroup.get('Attributes').get('csc_reference1email').value === '' &&
          formGroup.get('Attributes').get('csc_reference1telephone').value === '') {

          return {contact1: true}; // TODO only if touched
        }
      }

      return null;
    };
  }

  private Contact2ValidatorFactory() {

    return (control: AbstractControl): { [key: string]: boolean } | null => {

      const formGroup = control as FormGroup;

      if (formGroup.get('Attributes').get('csc_reference2email') &&
        formGroup.get('Attributes').get('csc_reference2telephone')) {

        if (formGroup.get('Attributes').get('csc_reference2email').value === '' &&
          formGroup.get('Attributes').get('csc_reference2telephone').value === '') {

          return {contact2: true}; // TODO only if touched
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
