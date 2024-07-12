import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDevelopmentComponent } from './product-development.component';

describe('ProductDevelopmentComponent', () => {
  let component: ProductDevelopmentComponent;
  let fixture: ComponentFixture<ProductDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDevelopmentComponent]
    });
    fixture = TestBed.createComponent(ProductDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
