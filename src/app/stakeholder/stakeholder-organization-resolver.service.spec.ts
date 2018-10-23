import {inject, TestBed} from '@angular/core/testing';

import {StakeholderOrganizationResolverService} from './stakeholder-organization-resolver.service';

describe('StakeholderOrganizationResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StakeholderOrganizationResolverService]
    });
  });

  it('should be created', inject([StakeholderOrganizationResolverService], (service: StakeholderOrganizationResolverService) => {
    expect(service).toBeTruthy();
  }));
});
