import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VolunteerRegistrationDataService} from '../../volunteer-registration-data.service';

import {rsAddRemoveControl, rsDefault, rsFieldClass, rsTestOneZero, rsTouch} from '../../../form';

enum HearAbout {
  Friend = 862430000,
  Colleague,
  Other
}

@Component({
  selector: 'app-volunteer-registration-experience',
  templateUrl: './volunteer-registration-experience.component.html',
  styleUrls: ['./volunteer-registration-experience.component.css']
})
export class VolunteerRegistrationExperienceComponent implements OnInit {

  public form: FormGroup;

  public regAttrForm: FormGroup;

  public regOptsForm: FormGroup;

  public fieldClass = rsFieldClass;

  public readonly HearAbout = HearAbout;

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

    [
      {field: 'csc_previousworkvolunteerexperience', dependent: 'csc_previousworkvolunteerexperiencedetails'},
      {field: 'csc_affiliationscommunitygroups', dependent: 'csc_affiliationscommunitygroupsdetails'},
      {
        field: 'csc_currentlyvolunteeringapplyingtovolunteerw',
        dependent: 'csc_currentlyvolunteeringapplyingtovolunteerd'
      },
    ].forEach((fields) => {

      this.regOptsForm.addControl(fields.field, new FormControl(regOptsData[fields.field], Validators.required));


      const fn1 = rsAddRemoveControl(this.regAttrForm, fields.dependent, rsTestOneZero, Validators.required, regAttrData);

      this.regOptsForm.get(fields.field).valueChanges.subscribe(fn1);

      fn1(this.regOptsForm.get(fields.field).value);
    });


    this.regOptsForm.addControl('csc_howdidtheyhearaboutvolunteeringwithcsc',
      new FormControl(regOptsData.csc_howdidtheyhearaboutvolunteeringwithcsc, Validators.required));


    const fn2 = rsAddRemoveControl(this.regAttrForm, 'csc_howdidtheyhearaboutvolunteeringdetails', value => {
      return value === this.HearAbout.Other;
    }, Validators.required, regAttrData);

    this.regOptsForm.get('csc_howdidtheyhearaboutvolunteeringwithcsc').valueChanges.subscribe(fn2);

    fn2(this.regOptsForm.get('csc_howdidtheyhearaboutvolunteeringwithcsc').value);


    this.regAttrForm.addControl('csc_specialskillsorexpertise',
      new FormControl(rsDefault(regAttrData.csc_specialskillsorexpertise, ''), Validators.required));

    this.regAttrForm.addControl('csc_whydoyouwanttovolunteer',
      new FormControl(rsDefault(regAttrData.csc_whydoyouwanttovolunteer, ''), Validators.required));

    this.regAttrForm.addControl('csc_availability',
      new FormControl(rsDefault(regAttrData.csc_availability, ''), Validators.required));
  }

  public next() {
    rsTouch(this.form);
    this.dataService.synchronizeData(this.form.value);
  }
}
