import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import {AuthService} from '../../services/auth.service';
import {StakeholderStatus} from '../../models/StakeholderStatusEnum';

import {StakeholderHttpService} from '../stakeholder-http.service';
import {StakeholderAffiliateDialogComponent} from '../stakeholder-affiliate-dialog/stakeholder-affiliate-dialog.component';
import {StakeholderOrganizationDetailDialogComponent} from '../stakeholder-organization-detail-dialog/stakeholder-organization-detail-dialog.component';

@Component({
  selector: 'app-stakeholder-organization-list',
  templateUrl: './stakeholder-organization-list.component.html',
  styleUrls: ['./stakeholder-organization-list.component.css']
})
export class StakeholderOrganizationListComponent implements OnInit {

  // todo only approved stakeholder can affiliate
  public displayedColumns: string[];

  public dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  constructor(private stakeholderHttp: StakeholderHttpService, private auth: AuthService, public dialog: MatDialog) {
    if (auth.stakeholderStatus === StakeholderStatus.Approved) {
      this.displayedColumns = ['name', 'province', 'city', 'typename', 'affiliate'];
    } else {
      this.displayedColumns = ['name', 'province', 'city', 'typename'];
    }
  }

  public ngOnInit() {
    this.stakeholderHttp.getOrganizations().subscribe(organizations => {
      this.dataSource = new MatTableDataSource(organizations);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public openDetailDialog(organization) {
    this.dialog.open(StakeholderOrganizationDetailDialogComponent, {
      data: {
        organization: organization
      }
    });
  }

  public affiliate(organization) {
    this.dialog.open(StakeholderAffiliateDialogComponent, {
      data: {
        organization: organization
      }
    });
  }
}
