import { TestBed } from '@angular/core/testing';

import { ObjetosPerdidos } from './objetos-perdidos';

describe('ObjetosPerdidos', () => {
  let service: ObjetosPerdidos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjetosPerdidos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
