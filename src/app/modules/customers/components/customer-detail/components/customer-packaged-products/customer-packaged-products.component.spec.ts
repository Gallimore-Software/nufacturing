import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPackagedProductsComponent } from './customer-packaged-products.component';

describe('CustomerPackagedProductsComponent', () => {
  let component: CustomerPackagedProductsComponent;
  let fixture: ComponentFixture<CustomerPackagedProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerPackagedProductsComponent]
    });
    fixture = TestBed.createComponent(CustomerPackagedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
