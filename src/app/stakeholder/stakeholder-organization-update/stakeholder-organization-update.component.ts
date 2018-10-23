import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import FormControlUtil from '../../utils/form-control-util';
import {rsDefault, rsFieldClass, rsTouch} from '../../form';
import {StakeholderHttpService} from '../stakeholder-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ValidatePostalCode} from '../../validators/postal-code.validator';
import {ValidatePhone} from '../../validators/phone.validator';

@Component({
  selector: 'app-stakeholder-organization-update',
  templateUrl: './stakeholder-organization-update.component.html',
  styleUrls: ['./stakeholder-organization-update.component.css']
})
export class StakeholderOrganizationUpdateComponent implements OnInit {
  @Input() id: string;

  public form: FormGroup;

  public orgForm: FormGroup;
  public orgAttrForm: FormGroup;
  public orgOptsForm: FormGroup;
  public orgRefsTypeForm: FormGroup;
  public orgRefsSubTypeForm: FormGroup;

  public formUtil = FormControlUtil;
  public fieldClass = rsFieldClass;

  public success = undefined;
  public sending = false;

  public organizationTypes = [];
  public subtypes = [];

  /** checkboxes */
  private readonly partnershipTypes =
    ['csc_rehabilitative', 'csc_speicalinterestgroup', 'csc_supportgroup',
      'csc_criminaljusticepartners', 'csc_legislative', 'csc_otherlevelsofgovernment'];

  constructor(private httpService: StakeholderHttpService, private router: Router, private route: ActivatedRoute) {

    // NOTE this is significantly different from the register (because they hate developers)
    this.form = new FormGroup({
      Organization: new FormGroup({
        Attributes: new FormGroup({}, this.PartnershipTypesValidatorFactory()),
        OptionSets: new FormGroup({}),
        References: new FormGroup({
          csc_organizationtype:
            new FormGroup({EntityName: new FormControl('csc_organizationtype')}),
          csc_organizationsubtype:
            new FormGroup({EntityName: new FormControl('csc_organizationsubtype')}),
        }),
      }),
    });

    this.orgForm = this.form.get('Organization') as FormGroup;
    this.orgAttrForm = this.orgForm.get('Attributes') as FormGroup;
    this.orgOptsForm = this.orgForm.get('OptionSets') as FormGroup;
    this.orgRefsTypeForm = this.orgForm.get('References').get('csc_organizationtype') as FormGroup;
    this.orgRefsSubTypeForm = this.orgForm.get('References').get('csc_organizationsubtype') as FormGroup;
  }

  public ngOnInit() {

    this.route.data.subscribe((data: { data: { Organization: any, OrganizationTypes: any } }) => {

      const organization = data.data.Organization;

      this.organizationTypes = data.data.OrganizationTypes;


      const fnSubtypes = (id) => {

        if (id) {
          const type = this.organizationTypes.find(_type => {
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

      this.orgForm.addControl('Id', new FormControl(organization.accountid));

      //
      this.orgAttrForm.addControl('name',
        new FormControl(rsDefault(organization.name, ''), Validators.required));

      this.orgAttrForm.addControl('emailaddress1',
        new FormControl(rsDefault(organization.emailaddress1, ''), [Validators.required, Validators.email]));

      this.orgRefsTypeForm.addControl('Id',
        new FormControl(rsDefault(organization.csc_organizationtype.id, ''), Validators.required));

      if (organization.csc_organizationtype.id) {
        fnSubtypes(organization.csc_organizationtype.id);
        // if it was added set the value
        if (this.orgRefsSubTypeForm.get('Id')) {
          this.orgRefsSubTypeForm.get('Id').setValue(organization.csc_organizationsubtype.id);
        }
      }

      this.orgRefsTypeForm.get('Id').valueChanges.subscribe(value => {
        fnSubtypes(value);
      });

      this.partnershipTypes.forEach(field => {
        this.orgAttrForm.addControl(field, new FormControl(rsDefault(organization[field], false)));
      });

      //
      this.orgAttrForm.addControl('address1_line1',
        new FormControl(rsDefault(organization.address1_line1, ''), Validators.required));

      this.orgAttrForm.addControl('address1_line2',
        new FormControl(rsDefault(organization.address1_line2, '')));

      this.orgAttrForm.addControl('address1_city',
        new FormControl(rsDefault(organization.address1_city, ''), Validators.required));

      this.orgAttrForm.addControl('address1_postofficebox',
        new FormControl(rsDefault(organization.address1_postofficebox, '')));

      this.orgAttrForm.addControl('address1_stateorprovince',
        new FormControl(rsDefault(organization.address1_stateorprovince, ''), Validators.required));

      this.orgAttrForm.addControl('address1_postalcode',
        new FormControl(rsDefault(organization.address1_postalcode, ''), [Validators.required, ValidatePostalCode]));

      this.orgAttrForm.addControl('address1_country',
        new FormControl(rsDefault(organization.address1_country, ''), Validators.required));


      // todo this is not a field
      this.form.addControl('mailingAddressSame', new FormControl(!organization.address2_stateorprovince));

      const addAddress2 = () => {
        this.orgAttrForm.addControl('address2_line1',
          new FormControl(rsDefault(organization.address2_line1, ''), Validators.required));

        this.orgAttrForm.addControl('address2_line2',
          new FormControl(rsDefault(organization.address2_line2, '')));

        this.orgAttrForm.addControl('address2_city',
          new FormControl(rsDefault(organization.address2_city, ''), Validators.required));

        this.orgAttrForm.addControl('address2_postofficebox',
          new FormControl(rsDefault(organization.address2_postofficebox, '')));

        this.orgAttrForm.addControl('address2_stateorprovince',
          new FormControl(rsDefault(organization.address2_stateorprovince, ''), Validators.required));

        this.orgAttrForm.addControl('address2_postalcode',
          new FormControl(rsDefault(organization.address2_postalcode, ''), [Validators.required, ValidatePostalCode]));

        this.orgAttrForm.addControl('address2_country',
          new FormControl(rsDefault(organization.address2_country, ''), Validators.required));
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

      this.orgAttrForm.addControl('telephone1',
        new FormControl(organization.telephone1, [Validators.required, ValidatePhone]));

      this.orgAttrForm.addControl('telephone2',
        new FormControl(organization.telephone2, ValidatePhone));
    });
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

      this.httpService.updateOrganization(this.form.value).subscribe(response => {

        this.sending = false;
        this.success = response !== undefined;

        if (this.success) {
          this.router.navigate(['/owner-organizations']);
        }
      });
    }
  }
}
