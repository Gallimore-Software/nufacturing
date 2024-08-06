import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { InventoryItemDetailComponent } from './components/inventory-item-detail/inventory-item-detail.component';
import { InventoryItemsTableComponent } from './components/inventory-items-table/inventory-items-table.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    InventoryComponent,
    InventoryItemsTableComponent,
    InventoryItemDetailComponent,
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class InventoryModule {}
