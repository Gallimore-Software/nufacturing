import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormulaComponent } from './list-formulas.component';

describe('ListFormulasComponent', () => {
  let component: ListFormulaComponent;
  let fixture: ComponentFixture<ListFormulaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFormulaComponent],
    });
    fixture = TestBed.createComponent(ListFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
