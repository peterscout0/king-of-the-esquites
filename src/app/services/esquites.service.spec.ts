import { TestBed } from '@angular/core/testing';

import { EsquitesService } from './esquites.service';

describe('EsquitesService', () => {
  let service: EsquitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsquitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
