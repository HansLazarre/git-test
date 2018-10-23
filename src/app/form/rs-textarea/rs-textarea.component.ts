import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rs-textarea',
  templateUrl: './rs-textarea.component.html',
  styleUrls: ['./rs-textarea.component.css']
})
export class RsTextareaComponent implements OnInit {

  @Input() public rsRequired = false;
  @Input() public rsLabel = '';
  @Input() public rsHint = '';
  @Input() public rsFormControl;

  constructor() {
  }

  public ngOnInit() {
  }
}
