import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryItemsTableComponent } from './inventory-items-table.component';

describe('InventoryItemsTableComponent', () => {
  let component: InventoryItemsTableComponent;
  let fixture: ComponentFixture<InventoryItemsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryItemsTableComponent],
    });
    fixture = TestBed.createComponent(InventoryItemsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
