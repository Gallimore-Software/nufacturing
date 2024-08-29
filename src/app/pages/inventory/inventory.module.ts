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
import { InventoryService } from './inventory.service';
import { NewInventoryDialogComponent } from './components/new-inventory-dialog/new-inventory-dialog.component';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    InventoryComponent,
    InventoryItemsTableComponent,
    InventoryItemDetailComponent,
    NewInventoryDialogComponent,
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
    MatCardModule,
    MatOptionModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatIconModule,
  ],
  providers: [InventoryService],
})
export class InventoryModule {}
