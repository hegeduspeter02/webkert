import { TestBed } from '@angular/core/testing';

import { EladasCsereService } from './eladas-csere.service';

describe('EladasCsereService', () => {
  let service: EladasCsereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EladasCsereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
