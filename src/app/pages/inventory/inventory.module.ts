import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { InventoryItemDetailComponent } from './components/inventory-item-detail/inventory-item-detail.component';
import { InventoryItemsTableComponent } from './components/inventory-items-table/inventory-items-table.component';
import { InventoryRoutingModule } from './inventory-routing.module';




@NgModule({
  declarations: [
    InventoryComponent,
    InventoryItemsTableComponent,
    InventoryItemDetailComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
