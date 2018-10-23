import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-stakeholder-affiliate-failure-dialog',
  templateUrl: './stakeholder-affiliate-failure-dialog.component.html',
  styleUrls: ['./stakeholder-affiliate-failure-dialog.component.css']
})
export class StakeholderAffiliateFailureDialogComponent implements OnInit {

  public organization;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.organization = data.organization;
  }

  ngOnInit() {
  }
}
