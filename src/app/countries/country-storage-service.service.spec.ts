import { TestBed } from '@angular/core/testing';

import { CountryStorageServiceService } from './country-storage-service.service';

describe('CountryStorageServiceService', () => {
  let service: CountryStorageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryStorageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
