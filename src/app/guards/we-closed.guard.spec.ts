import { TestBed, async, inject } from '@angular/core/testing';

import { WeClosedGuard } from './we-closed.guard';

describe('WeClosedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeClosedGuard]
    });
  });

  it('should ...', inject([WeClosedGuard], (guard: WeClosedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
