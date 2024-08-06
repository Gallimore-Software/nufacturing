import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientCalculationComponent } from './ingredient-calculation.component';

describe('IngredientCalculationComponent', () => {
  let component: IngredientCalculationComponent;
  let fixture: ComponentFixture<IngredientCalculationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientCalculationComponent],
    });
    fixture = TestBed.createComponent(IngredientCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
