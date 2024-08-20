import { TestBed } from '@angular/core/testing';

import { ListFormulasService } from './list-formulas.service';

describe('ListFormulasService', () => {
  let service: ListFormulasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListFormulasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
