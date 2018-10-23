import {Component, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private meta: Meta) {

    this.meta.addTag({name: 'description', content: 'Correctional Service of Canada Families of Offenders'});
    this.meta.addTag({
      name: 'keywords',
      content: 'corrections, prison, parole, sentencing, offenders, inmates, criminals, prisoners, prisons, penitentiaries, crime, justice, law, offender rehabilitation, security, corcan, inmates, incarceration'
    });
  }

  public ngOnInit(): void {
  }
}
