import {Component, OnInit, ViewChild} from '@angular/core';

import {ScrollerService} from '../../../services/scroller.service';

import {StakeholderRegistrationContactComponent} from '../stakeholder-registration-contact/stakeholder-registration-contact.component';
import {StakeholderRegistrationServicesOfferedComponent} from '../stakeholder-registration-services-offered/stakeholder-registration-services-offered.component';
import {StakeholderRegistrationServiceTypesComponent} from '../stakeholder-registration-service-types/stakeholder-registration-service-types.component';
import {StakeholderRegistrationAgreementComponent} from '../stakeholder-registration-agreement/stakeholder-registration-agreement.component';
import {StakeholderRegistrationAboutComponent} from '../stakeholder-registration-about/stakeholder-registration-about.component';
import {StakeholderRegistrationAcknowledgeComponent} from '../stakeholder-registration-acknowledge/stakeholder-registration-acknowledge.component';

@Component({
  selector: 'app-stakeholder-registration-stepper',
  templateUrl: './stakeholder-registration-stepper.component.html',
  styleUrls: ['./stakeholder-registration-stepper.component.css']
})
export class StakeholderRegistrationStepperComponent implements OnInit {

  @ViewChild(StakeholderRegistrationContactComponent) public stakeholderRegContact;

  @ViewChild(StakeholderRegistrationAgreementComponent) public stakeholderRegAgreement;

  @ViewChild(StakeholderRegistrationAboutComponent) public stakeholderRegAbout;

  @ViewChild(StakeholderRegistrationServicesOfferedComponent) public stakeholderRegServicesOffered;

  @ViewChild(StakeholderRegistrationServiceTypesComponent) public stakeholderRegServiceTypes;

  @ViewChild(StakeholderRegistrationAcknowledgeComponent) public stakeholderRegAcknowledge;

  constructor(private scroller: ScrollerService) {
  }

  public ngOnInit() {
  }

  public selectionChange() {

    this.scroller.scrollToTop();
  }
}
