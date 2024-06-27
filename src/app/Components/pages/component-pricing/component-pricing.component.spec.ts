import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPricingComponent } from './component-pricing.component';

describe('ComponentPricingComponent', () => {
  let component: ComponentPricingComponent;
  let fixture: ComponentFixture<ComponentPricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentPricingComponent]
    });
    fixture = TestBed.createComponent(ComponentPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
