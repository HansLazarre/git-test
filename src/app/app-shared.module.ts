import {NgModule} from '@angular/core';

import {FeaturesComponent} from './shared/features/features.component';
import {FlexLayoutModule} from '@angular/flex-layout';

const SHARED = [
  FeaturesComponent,
];

@NgModule({
  imports: [
    FlexLayoutModule
  ],
  declarations: SHARED,
  exports: SHARED
})
export class AppSharedModule {
}
