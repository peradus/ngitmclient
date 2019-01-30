import { TestBed } from '@angular/core/testing';

import { ItmclientService } from './itmclient.service';

describe('ItmclientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItmclientService = TestBed.get(ItmclientService);
    expect(service).toBeTruthy();
  });
});
