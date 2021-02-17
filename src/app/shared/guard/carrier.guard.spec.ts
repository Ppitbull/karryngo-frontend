import { TestBed } from '@angular/core/testing';

import { CarrierGuard } from './carrier.guard';

describe('CarrierGuard', () => {
  let guard: CarrierGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CarrierGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
