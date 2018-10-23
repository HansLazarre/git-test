import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatSort, MatTableDataSource} from '@angular/material';
import {VolunteerHttpService} from '../volunteer-http.service';

@Component({
  selector: 'app-volunteer-assistant-list',
  templateUrl: './volunteer-assistant-list.component.html',
  styleUrls: ['./volunteer-assistant-list.component.css']
})
export class VolunteerAssistantListComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'email', 'telephone', 'city', 'availability'];

  public dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) public sort: MatSort;

  constructor(private volunteerHttp: VolunteerHttpService, public dialog: MatDialog) {
  }

  public ngOnInit() {
    this.getVolunteerAssistants();
  }

  private getVolunteerAssistants() {
    this.volunteerHttp.getVolunteerAssistants().subscribe(volunteers => {
      this.dataSource = new MatTableDataSource(volunteers);
      this.dataSource.sort = this.sort;
    });
  }
}
