import { TestBed } from '@angular/core/testing';

import { TeslistService } from './teslist.service';

describe('TeslistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeslistService = TestBed.get(TeslistService);
    expect(service).toBeTruthy();
  });
});
