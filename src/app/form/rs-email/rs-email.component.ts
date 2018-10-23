import {Component, Input, OnInit} from '@angular/core';
import FormControlUtil from '../../utils/form-control-util';

@Component({
  selector: 'rs-email',
  templateUrl: './rs-email.component.html',
  styleUrls: ['./rs-email.component.css']
})
export class RsEmailComponent implements OnInit {

  @Input() public rsRequired = false;
  @Input() public rsLabel = '';
  @Input() public rsFormControl;

  public formUtil = FormControlUtil;

  constructor() {
  }

  public ngOnInit() {
  }
}
