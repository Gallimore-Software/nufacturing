import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCostsComponent } from './order-costs.component';

describe('OrderCostsComponent', () => {
  let component: OrderCostsComponent;
  let fixture: ComponentFixture<OrderCostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderCostsComponent],
    });
    fixture = TestBed.createComponent(OrderCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
