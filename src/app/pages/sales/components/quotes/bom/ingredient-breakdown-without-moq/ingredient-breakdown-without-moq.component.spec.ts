import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientBreakdownWithoutMoqComponent } from './ingredient-breakdown-without-moq.component';

describe('IngredientBreakdownWithoutMoqComponent', () => {
  let component: IngredientBreakdownWithoutMoqComponent;
  let fixture: ComponentFixture<IngredientBreakdownWithoutMoqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientBreakdownWithoutMoqComponent],
    });
    fixture = TestBed.createComponent(IngredientBreakdownWithoutMoqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
