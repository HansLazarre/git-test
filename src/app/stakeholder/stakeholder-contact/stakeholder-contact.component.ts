import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import FormControlUtil from '../../utils/form-control-util';
import {rsDefault, rsFieldClass, rsTouch} from '../../form';
import {ContactHttpService} from '../../services/contact-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ValidatePostalCode} from '../../validators/postal-code.validator';
import {ValidatePhone} from '../../validators/phone.validator';

@Component({
  selector: 'app-stakeholder-contact',
  templateUrl: './stakeholder-contact.component.html',
  styleUrls: ['./stakeholder-contact.component.css']
})
export class StakeholderContactComponent implements OnInit {

  public form: FormGroup;
  public contactAttrForm: FormGroup;
  public contactOptsForm: FormGroup;

  public formUtil = FormControlUtil;
  public fieldClass = rsFieldClass;

  public success = undefined;
  public sending = false;

  constructor(private httpService: ContactHttpService, private router: Router, private route: ActivatedRoute) {

    this.form = new FormGroup({
      Contact: new FormGroup({
        Attributes: new FormGroup({}),
        OptionSets: new FormGroup({})
      }),
    });

    this.contactAttrForm = this.form.get('Contact').get('Attributes') as FormGroup;
    this.contactOptsForm = this.form.get('Contact').get('OptionSets') as FormGroup;
  }

  public ngOnInit() {

    this.route.data.subscribe((data: { Contact: any }) => {

      const contact = data.Contact;

      //
      this.contactAttrForm.addControl('firstname',
        new FormControl(rsDefault(contact.firstname, ''), Validators.required));

      this.contactAttrForm.addControl('middlename',
        new FormControl(rsDefault(contact.middlename, '')));

      this.contactAttrForm.addControl('lastname',
        new FormControl(rsDefault(contact.lastname, ''), Validators.required));


      this.contactAttrForm.addControl('address3_line1',
        new FormControl(rsDefault(contact.address3_line1, ''), Validators.required));

      this.contactAttrForm.addControl('address3_line2',
        new FormControl(rsDefault(contact.address3_line2, '')));

      this.contactAttrForm.addControl('address3_city',
        new FormControl(rsDefault(contact.address3_city, ''), Validators.required));

      this.contactAttrForm.addControl('address3_postofficebox',
        new FormControl(rsDefault(contact.address3_postofficebox, '')));

      this.contactAttrForm.addControl('address3_stateorprovince',
        new FormControl(rsDefault(contact.address3_stateorprovince, ''), Validators.required));

      this.contactAttrForm.addControl('address3_postalcode',
        new FormControl(rsDefault(contact.address3_postalcode, ''), [Validators.required, ValidatePostalCode]));

      this.contactAttrForm.addControl('address3_country',
        new FormControl(rsDefault(contact.address3_country, ''), Validators.required));

      //
      this.contactAttrForm.addControl('csc_stakeholdersameasmailing',
        new FormControl(rsDefault(contact.csc_stakeholdersameasmailing, false)));

      const addAddress2 = () => {

        this.contactAttrForm.addControl('csc_street1',
          new FormControl(rsDefault(contact.csc_street1, ''), Validators.required));

        this.contactAttrForm.addControl('csc_street2',
          new FormControl(rsDefault(contact.csc_street2, '')));

        this.contactAttrForm.addControl('csc_city',
          new FormControl(rsDefault(contact.csc_city, ''), Validators.required));

        this.contactAttrForm.addControl('csc_pobox',
          new FormControl(rsDefault(contact.csc_pobox, '')));

        this.contactAttrForm.addControl('csc_provinceterritory',
          new FormControl(rsDefault(contact.csc_provinceterritory, ''), Validators.required));

        this.contactAttrForm.addControl('csc_postalcode',
          new FormControl(rsDefault(contact.csc_postalcode, ''), [Validators.required, ValidatePostalCode]));

        this.contactAttrForm.addControl('csc_countryregion',
          new FormControl(rsDefault(contact.csc_countryregion, ''), Validators.required));
      };

      const removeAddress2 = () => {
        // todo need to set contact.csc_street1 to ''
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
        new FormControl(rsDefault(contact.csc_stakeholderphone1, ''), [Validators.required, ValidatePhone]));

      this.contactAttrForm.addControl('csc_stakeholderphone1ext1',
        new FormControl(rsDefault(contact.csc_stakeholderphone1ext1, '')));

      this.contactAttrForm.addControl('csc_stakeholderphone2',
        new FormControl(rsDefault(contact.csc_stakeholderphone2, ''), ValidatePhone));

      this.contactAttrForm.addControl('csc_stakeholderphone2ext1',
        new FormControl(rsDefault(contact.csc_stakeholderphone2ext1, '')));

    });
  }

  public finish() {
    rsTouch(this.form);

    if (this.form.valid) {

      this.sending = true;
      this.success = undefined;

      this.httpService.updateContact(this.form.value).subscribe(success => {

        this.sending = false;
        this.success = success;

        if (this.success) {
          this.router.navigate(['stakeholder-contact/done']);
        }
      });
    }
  }
}
