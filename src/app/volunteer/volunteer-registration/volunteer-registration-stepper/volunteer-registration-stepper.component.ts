import {Component, OnInit, ViewChild} from '@angular/core';
import {ScrollerService} from '../../../services/scroller.service';

import {VolunteerRegistrationContactComponent} from '../volunteer-registration-contact/volunteer-registration-contact.component';
import {VolunteerRegistrationSecurityComponent} from '../volunteer-registration-security/volunteer-registration-security.component';
import {VolunteerRegistrationEmergencyContactComponent} from '../volunteer-registration-emergency-contact/volunteer-registration-emergency-contact.component';
import {VolunteerRegistrationExperienceComponent} from '../volunteer-registration-experience/volunteer-registration-experience.component';
import {VolunteerRegistrationActivitiesComponent} from '../volunteer-registration-activities/volunteer-registration-activities.component';
import {VolunteerRegistrationReferenceComponent} from '../volunteer-registration-reference/volunteer-registration-reference.component';
import {VolunteerRegistrationAgreementComponent} from '../volunteer-registration-agreement/volunteer-registration-agreement.component';

@Component({
  selector: 'app-volunteer-registration-stepper',
  templateUrl: './volunteer-registration-stepper.component.html',
  styleUrls: ['./volunteer-registration-stepper.component.css']
})
export class VolunteerRegistrationStepperComponent implements OnInit {

  @ViewChild(VolunteerRegistrationContactComponent) public volunteerRegContact;

  @ViewChild(VolunteerRegistrationSecurityComponent) public volunteerRegSecurity;

  @ViewChild(VolunteerRegistrationEmergencyContactComponent) public volunteerRegEmergencyContact;

  @ViewChild(VolunteerRegistrationExperienceComponent) public volunteerRegExperience;

  @ViewChild(VolunteerRegistrationActivitiesComponent) public volunteerRegActivities;

  @ViewChild(VolunteerRegistrationReferenceComponent) public volunteerRegReference;

  @ViewChild(VolunteerRegistrationAgreementComponent) public volunteerReAgreement;

  constructor(private scroller: ScrollerService) {
  }

  public ngOnInit() {
  }

  public selectionChange() {

    this.scroller.scrollToTop();
  }
}
