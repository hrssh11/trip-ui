import { TestBed } from '@angular/core/testing';

import { VideostateService } from './videostate.service';

describe('VideostateService', () => {
  let service: VideostateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideostateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
