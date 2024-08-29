import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientBreakdownWithMoqComponent } from './ingredient-breakdown-with-moq.component';

describe('IngredientBreakdownWithMoqComponent', () => {
  let component: IngredientBreakdownWithMoqComponent;
  let fixture: ComponentFixture<IngredientBreakdownWithMoqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientBreakdownWithMoqComponent],
    });
    fixture = TestBed.createComponent(IngredientBreakdownWithMoqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
