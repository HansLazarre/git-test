import {inject, TestBed} from '@angular/core/testing';

import {VolunteerAssistantResolverService} from './volunteer-assistant-resolver.service';

describe('VolunteerAssistantResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VolunteerAssistantResolverService]
    });
  });

  it('should be created', inject([VolunteerAssistantResolverService], (service: VolunteerAssistantResolverService) => {
    expect(service).toBeTruthy();
  }));
});
