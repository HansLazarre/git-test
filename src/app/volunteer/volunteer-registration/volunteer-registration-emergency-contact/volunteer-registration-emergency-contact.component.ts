import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {VolunteerRegistrationDataService} from '../../volunteer-registration-data.service';

import {rsDefault, rsFieldClass, rsTouch} from '../../../form';
import {ValidatePhone} from '../../../validators/phone.validator';


enum PhoneTypes {
  Home = 862430000,
  Work,
  Cell
}

@Component({
  selector: 'app-volunteer-registration-emergency-contact',
  templateUrl: './volunteer-registration-emergency-contact.component.html',
  styleUrls: ['./volunteer-registration-emergency-contact.component.css']
})
export class VolunteerRegistrationEmergencyContactComponent implements OnInit {

  public form: FormGroup;

  public regAttrForm: FormGroup;

  public regOptsForm: FormGroup;

  public fieldClass = rsFieldClass;

  public readonly PhoneTypes = PhoneTypes;

  constructor(private dataService: VolunteerRegistrationDataService) {

    this.form = new FormGroup({
      Registration: new FormGroup({
        Attributes: new FormGroup({}),
        OptionSets: new FormGroup({})
      })
    });

    this.regAttrForm = this.form.get('Registration').get('Attributes') as FormGroup;
    this.regOptsForm = this.form.get('Registration').get('OptionSets') as FormGroup;
  }

  public ngOnInit() {

    const data = this.dataService.data;
    const regAttrData = (data.Registration && data.Registration.Attributes) ? data.Registration.Attributes : {};
    const regOptsData = (data.Registration && data.Registration.OptionSets) ? data.Registration.OptionSets : {};

    this.regAttrForm.addControl('csc_emergencycontact1name',
      new FormControl(regAttrData.csc_emergencycontact1name, Validators.required));

    this.regAttrForm.addControl('csc_emergencycontact1address',
      new FormControl(regAttrData.csc_emergencycontact1address, Validators.required));

    this.regOptsForm.addControl('csc_emergencycontact1phone1type',
      new FormControl(regOptsData.csc_emergencycontact1phone1type, Validators.required));

    this.regAttrForm.addControl('csc_emergencycontact1phone1number',
      new FormControl(regAttrData.csc_emergencycontact1phone1number, [Validators.required, ValidatePhone]));

    this.regOptsForm.addControl('csc_emergencycontact1phone2type', // TODO allow crm to accept undefined
      new FormControl(rsDefault(regOptsData.csc_emergencycontact1phone2type, PhoneTypes.Home)));

    this.regAttrForm.addControl('csc_emergencycontact1phone2number',
      new FormControl(rsDefault(regAttrData.csc_emergencycontact1phone2number, ''), ValidatePhone));


    this.form.addControl('secondEmergencyContact',
      new FormControl(rsDefault(this.dataService.data.secondEmergencyContact, false)));

    const fnSecondContact = value => {

      if (value === true) {

        this.regAttrForm.addControl('csc_emergencycontact2name',
          new FormControl(rsDefault(regAttrData.csc_emergencycontact2name, ''), Validators.required));

        this.regAttrForm.addControl('csc_emergencycontact2address',
          new FormControl(rsDefault(regAttrData.csc_emergencycontact2address, ''), Validators.required));


        this.regOptsForm.addControl('csc_emergencycontact2phone1type',
          new FormControl(regOptsData.csc_emergencycontact2phone1type, Validators.required));

        this.regAttrForm.addControl('csc_emergencycontact2phone1number',
          new FormControl(regAttrData.csc_emergencycontact2phone1number, [Validators.required, ValidatePhone]));

        this.regOptsForm.addControl('csc_emergencycontact2phone2type',  // TODO allow crm to accept undefined
          new FormControl(rsDefault(regOptsData.csc_emergencycontact2phone2type, PhoneTypes.Home)));

        this.regAttrForm.addControl('csc_emergencycontact2phone2number',
          new FormControl(rsDefault(regAttrData.csc_emergencycontact2phone2number, ''), ValidatePhone));
      }
      else {

        // need to clear the data if its being removed
        regAttrData.csc_emergencycontact2name = undefined;
        regAttrData.csc_emergencycontact2address = undefined;
        regOptsData.csc_emergencycontact2phone1type = undefined;
        regAttrData.csc_emergencycontact2phone1number = undefined;
        regOptsData.csc_emergencycontact2phone2type = undefined;
        regAttrData.csc_emergencycontact2phone2number = undefined;

        this.regAttrForm.removeControl('csc_emergencycontact2name');
        this.regAttrForm.removeControl('csc_emergencycontact2address');
        this.regOptsForm.removeControl('csc_emergencycontact2phone1type');
        this.regAttrForm.removeControl('csc_emergencycontact2phone1number');
        this.regOptsForm.removeControl('csc_emergencycontact2phone2type');
        this.regAttrForm.removeControl('csc_emergencycontact2phone2number');

      }
    };

    this.form.get('secondEmergencyContact').valueChanges.subscribe(fnSecondContact);

    fnSecondContact(this.form.get('secondEmergencyContact').value);
  }

  public next() {
    rsTouch(this.form);
    this.dataService.synchronizeData(this.form.value);
  }
}
