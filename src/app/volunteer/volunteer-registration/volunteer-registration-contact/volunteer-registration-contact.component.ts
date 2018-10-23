import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../../../services/auth.service';
import {VolunteerRegistrationDataService} from '../../volunteer-registration-data.service';

import FormControlUtil from '../../../utils/form-control-util';
import {rsDefault, rsFieldClass, rsTouch} from '../../../form';
import {ValidatePhone} from '../../../validators/phone.validator';
import {ValidatePostalCode} from '../../../validators/postal-code.validator';

@Component({
  selector: 'app-volunteer-registration-contact',
  templateUrl: './volunteer-registration-contact.component.html',
  styleUrls: ['./volunteer-registration-contact.component.css']
})
export class VolunteerRegistrationContactComponent implements OnInit {

  public form: FormGroup;

  public contactAttrForm: FormGroup;

  public contactOptsForm: FormGroup;

  public regAttrForm: FormGroup;

  public regOptsForm: FormGroup;

  public formUtil = FormControlUtil;

  public fieldClass = rsFieldClass;

  constructor(private dataService: VolunteerRegistrationDataService, private authService: AuthService) {

    this.form = new FormGroup({
      Contact: new FormGroup({
        Attributes: new FormGroup({}),
        OptionSets: new FormGroup({})
      }),

      Registration: new FormGroup({
        Attributes: new FormGroup({}),
        OptionSets: new FormGroup({})
      })
    }, this.LanguageValidatorFactory());

    this.contactAttrForm = this.form.get('Contact').get('Attributes') as FormGroup;
    this.contactOptsForm = this.form.get('Contact').get('OptionSets') as FormGroup;
    this.regAttrForm = this.form.get('Registration').get('Attributes') as FormGroup;
    this.regOptsForm = this.form.get('Registration').get('OptionSets') as FormGroup;
  }

  public ngOnInit() {

    const data = this.dataService.data;
    const contactAttrData = (data.Contact && data.Contact.Attributes) ? data.Contact.Attributes : {};
    const contactOptsData = (data.Contact && data.Contact.OptionSets) ? data.Contact.OptionSets : {};
    const regAttrData = (data.Registration && data.Registration.Attributes) ? data.Registration.Attributes : {};
    const regOptsData = (data.Registration && data.Registration.OptionSets) ? data.Registration.OptionSets : {};

    const contact = this.authService.contact ? this.authService.contact : {};

    //
    this.contactAttrForm.addControl('firstname',
      new FormControl(rsDefault(contactAttrData.firstname, contact.firstname), Validators.required));

    this.contactAttrForm.addControl('middlename',
      new FormControl(rsDefault(contactAttrData.middlename, rsDefault(contact.middlename, ''))));

    this.contactAttrForm.addControl('lastname',
      new FormControl(rsDefault(contactAttrData.lastname, contact.lastname), Validators.required));

    this.contactAttrForm.addControl('csc_surnameatbirth',
      new FormControl(rsDefault(contactAttrData.csc_surnameatbirth, '')));

    this.contactAttrForm.addControl('csc_citizenship',
      new FormControl(contactAttrData.csc_citizenship, Validators.required));


    //
    this.contactOptsForm.addControl('csc_sex',
      new FormControl(contactOptsData.csc_sex, Validators.required));

    const fnSexOther = (value) => {
      if (value === 862430002) {
        this.contactAttrForm.addControl('csc_sexother',
          new FormControl(contactAttrData.csc_sexother, Validators.required));
      }
      else {
        contactAttrData.csc_sexother = undefined;
        this.contactAttrForm.removeControl('csc_sexother');
      }
    };

    fnSexOther(this.contactOptsForm.get('csc_sex').value);

    this.contactOptsForm.get('csc_sex').valueChanges.subscribe(fnSexOther);

    //
    this.contactOptsForm.addControl('csc_speaksenglish',
      new FormControl(rsDefault(contactOptsData.csc_speaksenglish, 0)));

    this.contactOptsForm.addControl('csc_speaksfrench',
      new FormControl(rsDefault(contactOptsData.csc_speaksfrench, 0)));

    this.regAttrForm.addControl('csc_otherlanguagesspoken',
      new FormControl(rsDefault(regAttrData.csc_otherlanguagesspoken, '')));


    //
    this.contactAttrForm.addControl('address1_line1',
      new FormControl(rsDefault(contactAttrData.address1_line1, ''), Validators.required));

    this.contactAttrForm.addControl('address1_line2',
      new FormControl(rsDefault(contactAttrData.address1_line2, '')));

    this.contactAttrForm.addControl('address1_city',
      new FormControl(rsDefault(contactAttrData.address1_city, ''), Validators.required));

    this.contactAttrForm.addControl('address1_postofficebox',
      new FormControl(rsDefault(contactAttrData.address1_postofficebox, '')));

    this.contactAttrForm.addControl('address1_stateorprovince',
      new FormControl(rsDefault(contactAttrData.address1_stateorprovince, ''), Validators.required));

    this.contactAttrForm.addControl('address1_postalcode',
      new FormControl(rsDefault(contactAttrData.address1_postalcode, ''), [Validators.required, ValidatePostalCode]));

    this.contactAttrForm.addControl('address1_country',
      new FormControl(rsDefault(contactAttrData.address1_country, ''), Validators.required));

    //
    this.contactAttrForm.addControl('csc_mailingaddressissameasphysicaladdress',
      new FormControl(rsDefault(contactAttrData.csc_mailingaddressissameasphysicaladdress, false)));

    const addAddress2 = () => {
      this.contactAttrForm.addControl('address2_line1',
        new FormControl(rsDefault(contactAttrData.address2_line1, ''), Validators.required));

      this.contactAttrForm.addControl('address2_line2',
        new FormControl(rsDefault(contactAttrData.address2_line2, '')));

      this.contactAttrForm.addControl('address2_city',
        new FormControl(rsDefault(contactAttrData.address2_city, ''), Validators.required));

      this.contactAttrForm.addControl('address2_postofficebox',
        new FormControl(rsDefault(contactAttrData.address2_postofficebox, '')));

      this.contactAttrForm.addControl('address2_stateorprovince',
        new FormControl(rsDefault(contactAttrData.address2_stateorprovince, ''), Validators.required));

      this.contactAttrForm.addControl('address2_postalcode',
        new FormControl(rsDefault(contactAttrData.address2_postalcode, ''), [Validators.required, ValidatePostalCode]));

      this.contactAttrForm.addControl('address2_country',
        new FormControl(rsDefault(contactAttrData.address2_country, ''), Validators.required));
    };

    const removeAddress2 = () => {

      contactAttrData.address2_line1 = undefined;
      contactAttrData.address2_line2 = undefined;
      contactAttrData.address2_city = undefined;
      contactAttrData.address2_postofficebox = undefined;
      contactAttrData.address2_postofficebox = undefined;
      contactAttrData.address2_stateorprovince = undefined;
      contactAttrData.address2_postalcode = undefined;
      contactAttrData.address2_country = undefined;

      this.contactAttrForm.removeControl('address2_line1');
      this.contactAttrForm.removeControl('address2_line2');
      this.contactAttrForm.removeControl('address2_city');
      this.contactAttrForm.removeControl('address2_postofficebox');
      this.contactAttrForm.removeControl('address2_stateorprovince');
      this.contactAttrForm.removeControl('address2_postalcode');
      this.contactAttrForm.removeControl('address2_country');
    };

    this.contactAttrForm.get('csc_mailingaddressissameasphysicaladdress').valueChanges.subscribe(value => {

      if (value === true) {
        removeAddress2();
      }
      else {
        addAddress2();
      }
    });

    if (this.contactAttrForm.get('csc_mailingaddressissameasphysicaladdress').value !== true) {
      addAddress2();
    }

    //
    this.contactAttrForm.addControl('telephone2', // home phone
      new FormControl(rsDefault(contactAttrData.telephone2, ''), [Validators.required, ValidatePhone]));

    this.contactAttrForm.addControl('telephone1', // business
      new FormControl(rsDefault(contactAttrData.telephone1, ''), ValidatePhone));

    this.contactAttrForm.addControl('csc_businessphoneextension',
      new FormControl(rsDefault(contactAttrData.csc_businessphoneextension, '')));

    this.contactAttrForm.addControl('csc_otherphone',
      new FormControl(rsDefault(contactAttrData.csc_otherphone, ''), ValidatePhone));

    this.contactAttrForm.addControl('csc_otherphoneextension',
      new FormControl(rsDefault(contactAttrData.csc_otherphoneextension, '')));


    this.regOptsForm.addControl('csc_oktophoneatworkplace',
      new FormControl(rsDefault(regOptsData.csc_oktophoneatworkplace, 0)));

    this.regOptsForm.addControl('csc_isageofmajority',
      new FormControl(rsDefault(regOptsData.csc_isageofmajority, 0), [Validators.required, Validators.pattern('1')]));

    this.regOptsForm.addControl('csc_iscitizenorcanadianresident5years',
      new FormControl(rsDefault(regOptsData.csc_iscitizenorcanadianresident5years, 0), [Validators.required, Validators.pattern('1')]));
  }

  private LanguageValidatorFactory() {

    return (control: AbstractControl): { [key: string]: boolean } | null => {

      const formGroup = control as FormGroup;

      if (formGroup.get('Contact').get('OptionSets').get('csc_speaksenglish') &&
        formGroup.get('Contact').get('OptionSets').get('csc_speaksfrench') &&
        formGroup.get('Registration').get('Attributes').get('csc_otherlanguagesspoken')) {

        if (formGroup.get('Contact').get('OptionSets').get('csc_speaksenglish').value === 0 &&
          formGroup.get('Contact').get('OptionSets').get('csc_speaksfrench').value === 0 &&
          formGroup.get('Registration').get('Attributes').get('csc_otherlanguagesspoken').value === '') {

          return {language: true}; // TODO only if touched
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
