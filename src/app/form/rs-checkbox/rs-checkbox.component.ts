import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rs-checkbox',
  templateUrl: './rs-checkbox.component.html',
  styleUrls: ['./rs-checkbox.component.css']
})
export class RsCheckboxComponent implements OnInit {

  @Input() public rsValue = true;
  @Input() public rsRequired = false;
  @Input() public rsLabel = '';
  @Input() public rsFormControl;

  constructor() {
  }

  public ngOnInit() {
  }

  public displayFieldCss() {

    const valid = () => {
      return !this.rsFormControl.valid && this.rsFormControl.touched;
    };

    return {
      'rs-error': valid(), // mat-error ?
      'rs-required': this.rsRequired
    };
  }
}
