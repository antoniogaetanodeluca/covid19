import { TestBed } from '@angular/core/testing';

import { AndamentoNazionaleService } from './andamento-nazionale.service';

describe('AndamentoNazionaleService', () => {
  let service: AndamentoNazionaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AndamentoNazionaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
