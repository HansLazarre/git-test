import {inject, TestBed} from '@angular/core/testing';

import {StakeholderContactResolverService} from './stakeholder-contact-resolver.service';

describe('StakeholderContactResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StakeholderContactResolverService]
    });
  });

  it('should be created', inject([StakeholderContactResolverService], (service: StakeholderContactResolverService) => {
    expect(service).toBeTruthy();
  }));
});
