import { TestBed } from '@angular/core/testing';

import { AuthChild1Guard } from './auth-child-1.guard';

describe('AuthChild1Guard', () => {
  let guard: AuthChild1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthChild1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
