import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockKeepingUnitsComponent } from './stock-keeping-units.component';

describe('StockKeepingUnitsComponent', () => {
  let component: StockKeepingUnitsComponent;
  let fixture: ComponentFixture<StockKeepingUnitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockKeepingUnitsComponent]
    });
    fixture = TestBed.createComponent(StockKeepingUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
