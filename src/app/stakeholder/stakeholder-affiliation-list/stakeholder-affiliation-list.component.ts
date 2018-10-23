import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatSort, MatTableDataSource} from '@angular/material';
import {StakeholderHttpService} from '../stakeholder-http.service';
import {StakeholderAffiliateUpdateDialogComponent} from '../stakeholder-affiliate-update-dialog/stakeholder-affiliate-update-dialog.component';

@Component({
  selector: 'app-stakeholder-affiliation-list',
  templateUrl: './stakeholder-affiliation-list.component.html',
  styleUrls: ['./stakeholder-affiliation-list.component.css']
})
export class StakeholderAffiliationListComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'role', 'email', 'telephone'];

  public dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) public sort: MatSort;

  constructor(private stakeholderHttp: StakeholderHttpService, public dialog: MatDialog) {
  }

  public ngOnInit() {
    this.getAffiliations();
  }

  public updateAffiliation(affiliation) {
    let dialogRef = this.dialog.open(StakeholderAffiliateUpdateDialogComponent, {
      data: {
        affiliation: affiliation
      }
    });

    // todo could update the model directly but this works for now
    dialogRef.afterClosed().subscribe(() => {
      this.getAffiliations();
    });
  }

  private getAffiliations() {
    this.stakeholderHttp.getOwnerAffiliations().subscribe(affiliations => {
      this.dataSource = new MatTableDataSource(affiliations);
      this.dataSource.sort = this.sort;
    });
  }
}
