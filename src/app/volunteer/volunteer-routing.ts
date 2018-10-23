import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from '../guards/auth-guard.service';
import {VolunteerStatus} from '../models/VolunteerStatusEnum';
import {VolunteerContactResolverService} from './volunteer-contact-resolver.service';

import {VolunteerInformationComponent} from './volunteer-information/volunteer-information.component';
import {VolunteerCalendarComponent} from './volunteer-calendar/volunteer-calendar.component';
import {VolunteerRegistrationStepperComponent} from './volunteer-registration/volunteer-registration-stepper/volunteer-registration-stepper.component';
import {VolunteerRegistrationConclusionComponent} from './volunteer-registration/volunteer-registration-conclusion/volunteer-registration-conclusion.component';
import {VolunteerRegistrationDebugComponent} from './volunteer-registration/volunteer-registration-debug/volunteer-registration-debug.component';
import {VolunteerContactComponent} from './volunteer-contact/volunteer-contact.component';
import {VolunteerContactConclusionComponent} from './volunteer-contact-conclusion/volunteer-contact-conclusion.component';
import {VolunteerAssistantListComponent} from './volunteer-assistant-list/volunteer-assistant-list.component';
import {VolunteerAssistantResolverService} from './volunteer-assistant-resolver.service';

const volunteerRouting: Routes = [
  {
    path: 'volunteer-information',
    component: VolunteerInformationComponent
  },
  {
    path: 'volunteer-calendar',
    component: VolunteerCalendarComponent,
    canActivate: [AuthGuard],
    data: {volunteerStatus: VolunteerStatus.Approved}
  },
  {
    path: 'volunteer-application/form',
    component: VolunteerRegistrationStepperComponent,
    canActivate: [AuthGuard],
    data: {volunteerStatus: VolunteerStatus.NotRegistered}
  },
  {
    path: 'volunteer-application/done',
    component: VolunteerRegistrationConclusionComponent,
    canActivate: [AuthGuard],
    data: {isOrganizationOwner: true}
  },
  {
    path: 'volunteer-application/debug',
    component: VolunteerRegistrationDebugComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'volunteer-contact/form',
    component: VolunteerContactComponent,
    canActivate: [AuthGuard],
    data: {volunteerStatus: VolunteerStatus.Approved},
    resolve: {
      Contact: VolunteerContactResolverService
    }
  },
  {
    path: 'volunteer-contact/done',
    component: VolunteerContactConclusionComponent,
  },
  {
    path: 'volunteer-assistants',
    component: VolunteerAssistantListComponent,
    canActivate: [AuthGuard],
    data: {isCoordinator: true},
  },
  {
    path: 'volunteer-update/:id',
    component: VolunteerContactComponent,
    canActivate: [AuthGuard],
    data: {volunteerStatus: VolunteerStatus.Approved},
    resolve: {
      Contact: VolunteerAssistantResolverService
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(volunteerRouting)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class VolunteerRoutingModule {
}
