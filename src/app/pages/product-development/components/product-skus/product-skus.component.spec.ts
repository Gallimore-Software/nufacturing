import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSkusComponent } from './product-skus.component';

describe('ProductSkusComponent', () => {
  let component: ProductSkusComponent;
  let fixture: ComponentFixture<ProductSkusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSkusComponent],
    });
    fixture = TestBed.createComponent(ProductSkusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
