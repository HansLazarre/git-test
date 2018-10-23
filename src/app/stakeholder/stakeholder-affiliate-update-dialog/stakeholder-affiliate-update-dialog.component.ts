import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StakeholderHttpService} from '../stakeholder-http.service';
import {ValidatePhone} from '../../validators/phone.validator';

@Component({
  selector: 'app-stakeholder-affiliate-update-dialog',
  templateUrl: './stakeholder-affiliate-update-dialog.component.html',
  styleUrls: ['./stakeholder-affiliate-update-dialog.component.css']
})
export class StakeholderAffiliateUpdateDialogComponent implements OnInit {

  private;

  public form: FormGroup;

  public success = undefined;
  public sending = false;

  public affiliation;

  constructor(private stakeholderHttp: StakeholderHttpService, @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
    this.affiliation = data.affiliation;
  }

  public ngOnInit() {
    this.form = new FormGroup({
      csc_role: new FormControl(this.affiliation.role, Validators.required),
      csc_telephone: new FormControl(this.affiliation.telephone, [Validators.required, ValidatePhone]),
      csc_email: new FormControl(this.affiliation.email, [Validators.required, Validators.email]),
    });
  }

  public unaffiliate() {
    this.stakeholderHttp.unaffiliate(this.affiliation).subscribe((success) => {
      if (success) {
        this.dialog.closeAll();
      }
    });
  }

  public update() {

    if (this.form.valid) {

      this.sending = true;
      this.success = undefined;

      this.stakeholderHttp.updateAffiliation(this.affiliation, this.form.value).subscribe(success => {
        this.sending = false;
        this.success = success;

        if (this.success) {
          this.dialog.closeAll();
        }
      });
    }
  }
}
