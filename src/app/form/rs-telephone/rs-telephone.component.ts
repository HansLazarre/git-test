import {Component, Input, OnInit} from '@angular/core';
import FormControlUtil from '../../utils/form-control-util';

@Component({
  selector: 'rs-telephone',
  templateUrl: './rs-telephone.component.html',
  styleUrls: ['./rs-telephone.component.css']
})
export class RsTelephoneComponent implements OnInit {

  @Input() public rsRequired = false;
  @Input() public rsLabel = '';
  @Input() public rsFormControl;

  public formUtil = FormControlUtil;

  constructor() {
  }

  public ngOnInit() {
  }
}
