import { TestBed } from '@angular/core/testing';

import { MedicamentServiceService } from './medicament-service.service';

describe('MedicamentServiceService', () => {
  let service: MedicamentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicamentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
