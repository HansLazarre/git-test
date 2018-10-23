import {inject, TestBed} from '@angular/core/testing';

import {VolunteerRegistrationDataService} from './volunteer-registration-data.service';

describe('VolunteerRegistrationDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VolunteerRegistrationDataService]
    });
  });

  it('should be created', inject([VolunteerRegistrationDataService], (service: VolunteerRegistrationDataService) => {
    expect(service).toBeTruthy();
  }));
});
