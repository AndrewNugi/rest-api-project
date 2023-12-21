import { TestBed } from '@angular/core/testing';

import { CountryStorageService } from './country-storage.service';

describe('CountryStorageServiceService', () => {
  let service: CountryStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
