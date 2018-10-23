import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import FormControlUtil from '../../utils/form-control-util';
import {rsDefault, rsFieldClass, rsTouch} from '../../form';
import {ContactHttpService} from '../../services/contact-http.service';
import {ValidatePostalCode} from '../../validators/postal-code.validator';
import {ValidatePhone} from '../../validators/phone.validator';
import {VolunteerHttpService} from '../volunteer-http.service';

enum Gender {
  Male = 862430000,
  Female,
  Other
}

@Component({
  selector: 'app-volunteer-contact',
  templateUrl: './volunteer-contact.component.html',
  styleUrls: ['./volunteer-contact.component.css']
})
export class VolunteerContactComponent implements OnInit {

  public form: FormGroup;
  public contactForm: FormGroup;
  public contactAttrForm: FormGroup;
  public contactOptsForm: FormGroup;

  public formUtil = FormControlUtil;
  public fieldClass = rsFieldClass;

  public Gender = Gender;

  public success = undefined;
  public sending = false;

  constructor(private contactHttp: ContactHttpService, private volunteerHttp: VolunteerHttpService,
              private router: Router, private route: ActivatedRoute) {

    this.form = new FormGroup({
      Contact: new FormGroup({
        Attributes: new FormGroup({}),
        OptionSets: new FormGroup({})
      }),
    });

    this.contactForm = this.form.get('Contact') as FormGroup;
    this.contactAttrForm = this.contactForm.get('Attributes') as FormGroup;
    this.contactOptsForm = this.contactForm.get('OptionSets') as FormGroup;
  }

  public ngOnInit() {

    this.route.data.subscribe((data: { Contact: any }) => {

      const contact = data.Contact;

      // not updating our contact
      if (this.route.snapshot.params.id) {
        this.contactForm.addControl('Id', new FormControl(contact.contactid));
      }

      //
      this.contactAttrForm.addControl('firstname',
        new FormControl(rsDefault(contact.firstname, ''), Validators.required));

      this.contactAttrForm.addControl('middlename',
        new FormControl(rsDefault(contact.middlename, '')));

      this.contactAttrForm.addControl('lastname',
        new FormControl(rsDefault(contact.lastname, ''), Validators.required));


      this.contactAttrForm.addControl('csc_surnameatbirth',
        new FormControl(rsDefault(contact.csc_surnameatbirth, '')));

      this.contactAttrForm.addControl('csc_citizenship',
        new FormControl(contact.csc_citizenship, Validators.required));


      //
      this.contactOptsForm.addControl('csc_sex',
        new FormControl(contact.csc_sex.value, Validators.required));

      const fnSexOther = (value) => {
        if (value === 862430002) {
          this.contactAttrForm.addControl('csc_sexother',
            new FormControl(contact.csc_sexother, Validators.required));
        }
        else {
          contact.csc_sexother = undefined;
          this.contactAttrForm.removeControl('csc_sexother');
        }
      };

      fnSexOther(this.contactOptsForm.get('csc_sex').value);

      this.contactOptsForm.get('csc_sex').valueChanges.subscribe(fnSexOther);

      //
      this.contactOptsForm.addControl('csc_speaksenglish',
        new FormControl(rsDefault(contact.csc_speaksenglish.value, 0)));

      this.contactOptsForm.addControl('csc_speaksfrench',
        new FormControl(rsDefault(contact.csc_speaksfrench.value, 0)));


      //
      this.contactAttrForm.addControl('address1_line1',
        new FormControl(rsDefault(contact.address1_line1, ''), Validators.required));

      this.contactAttrForm.addControl('address1_line2',
        new FormControl(rsDefault(contact.address1_line2, '')));

      this.contactAttrForm.addControl('address1_city',
        new FormControl(rsDefault(contact.address1_city, ''), Validators.required));

      this.contactAttrForm.addControl('address1_postofficebox',
        new FormControl(rsDefault(contact.address1_postofficebox, '')));

      this.contactAttrForm.addControl('address1_stateorprovince',
        new FormControl(rsDefault(contact.address1_stateorprovince, ''), Validators.required));

      this.contactAttrForm.addControl('address1_postalcode',
        new FormControl(rsDefault(contact.address1_postalcode, ''), [Validators.required, ValidatePostalCode]));

      this.contactAttrForm.addControl('address1_country',
        new FormControl(rsDefault(contact.address1_country, ''), Validators.required));

      this.contactAttrForm.addControl('csc_mailingaddressissameasphysicaladdress',
        new FormControl(rsDefault(contact.csc_mailingaddressissameasphysicaladdress, false)));

      const addAddress2 = () => {
        this.contactAttrForm.addControl('address2_line1',
          new FormControl(rsDefault(contact.address2_line1, ''), Validators.required));

        this.contactAttrForm.addControl('address2_line2',
          new FormControl(rsDefault(contact.address2_line2, '')));

        this.contactAttrForm.addControl('address2_city',
          new FormControl(rsDefault(contact.address2_city, ''), Validators.required));

        this.contactAttrForm.addControl('address2_postofficebox',
          new FormControl(rsDefault(contact.address2_postofficebox, '')));

        this.contactAttrForm.addControl('address2_stateorprovince',
          new FormControl(rsDefault(contact.address2_stateorprovince, ''), Validators.required));

        this.contactAttrForm.addControl('address2_postalcode',
          new FormControl(rsDefault(contact.address2_postalcode, ''), [Validators.required, ValidatePostalCode]));

        this.contactAttrForm.addControl('address2_country',
          new FormControl(rsDefault(contact.address2_country, ''), Validators.required));
      };

      const removeAddress2 = () => {
        // todo need to set contact.address2_line1 to ''
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
        new FormControl(rsDefault(contact.telephone2, ''), [Validators.required, ValidatePhone]));

      this.contactAttrForm.addControl('telephone1', // business
        new FormControl(rsDefault(contact.telephone1, ''), ValidatePhone));

      this.contactAttrForm.addControl('csc_businessphoneextension',
        new FormControl(rsDefault(contact.csc_businessphoneextension, '')));

      this.contactAttrForm.addControl('csc_otherphone',
        new FormControl(rsDefault(contact.csc_otherphone, ''), ValidatePhone));

      this.contactAttrForm.addControl('csc_otherphoneextension',
        new FormControl(rsDefault(contact.csc_otherphoneextension, '')));
    });
  }

  public finish() {
    rsTouch(this.form);

    if (this.form.valid) {

      this.sending = true;
      this.success = undefined;

      if (!this.contactForm.get('Id')) {
        this.contactHttp.updateContact(this.form.value).subscribe(success => {

          this.sending = false;
          this.success = success;

          if (this.success) {
            this.router.navigate(['volunteer-contact/done']);
          }
        });
      }
      else {
        this.volunteerHttp.updateVolunteerAssistant(this.form.value).subscribe(success => {

          this.sending = false;
          this.success = success;

          if (this.success) {
            this.router.navigate(['volunteer-assistants']);
          }
        });
      }
    }
  }
}
