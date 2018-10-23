import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {StakeholderHttpService} from '../stakeholder-http.service';

@Component({
  selector: 'app-stakeholder-owner-organization-list',
  templateUrl: './stakeholder-owner-organization-list.component.html',
  styleUrls: ['./stakeholder-owner-organization-list.component.css']
})
export class StakeholderOwnerOrganizationListComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'address', 'email', 'telephone'];

  public dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) public sort: MatSort;

  constructor(private stakeholderHttp: StakeholderHttpService) {
  }

  public ngOnInit() {
    this.stakeholderHttp.getOwnerOrganizations().subscribe(organizations => {
      this.dataSource = new MatTableDataSource(organizations);
      this.dataSource.sort = this.sort;

    });
  }
}
