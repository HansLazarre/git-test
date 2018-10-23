import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';

import {AppMaterialModule} from '../app-material.module';
import {AppSharedModule} from '../app-shared.module';
import {RsFormModule} from '../form/rs-form.module';

import {VolunteerRoutingModule} from './volunteer-routing';

import {VolunteerInformationComponent} from './volunteer-information/volunteer-information.component';
import {VolunteerCalendarComponent} from './volunteer-calendar/volunteer-calendar.component';

import {VolunteerRegistrationStepperComponent} from './volunteer-registration/volunteer-registration-stepper/volunteer-registration-stepper.component';
import {VolunteerRegistrationConclusionComponent} from './volunteer-registration/volunteer-registration-conclusion/volunteer-registration-conclusion.component';
import {VolunteerRegistrationContactComponent} from './volunteer-registration/volunteer-registration-contact/volunteer-registration-contact.component';
import {VolunteerRegistrationDebugComponent} from './volunteer-registration/volunteer-registration-debug/volunteer-registration-debug.component';
import {VolunteerRegistrationEmergencyContactComponent} from './volunteer-registration/volunteer-registration-emergency-contact/volunteer-registration-emergency-contact.component';
import {VolunteerRegistrationAgreementComponent} from './volunteer-registration/volunteer-registration-agreement/volunteer-registration-agreement.component';
import {VolunteerRegistrationExperienceComponent} from './volunteer-registration/volunteer-registration-experience/volunteer-registration-experience.component';
import {VolunteerRegistrationActivitiesComponent} from './volunteer-registration/volunteer-registration-activities/volunteer-registration-activities.component';
import {VolunteerRegistrationReferenceComponent} from './volunteer-registration/volunteer-registration-reference/volunteer-registration-reference.component';
import {VolunteerRegistrationSecurityComponent} from './volunteer-registration/volunteer-registration-security/volunteer-registration-security.component';
import {VolunteerContactComponent} from './volunteer-contact/volunteer-contact.component';
import {VolunteerContactConclusionComponent} from './volunteer-contact-conclusion/volunteer-contact-conclusion.component';
import {VolunteerAssistantListComponent} from './volunteer-assistant-list/volunteer-assistant-list.component';
import {VolunteerCalendarShiftDialogComponent} from './volunteer-calendar-shift-dialog/volunteer-calendar-shift-dialog.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgxMaterialTimepickerModule.forRoot(),

    AppMaterialModule,
    AppSharedModule,
    RsFormModule,

    VolunteerRoutingModule,
  ],
  declarations: [
    VolunteerInformationComponent,
    VolunteerCalendarComponent,
    VolunteerCalendarShiftDialogComponent,
    VolunteerRegistrationStepperComponent,
    VolunteerRegistrationConclusionComponent,
    VolunteerRegistrationDebugComponent,

    VolunteerRegistrationContactComponent,
    VolunteerRegistrationEmergencyContactComponent,
    VolunteerRegistrationAgreementComponent,
    VolunteerRegistrationExperienceComponent,
    VolunteerRegistrationActivitiesComponent,
    VolunteerRegistrationReferenceComponent,
    VolunteerRegistrationSecurityComponent,
    VolunteerContactComponent,
    VolunteerContactConclusionComponent,
    VolunteerAssistantListComponent,
  ],
  entryComponents: [
    VolunteerCalendarShiftDialogComponent,
  ]
})
export class VolunteerModule {
}
