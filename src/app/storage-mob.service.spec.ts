import { TestBed } from '@angular/core/testing';

import { StorageMobService } from './storage-mob.service';

describe('StorageMobService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageMobService = TestBed.get(StorageMobService);
    expect(service).toBeTruthy();
  });
});
