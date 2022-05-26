import { TestBed } from '@angular/core/testing';

import { AuthChild2Guard } from './auth-child-2.guard';

describe('AuthChild2Guard', () => {
  let guard: AuthChild2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthChild2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
