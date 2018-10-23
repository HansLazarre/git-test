import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VolunteerRegistrationDataService} from '../../volunteer-registration-data.service';
import {VolunteerHttpService} from '../../volunteer-http.service';
import {rsAddRemoveControl, rsTestOneZero, rsTouch} from '../../../form';

@Component({
  selector: 'app-volunteer-registration-security',
  templateUrl: './volunteer-registration-security.component.html',
  styleUrls: ['./volunteer-registration-security.component.css']
})
export class VolunteerRegistrationSecurityComponent implements OnInit {

  public form: FormGroup;

  public regAttrForm: FormGroup;
  public regOptsForm: FormGroup;

  public regRefsLocationForm: FormGroup;
  public regRefsRegionForm: FormGroup;

  public regions = [];
  public locations = [];

  constructor(private dataService: VolunteerRegistrationDataService, private httpService: VolunteerHttpService) {

    this.form = new FormGroup({
      Registration: new FormGroup({
        Attributes: new FormGroup({}),
        OptionSets: new FormGroup({}),
        References: new FormGroup({
          csc_cscregionid:
            new FormGroup({EntityName: new FormControl('csc_region')}),
          csc_interestedinvolunteeringatlocation:
            new FormGroup({EntityName: new FormControl('csc_csclocation')}),
        }),
      }),
    });

    this.regAttrForm = this.form.get('Registration').get('Attributes') as FormGroup;
    this.regOptsForm = this.form.get('Registration').get('OptionSets') as FormGroup;
    this.regRefsRegionForm = this.form.get('Registration').get('References').get('csc_cscregionid') as FormGroup;
    this.regRefsLocationForm = this.form.get('Registration').get('References').get('csc_interestedinvolunteeringatlocation') as FormGroup;
  }

  public ngOnInit() {

    const data = this.dataService.data;
    const regAttrData = (data.Registration && data.Registration.Attributes) ? data.Registration.Attributes : {};
    const regOptsData = (data.Registration && data.Registration.OptionSets) ? data.Registration.OptionSets : {};
    const regRefsData = (data.Registration && data.Registration.References) ? data.Registration.References : {};

    const regionData = regRefsData.csc_cscregionid ? regRefsData.csc_cscregionid : {};
    const locationData = regRefsData.csc_interestedinvolunteeringatlocation ? regRefsData.csc_interestedinvolunteeringatlocation : {};

    const fnLocations = (id) => {

      if (id) {
        const region = this.regions.find(_region => {
          return _region.id === id;
        });

        if (region) {
          this.locations = region.locations;
        }
      }
    };

    /// DEPENDANT ON regionData
    this.httpService.getRegions().subscribe(data => {
      this.regions = data.regions;

      fnLocations(regionData.Id);
    });

    this.regRefsRegionForm.addControl('Id',
      new FormControl(regionData.Id, Validators.required));

    this.regRefsLocationForm.addControl('Id',
      new FormControl(locationData.Id, Validators.required));

    this.regRefsRegionForm.get('Id').valueChanges.subscribe(value => {

      this.regRefsLocationForm.get('Id').setValue(undefined);

      fnLocations(value);
    });


    this.regOptsForm.addControl('csc_oninmatevisitinglist',
      new FormControl(regOptsData.csc_oninmatevisitinglist, Validators.required));

    const fn1 = rsAddRemoveControl(this.regAttrForm,
      'csc_oninmatevisitinglistdetails', rsTestOneZero, Validators.required, regAttrData);

    this.regOptsForm.get('csc_oninmatevisitinglist').valueChanges.subscribe(fn1);

    fn1(this.regOptsForm.get('csc_oninmatevisitinglist').value);


    this.regOptsForm.addControl('csc_personallyknowsoffenders',
      new FormControl(regOptsData.csc_personallyknowsoffenders, Validators.required));

    const fn2 = rsAddRemoveControl(this.regAttrForm,
      'csc_personallyknowsoffendersdetails', rsTestOneZero, Validators.required, regAttrData);

    this.regOptsForm.get('csc_personallyknowsoffenders').valueChanges.subscribe(fn2);

    fn2(this.regOptsForm.get('csc_personallyknowsoffenders').value);


    this.regOptsForm.addControl('csc_convictedofcriminaloffenceswithnopardon',
      new FormControl(regOptsData.csc_convictedofcriminaloffenceswithnopardon, Validators.required));

    this.regOptsForm.addControl('csc_outstandingcharges',
      new FormControl(regOptsData.csc_outstandingcharges, Validators.required));
  }

  public next() {
    rsTouch(this.form);
    this.dataService.synchronizeData(this.form.value);
  }
}
