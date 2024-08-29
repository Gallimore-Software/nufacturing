import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryItemDetailComponent } from './inventory-item-detail.component';

describe('InventoryItemDetailComponent', () => {
  let component: InventoryItemDetailComponent;
  let fixture: ComponentFixture<InventoryItemDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryItemDetailComponent],
    });
    fixture = TestBed.createComponent(InventoryItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
