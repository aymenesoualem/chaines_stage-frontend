import { TestBed } from '@angular/core/testing';

import { ChaineServiceService } from './chaine.service.service';

describe('ChaineServiceService', () => {
  let service: ChaineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
