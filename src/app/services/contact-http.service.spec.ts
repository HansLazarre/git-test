import {inject, TestBed} from '@angular/core/testing';

import {ContactHttpService} from './contact-http.service';

describe('ContactHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactHttpService]
    });
  });

  it('should be created', inject([ContactHttpService], (service: ContactHttpService) => {
    expect(service).toBeTruthy();
  }));
});
