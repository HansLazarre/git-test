import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';

import {AppMaterialModule} from '../app-material.module';
import {AppSharedModule} from '../app-shared.module';
import {RsFormModule} from '../form/rs-form.module';

import {StakeholderRoutingModule} from './stakeholder-routing';
import {StakeholderHttpService} from './stakeholder-http.service';
import {StakeholderRegistrationDataService} from './stakeholder-registration-data.service';

import {StakeholderInformationComponent} from './stakeholder-information/stakeholder-information.component';
import {StakeholderOrganizationListComponent} from './stakeholder-organization-list/stakeholder-organization-list.component';
import {StakeholderOrganizationDetailDialogComponent} from './stakeholder-organization-detail-dialog/stakeholder-organization-detail-dialog.component';
import {StakeholderRegistrationStepperComponent} from './stakeholder-registration/stakeholder-registration-stepper/stakeholder-registration-stepper.component';
import {StakeholderRegistrationConclusionComponent} from './stakeholder-registration/stakeholder-registration-conclusion/stakeholder-registration-conclusion.component';
import {StakeholderRegistrationDebugComponent} from './stakeholder-registration/stakeholder-registration-debug/stakeholder-registration-debug.component';
import {StakeholderRegistrationAgreementComponent} from './stakeholder-registration/stakeholder-registration-agreement/stakeholder-registration-agreement.component';
import {StakeholderRegistrationContactComponent} from './stakeholder-registration/stakeholder-registration-contact/stakeholder-registration-contact.component';
import {StakeholderRegistrationServiceTypesComponent} from './stakeholder-registration/stakeholder-registration-service-types/stakeholder-registration-service-types.component';
import {StakeholderRegistrationServicesOfferedComponent} from './stakeholder-registration/stakeholder-registration-services-offered/stakeholder-registration-services-offered.component';
import {StakeholderRegistrationAboutComponent} from './stakeholder-registration/stakeholder-registration-about/stakeholder-registration-about.component';
import {StakeholderRegistrationAcknowledgeComponent} from './stakeholder-registration/stakeholder-registration-acknowledge/stakeholder-registration-acknowledge.component';
import {StakeholderContactComponent} from './stakeholder-contact/stakeholder-contact.component';
import {StakeholderOrganizationRegistrationComponent} from './stakeholder-organization-registration/stakeholder-organization-registration.component';
import {StakeholderOwnerOrganizationListComponent} from './stakeholder-owner-organization-list/stakeholder-owner-organization-list.component';
import {StakeholderOrganizationUpdateComponent} from './stakeholder-organization-update/stakeholder-organization-update.component';
import {StakeholderOrganizationRegistrationConclusionComponent} from './stakeholder-organization-registration-conclusion/stakeholder-organization-registration-conclusion.component';
import {StakeholderAffiliationListComponent} from './stakeholder-affiliation-list/stakeholder-affiliation-list.component';
import {StakeholderAffiliateDialogComponent} from './stakeholder-affiliate-dialog/stakeholder-affiliate-dialog.component';
import {StakeholderAffiliateSuccessDialogComponent} from './stakeholder-affiliate-success-dialog/stakeholder-affiliate-success-dialog.component';
import {StakeholderAffiliateFailureDialogComponent} from './stakeholder-affiliate-failure-dialog/stakeholder-affiliate-failure-dialog.component';
import {StakeholderAffiliateUpdateDialogComponent} from './stakeholder-affiliate-update-dialog/stakeholder-affiliate-update-dialog.component';
import {StakeholderContactConclusionComponent} from './stakeholder-contact-conclusion/stakeholder-contact-conclusion.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    AppMaterialModule,
    AppSharedModule,
    RsFormModule,

    StakeholderRoutingModule
  ],
  declarations: [

    StakeholderInformationComponent,

    StakeholderOrganizationListComponent,
    StakeholderOrganizationDetailDialogComponent,

    StakeholderRegistrationStepperComponent,
    StakeholderRegistrationConclusionComponent,
    StakeholderRegistrationDebugComponent,

    StakeholderRegistrationAgreementComponent,
    StakeholderRegistrationContactComponent,
    StakeholderRegistrationServiceTypesComponent,
    StakeholderRegistrationServicesOfferedComponent,
    StakeholderRegistrationAboutComponent,
    StakeholderRegistrationAcknowledgeComponent,
    StakeholderContactComponent,
    StakeholderOrganizationRegistrationComponent,
    StakeholderOwnerOrganizationListComponent,
    StakeholderOrganizationUpdateComponent,
    StakeholderOrganizationRegistrationConclusionComponent,
    StakeholderAffiliationListComponent,
    StakeholderAffiliateDialogComponent,
    StakeholderAffiliateSuccessDialogComponent,
    StakeholderAffiliateFailureDialogComponent,
    StakeholderAffiliateUpdateDialogComponent,
    StakeholderContactConclusionComponent
  ],
  providers: [
    StakeholderHttpService,
    StakeholderRegistrationDataService,
  ],
  entryComponents: [
    StakeholderOrganizationDetailDialogComponent,
    StakeholderAffiliateDialogComponent,
    StakeholderAffiliateSuccessDialogComponent,
    StakeholderAffiliateFailureDialogComponent,
    StakeholderAffiliateUpdateDialogComponent
  ]
})
export class StakeholderModule {
}
