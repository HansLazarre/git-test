import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rs-yes-no-opts',
  templateUrl: './rs-yes-no-opts.component.html',
  styleUrls: ['./rs-yes-no-opts.component.css']
})
export class RsYesNoOptsComponent implements OnInit {

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
