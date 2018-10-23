import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {StakeholderHttpService} from '../stakeholder-http.service';

@Component({
  selector: 'app-stakeholder-organization-detail-dialog',
  templateUrl: './stakeholder-organization-detail-dialog.component.html',
  styleUrls: ['./stakeholder-organization-detail-dialog.component.css']
})
export class StakeholderOrganizationDetailDialogComponent implements OnInit {

  public organization;
  public affiliations = [];

  constructor(public stakeholderHttp: StakeholderHttpService, @Inject(MAT_DIALOG_DATA) public data: any) {

    this.organization = data.organization;
  }

  public ngOnInit() {

    this.stakeholderHttp.getOrganizationAffiliations(this.organization.id).subscribe(affiliations => {
      this.affiliations = affiliations;
    });
  }

  public unaffiliate(affiliation) {
    this.stakeholderHttp.unaffiliate(affiliation).subscribe((success) => {
        this.affiliations = this.affiliations.filter(function (_affiliation) {
          return affiliation.id != _affiliation.id;
        });
      }
    );
  }

}
