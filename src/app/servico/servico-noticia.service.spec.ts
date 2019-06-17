import { TestBed } from '@angular/core/testing';

import { ServicoNoticiaService } from './servico-noticia.service';

describe('ServicoNoticiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicoNoticiaService = TestBed.get(ServicoNoticiaService);
    expect(service).toBeTruthy();
  });
});
