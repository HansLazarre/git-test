import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {StakeholderHttpService} from '../stakeholder-http.service';
import FormControlUtil from '../../utils/form-control-util';
import {rsFieldClass, rsTouch} from '../../form';
import {ValidatePostalCode} from '../../validators/postal-code.validator';
import {ValidatePhone} from '../../validators/phone.validator';

@Component({
  selector: 'app-stakeholder-organization-registration',
  templateUrl: './stakeholder-organization-registration.component.html',
  styleUrls: ['./stakeholder-organization-registration.component.css']
})
export class StakeholderOrganizationRegistrationComponent implements OnInit {

  public form: FormGroup;

  public orgAttrForm: FormGroup;
  public orgOptsForm: FormGroup;
  public orgRefsTypeForm: FormGroup;
  public orgRefsSubTypeForm: FormGroup;

  public formUtil = FormControlUtil;
  public fieldClass = rsFieldClass;

  public success = undefined;
  public sending = false;

  public types = [];
  public subtypes = [];

  /** checkboxes */
  private readonly partnershipTypes =
    ['csc_rehabilitative', 'csc_speicalinterestgroup', 'csc_supportgroup',
      'csc_criminaljusticepartners', 'csc_legislative', 'csc_otherlevelsofgovernment'];

  constructor(private httpService: StakeholderHttpService, private router: Router, private route: ActivatedRoute) {

    this.form = new FormGroup({
      Organization: new FormGroup({
        Attributes: new FormGroup({}, this.PartnershipTypesValidatorFactory()),
        OptionSets: new FormGroup({}),
        References: new FormGroup({
          csc_organizationmaintype:
            new FormGroup({EntityName: new FormControl('csc_organizationtype')}),
          csc_organizationsubtype:
            new FormGroup({EntityName: new FormControl('csc_organizationsubtype')}),
        }),
      }),
    });

    this.orgAttrForm = this.form.get('Organization').get('Attributes') as FormGroup;
    this.orgOptsForm = this.form.get('Organization').get('OptionSets') as FormGroup;
    this.orgRefsTypeForm = this.form.get('Organization').get('References').get('csc_organizationmaintype') as FormGroup;
    this.orgRefsSubTypeForm = this.form.get('Organization').get('References').get('csc_organizationsubtype') as FormGroup;
  }

  /**
   * TODO Added email here not sure where website url comes from. Figure the email should be different from the stakeholders
   */
  public ngOnInit() {

    const fnSubtypes = (id) => {

      if (id) {
        const type = this.types.find(_type => {
          return _type.id === id;
        });

        if (type && type.subtypes.length > 0) {

          this.subtypes = type.subtypes;

          if (!this.orgRefsSubTypeForm.get('Id')) {
            this.orgRefsSubTypeForm.addControl('Id', new FormControl(undefined, Validators.required));
          }

          this.orgRefsSubTypeForm.get('Id').setValue(undefined);
        }
        else {
          this.orgRefsSubTypeForm.removeControl('Id');
        }
      }
    };

    this.httpService.getOrganizationsTypes().subscribe(data => {
      this.types = data.types;
    });

    //
    this.orgAttrForm.addControl('csc_organizationname',
      new FormControl('', Validators.required));

    this.orgAttrForm.addControl('emailaddress',
      new FormControl('', [Validators.required, Validators.email]));

    this.orgRefsTypeForm.addControl('Id',
      new FormControl('', Validators.required));

    this.orgRefsTypeForm.get('Id').valueChanges.subscribe(value => {
      fnSubtypes(value);
    });

    this.partnershipTypes.forEach(field => {
      this.orgAttrForm.addControl(field, new FormControl(false));
    });

    //
    this.orgAttrForm.addControl('address1_line1',
      new FormControl('', Validators.required));

    this.orgAttrForm.addControl('address1_line2',
      new FormControl(''));

    this.orgAttrForm.addControl('csc_address1_city', // NOTE csc_address1_city
      new FormControl('', Validators.required));

    this.orgAttrForm.addControl('address1_postofficebox',
      new FormControl(''));

    this.orgAttrForm.addControl('address1_stateorprovince',
      new FormControl('', Validators.required));

    this.orgAttrForm.addControl('address1_postalcode',
      new FormControl('', [Validators.required, ValidatePostalCode]));

    this.orgAttrForm.addControl('address1_country',
      new FormControl('', Validators.required));


    this.form.addControl('mailingAddressSame', new FormControl(true));

    const addAddress2 = () => {
      this.orgAttrForm.addControl('address2_line1',
        new FormControl('', Validators.required));

      this.orgAttrForm.addControl('address2_line2',
        new FormControl(''));

      this.orgAttrForm.addControl('address2_city',
        new FormControl('', Validators.required));

      this.orgAttrForm.addControl('address2_postofficebox',
        new FormControl(''));

      this.orgAttrForm.addControl('address2_stateorprovince',
        new FormControl('', Validators.required));

      this.orgAttrForm.addControl('address2_postalcode',
        new FormControl('', [Validators.required, ValidatePostalCode]));

      this.orgAttrForm.addControl('address2_country',
        new FormControl('', Validators.required));
    };

    const removeAddress2 = () => {
      this.orgAttrForm.removeControl('address2_line1');
      this.orgAttrForm.removeControl('address2_line2');
      this.orgAttrForm.removeControl('address2_city');
      this.orgAttrForm.removeControl('address2_postofficebox');
      this.orgAttrForm.removeControl('address2_stateorprovince');
      this.orgAttrForm.removeControl('address2_postalcode');
      this.orgAttrForm.removeControl('address2_country');
    };

    this.form.get('mailingAddressSame').valueChanges.subscribe(value => {
      if (value === true) {
        removeAddress2();
      }
      else {
        addAddress2();
      }
    });

    if (this.form.get('mailingAddressSame').value !== true) {
      addAddress2();
    }

    this.orgAttrForm.addControl('address1_telephone1',
      new FormControl('', ValidatePhone));

    this.orgAttrForm.addControl('address1_telephone2',
      new FormControl('', ValidatePhone));
  }

  private PartnershipTypesValidatorFactory() {

    return (control: AbstractControl): { [key: string]: boolean } | null => {

      const orgAttrForm = control as FormGroup;

      let selectedCount = 0;

      this.partnershipTypes.forEach(field => {
        if (orgAttrForm.get(field) && orgAttrForm.get(field).value === true) {
          selectedCount++;
        }
      });

      if (selectedCount === 0) {
        return {partnershipType: true};
      }

      return null;
    };
  }

  public finish() {
    rsTouch(this.form);

    if (this.form.valid) {

      this.sending = true;
      this.success = undefined;

      this.httpService.registerOrganization(this.form.value).subscribe(response => {

        this.sending = false;
        this.success = response !== undefined;

        if (this.success) {
          this.router.navigate(['/organization-registration/done']);
        }
      });
    }
  }
}
