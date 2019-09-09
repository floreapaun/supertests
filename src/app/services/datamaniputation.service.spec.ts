import { TestBed } from '@angular/core/testing';

import { DatamaniputationService } from './datamaniputation.service';

describe('DatamaniputationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatamaniputationService = TestBed.get(DatamaniputationService);
    expect(service).toBeTruthy();
  });
});
