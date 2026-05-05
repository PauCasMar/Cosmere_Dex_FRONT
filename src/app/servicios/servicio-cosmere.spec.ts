import { TestBed } from '@angular/core/testing';

import { ServicioCosmere } from './servicio-cosmere';

describe('ServicioCosmere', () => {
  let service: ServicioCosmere;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCosmere);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
