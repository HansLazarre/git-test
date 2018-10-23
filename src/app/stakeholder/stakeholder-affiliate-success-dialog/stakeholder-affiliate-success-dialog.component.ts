import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-stakeholder-affiliate-success-dialog',
  templateUrl: './stakeholder-affiliate-success-dialog.component.html',
  styleUrls: ['./stakeholder-affiliate-success-dialog.component.css']
})
export class StakeholderAffiliateSuccessDialogComponent implements OnInit {

  public organization;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.organization = data.organization;
  }

  ngOnInit() {
  }
}
