import { TestBed } from '@angular/core/testing';

import { SearchcomponentService } from './searchcomponent.service';

describe('SearchcomponentService', () => {
  let service: SearchcomponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchcomponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
