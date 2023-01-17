import { TestBed } from '@angular/core/testing';

import { FcmService } from './fcm.service';

describe('FmcService', () => {
  let service: FcmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FcmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
