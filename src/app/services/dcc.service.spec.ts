import { TestBed } from '@angular/core/testing';

import { DCCService } from './dcc.service';

describe('DCCService', () => {
  let service: DCCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DCCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
