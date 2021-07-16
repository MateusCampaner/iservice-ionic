import { TestBed } from '@angular/core/testing';

import { RegistraService } from './registra.service';

describe('RegistraService', () => {
  let service: RegistraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
