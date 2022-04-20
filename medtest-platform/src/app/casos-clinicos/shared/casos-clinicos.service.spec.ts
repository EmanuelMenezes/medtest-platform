import { TestBed } from '@angular/core/testing';

import { CasosClinicosService } from './casos-clinicos.service';

describe('CasosClinicosService', () => {
  let service: CasosClinicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasosClinicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
