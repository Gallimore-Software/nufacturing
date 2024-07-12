import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSuppliedInventoryComponent } from './customer-supplied-inventory.component';

describe('CustomerSuppliedInventoryComponent', () => {
  let component: CustomerSuppliedInventoryComponent;
  let fixture: ComponentFixture<CustomerSuppliedInventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerSuppliedInventoryComponent]
    });
    fixture = TestBed.createComponent(CustomerSuppliedInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
