import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {StakeholderRegistrationDataService} from '../../stakeholder-registration-data.service';

import FormControlUtil from '../../../utils/form-control-util';
import {ValidatePhone} from '../../../validators/phone.validator';
import {ValidatePostalCode} from '../../../validators/postal-code.validator';
import {rsDefault, rsTouch} from '../../../form';
import {AuthService} from '../../../services/auth.service';


@Component({
  selector: 'app-stakeholder-registration-contact',
  templateUrl: './stakeholder-registration-contact.component.html',
  styleUrls: ['./stakeholder-registration-contact.component.css']
})
export class StakeholderRegistrationContactComponent implements OnInit {

  public form: FormGroup;

  public contactAttrForm: FormGroup;

  public formUtil = FormControlUtil;

  constructor(private dataService: StakeholderRegistrationDataService, private authService: AuthService) {

    this.form = new FormGroup({
      Contact: new FormGroup({
        Attributes: new FormGroup({})
      })
    });

    this.contactAttrForm = this.form.get('Contact').get('Attributes') as FormGroup;
  }

  public ngOnInit() {

    const data = this.dataService.data;
    const contactAttrData = (data.Contact && data.Contact.Attributes) ? data.Contact.Attributes : {};

    const contact = this.authService.contact ? this.authService.contact : {};

    //
    this.contactAttrForm.addControl('firstname',
      new FormControl(rsDefault(contactAttrData.firstname, contact.firstname), Validators.required));

    this.contactAttrForm.addControl('middlename',
      new FormControl(rsDefault(contactAttrData.middlename, rsDefault(contact.middlename, ''))));

    this.contactAttrForm.addControl('lastname',
      new FormControl(rsDefault(contactAttrData.lastname, contact.lastname), Validators.required));

    //
    this.contactAttrForm.addControl('address3_line1',
      new FormControl(rsDefault(contactAttrData.address3_line1, ''), Validators.required));

    this.contactAttrForm.addControl('address3_line2',
      new FormControl(rsDefault(contactAttrData.address3_line2, '')));

    this.contactAttrForm.addControl('address3_city',
      new FormControl(rsDefault(contactAttrData.address3_city, ''), Validators.required));

    this.contactAttrForm.addControl('address3_postofficebox',
      new FormControl(rsDefault(contactAttrData.address3_postofficebox, '')));

    this.contactAttrForm.addControl('address3_stateorprovince',
      new FormControl(rsDefault(contactAttrData.address3_stateorprovince, ''), Validators.required));

    this.contactAttrForm.addControl('address3_postalcode',
      new FormControl(rsDefault(contactAttrData.address3_postalcode, ''), [Validators.required, ValidatePostalCode]));

    this.contactAttrForm.addControl('address3_country',
      new FormControl(rsDefault(contactAttrData.address3_country, ''), Validators.required));

    //
    this.contactAttrForm.addControl('csc_stakeholdersameasmailing',
      new FormControl(rsDefault(contactAttrData.csc_stakeholdersameasmailing, false)));

    const addAddress2 = () => {

      this.contactAttrForm.addControl('csc_street1',
        new FormControl(rsDefault(contactAttrData.csc_street1, ''), Validators.required));

      this.contactAttrForm.addControl('csc_street2',
        new FormControl(rsDefault(contactAttrData.csc_street2, '')));

      this.contactAttrForm.addControl('csc_city',
        new FormControl(rsDefault(contactAttrData.csc_city, ''), Validators.required));

      this.contactAttrForm.addControl('csc_pobox',
        new FormControl(rsDefault(contactAttrData.csc_pobox, '')));

      this.contactAttrForm.addControl('csc_provinceterritory',
        new FormControl(rsDefault(contactAttrData.csc_provinceterritory, ''), Validators.required));

      this.contactAttrForm.addControl('csc_postalcode',
        new FormControl(rsDefault(contactAttrData.csc_postalcode, ''), [Validators.required, ValidatePostalCode]));

      this.contactAttrForm.addControl('csc_countryregion',
        new FormControl(rsDefault(contactAttrData.csc_countryregion, ''), Validators.required));
    };

    const removeAddress2 = () => {

      contactAttrData.csc_street1 = undefined;
      contactAttrData.csc_street2 = undefined;
      contactAttrData.csc_city = undefined;
      contactAttrData.csc_pobox = undefined;
      contactAttrData.csc_provinceterritory = undefined;
      contactAttrData.csc_postalcode = undefined;
      contactAttrData.csc_countryregion = undefined;

      this.contactAttrForm.removeControl('csc_street1');
      this.contactAttrForm.removeControl('csc_street2');
      this.contactAttrForm.removeControl('csc_city');
      this.contactAttrForm.removeControl('csc_pobox');
      this.contactAttrForm.removeControl('csc_provinceterritory');
      this.contactAttrForm.removeControl('csc_postalcode');
      this.contactAttrForm.removeControl('csc_countryregion');
    };

    this.contactAttrForm.get('csc_stakeholdersameasmailing').valueChanges.subscribe(value => {

      if (value === true) {
        removeAddress2();
      }
      else {
        addAddress2();
      }
    });

    if (this.contactAttrForm.get('csc_stakeholdersameasmailing').value !== true) {
      addAddress2();
    }

    //
    this.contactAttrForm.addControl('csc_stakeholderphone1',
      new FormControl(rsDefault(contactAttrData.csc_stakeholderphone1, ''), [Validators.required, ValidatePhone]));

    this.contactAttrForm.addControl('csc_stakeholderphone1ext1',
      new FormControl(rsDefault(contactAttrData.csc_stakeholderphone1ext1, '')));

    this.contactAttrForm.addControl('csc_stakeholderphone2',
      new FormControl(rsDefault(contactAttrData.csc_stakeholderphone2, ''), ValidatePhone));

    this.contactAttrForm.addControl('csc_stakeholderphone2ext1',
      new FormControl(rsDefault(contactAttrData.csc_stakeholderphone2ext1, '')));
  }

  public next() {
    rsTouch(this.form);
    this.dataService.synchronizeData(this.form.value);
  }
}
