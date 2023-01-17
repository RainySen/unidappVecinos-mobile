import { TestBed } from '@angular/core/testing';

import { ServicesAuthorizationService } from './services-authorization.service';

describe('ServicesAuthorizationService', () => {
  let service: ServicesAuthorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesAuthorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
