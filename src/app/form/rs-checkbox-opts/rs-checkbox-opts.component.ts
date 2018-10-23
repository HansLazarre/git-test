import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'rs-checkbox-opts',
  templateUrl: './rs-checkbox-opts.component.html',
  styleUrls: ['./rs-checkbox-opts.component.css']
})
export class RsCheckboxOptsComponent implements OnInit {

  @Output() onChange = new EventEmitter();

  @Input() public rsValue;
  @Input() public rsTrueValue: any = 1;
  @Input() public rsFalseValue: any = 0;

  @Input() public rsRequired = false;
  @Input() public rsLabel = '';
  @Input() public rsFormControl;


  public checked = false;

  constructor() {
  }

  public ngOnInit() {

    if (this.rsFormControl.value === 1) {
      this.checked = true;
    }
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

  customOnChange($event) {
    if ($event.checked === true) {
      this.rsFormControl.setValue(this.rsTrueValue);
    } else {
      this.rsFormControl.setValue(this.rsFalseValue);
    }
  }
}
