import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateQuotePricingComponent } from './calculate-quote-pricing.component';

describe('CalculateQuotePricingComponent', () => {
  let component: CalculateQuotePricingComponent;
  let fixture: ComponentFixture<CalculateQuotePricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculateQuotePricingComponent],
    });
    fixture = TestBed.createComponent(CalculateQuotePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
