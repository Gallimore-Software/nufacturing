import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionComponent } from './production.component';

describe('ProductionComponent', () => {
  let component: ProductionComponent;
  let fixture: ComponentFixture<ProductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionComponent]
    });
    fixture = TestBed.createComponent(ProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
