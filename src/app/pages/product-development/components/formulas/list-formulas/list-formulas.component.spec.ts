import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormulasComponent } from './list-formulas.component';

describe('ListFormulasComponent', () => {
  let component: ListFormulasComponent;
  let fixture: ComponentFixture<ListFormulasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFormulasComponent],
    });
    fixture = TestBed.createComponent(ListFormulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
