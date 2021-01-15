import { TestBed } from '@angular/core/testing';

import { InMememoryDataService } from './in-mememory-data.service';

describe('InMememoryDataService', () => {
  let service: InMememoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMememoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
