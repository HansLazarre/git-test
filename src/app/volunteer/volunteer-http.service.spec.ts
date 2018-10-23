import {inject, TestBed} from '@angular/core/testing';

import {VolunteerHttpService} from './volunteer-http.service';

describe('VolunteerHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VolunteerHttpService]
    });
  });

  it('should be created', inject([VolunteerHttpService], (service: VolunteerHttpService) => {
    expect(service).toBeTruthy();
  }));
});
