import { TestBed } from '@angular/core/testing';

import { PriceingService } from './priceing.service';

describe('PriceingService', () => {
  let service: PriceingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
