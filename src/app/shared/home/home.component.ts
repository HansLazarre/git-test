import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imageUrlArray = ['assets/slides/slide-1.png', 'assets/slides/slide-2.png', 'assets/slides/slide-3.png', 'assets/slides/slide-4.png'];

  constructor() {
  }

  public ngOnInit() {
  }
}
