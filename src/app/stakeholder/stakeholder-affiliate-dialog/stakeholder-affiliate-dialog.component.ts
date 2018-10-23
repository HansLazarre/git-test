import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StakeholderHttpService} from '../stakeholder-http.service';
import {StakeholderAffiliateSuccessDialogComponent} from '../stakeholder-affiliate-success-dialog/stakeholder-affiliate-success-dialog.component';
import {StakeholderAffiliateFailureDialogComponent} from '../stakeholder-affiliate-failure-dialog/stakeholder-affiliate-failure-dialog.component';
import {ValidatePhone} from '../../validators/phone.validator';
import {rsTouch} from '../../form';

@Component({
  selector: 'app-stakeholder-affiliate-dialog',
  templateUrl: './stakeholder-affiliate-dialog.component.html',
  styleUrls: ['./stakeholder-affiliate-dialog.component.css']
})
export class StakeholderAffiliateDialogComponent implements OnInit {

  public form: FormGroup;

  public success = undefined;
  public sending = false;

  public organization;

  constructor(private stakeholderHttp: StakeholderHttpService, @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
    this.organization = data.organization;
  }

  public ngOnInit() {
    this.form = new FormGroup({
      csc_role: new FormControl('', Validators.required),
      csc_telephone: new FormControl('', [Validators.required, ValidatePhone]),
      csc_email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  private openSuccessDialog(organization) {
    this.dialog.open(StakeholderAffiliateSuccessDialogComponent, {
      data: {
        organization: organization
      }
    });
  }

  private openFailureDialog(organization) {
    this.dialog.open(StakeholderAffiliateFailureDialogComponent, {
      data: {
        organization: organization
      }
    });
  }

  public affiliate() {

    rsTouch(this.form);

    if (this.form.valid) {

      this.sending = true;
      this.success = undefined;

      this.stakeholderHttp.createAffiliation(this.organization, this.form.value).subscribe(success => {
        this.sending = false;
        this.success = success;
        this.dialog.closeAll();

        if (this.success) {
          this.openSuccessDialog(this.organization);
        }
        else {
          this.openFailureDialog(this.organization);
        }
      });
    }
  }
}
