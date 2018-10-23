import {inject, TestBed} from '@angular/core/testing';

import {VolunteerContactResolverService} from './volunteer-contact-resolver.service';

describe('VolunteerContactResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VolunteerContactResolverService]
    });
  });

  it('should be created', inject([VolunteerContactResolverService], (service: VolunteerContactResolverService) => {
    expect(service).toBeTruthy();
  }));
});
