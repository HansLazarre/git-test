import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {AppMaterialModule} from '../app-material.module';

import {RsCheckboxComponent} from './rs-checkbox/rs-checkbox.component';
import {RsCheckboxOptsComponent} from './rs-checkbox-opts/rs-checkbox-opts.component';
import {RsEmailComponent} from './rs-email/rs-email.component';
import {RsTelephoneComponent} from './rs-telephone/rs-telephone.component';
import {RsTextareaComponent} from './rs-textarea/rs-textarea.component';
import {RsYesNoComponent} from './rs-yes-no/rs-yes-no.component';
import {RsYesNoOptsComponent} from './rs-yes-no-opts/rs-yes-no-opts.component';

const RS_FORM = [
  RsCheckboxComponent,
  RsCheckboxOptsComponent,
  RsEmailComponent,
  RsTelephoneComponent,
  RsTextareaComponent,
  RsYesNoComponent,
  RsYesNoOptsComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    AppMaterialModule
  ],
  declarations: RS_FORM,
  exports: RS_FORM
})
export class RsFormModule {
}
