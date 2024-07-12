import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypesComponent } from './product-types.component';

describe('ProductTypesComponent', () => {
  let component: ProductTypesComponent;
  let fixture: ComponentFixture<ProductTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTypesComponent]
    });
    fixture = TestBed.createComponent(ProductTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
