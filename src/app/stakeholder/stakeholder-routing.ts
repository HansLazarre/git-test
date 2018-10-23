import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from '../guards/auth-guard.service';
import {StakeholderStatus} from '../models/StakeholderStatusEnum';

import {StakeholderInformationComponent} from './stakeholder-information/stakeholder-information.component';
import {StakeholderOrganizationListComponent} from './stakeholder-organization-list/stakeholder-organization-list.component';
import {StakeholderOwnerOrganizationListComponent} from './stakeholder-owner-organization-list/stakeholder-owner-organization-list.component';
import {StakeholderContactComponent} from './stakeholder-contact/stakeholder-contact.component';

import {StakeholderRegistrationStepperComponent} from './stakeholder-registration/stakeholder-registration-stepper/stakeholder-registration-stepper.component';
import {StakeholderRegistrationConclusionComponent} from './stakeholder-registration/stakeholder-registration-conclusion/stakeholder-registration-conclusion.component';
import {StakeholderRegistrationDebugComponent} from './stakeholder-registration/stakeholder-registration-debug/stakeholder-registration-debug.component';
import {StakeholderOrganizationRegistrationComponent} from './stakeholder-organization-registration/stakeholder-organization-registration.component';
import {StakeholderOrganizationRegistrationConclusionComponent} from './stakeholder-organization-registration-conclusion/stakeholder-organization-registration-conclusion.component';
import {StakeholderOrganizationUpdateComponent} from './stakeholder-organization-update/stakeholder-organization-update.component';
import {StakeholderAffiliationListComponent} from './stakeholder-affiliation-list/stakeholder-affiliation-list.component';
import {StakeholderContactResolverService} from './stakeholder-contact-resolver.service';
import {StakeholderContactConclusionComponent} from './stakeholder-contact-conclusion/stakeholder-contact-conclusion.component';
import {StakeholderOrganizationResolverService} from './stakeholder-organization-resolver.service';

const stakeholderRouting: Routes = [
  {
    path: 'stakeholder-information',
    component: StakeholderInformationComponent,
  },
  {
    path: 'organizations',
    component: StakeholderOrganizationListComponent,
  },
  {
    path: 'stakeholder-registration/form',
    component: StakeholderRegistrationStepperComponent,
    canActivate: [AuthGuard],
    data: {stakeholderStatus: StakeholderStatus.NotRegistered}
  },
  {
    path: 'stakeholder-registration/done',
    component: StakeholderRegistrationConclusionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'stakeholder-registration/debug',
    component: StakeholderRegistrationDebugComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'stakeholder-contact/form',
    component: StakeholderContactComponent,
    canActivate: [AuthGuard],
    resolve: {
      Contact: StakeholderContactResolverService
    }
  },
  {
    path: 'stakeholder-contact/done',
    component: StakeholderContactConclusionComponent,
  },
  {
    path: 'organization-registration/form',
    component: StakeholderOrganizationRegistrationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'organization-registration/done',
    component: StakeholderOrganizationRegistrationConclusionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'organization-update/:id',
    component: StakeholderOrganizationUpdateComponent,
    canActivate: [AuthGuard],
    resolve: {
      data: StakeholderOrganizationResolverService
    }
  },
  {
    path: 'owner-organizations',
    component: StakeholderOwnerOrganizationListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'affiliations',
    component: StakeholderAffiliationListComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(stakeholderRouting)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class StakeholderRoutingModule {
}
