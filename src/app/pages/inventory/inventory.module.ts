import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryItemDetailComponent } from './components/inventory-item-detail/inventory-item-detail.component';
import { InventoryItemsTableComponent } from './components/components/inventory-items-table/inventory-items-table.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryService } from './inventory.service';
import { NewInventoryDialogComponent } from './components/new-inventory-dialog/new-inventory-dialog.component';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InventoryDashboardComponent } from './components/inventory-dashboard/inventory-dashboard.component';
import { FinishedGoodsComponent } from './components/finished-goods/finished-goods.component';
import { WipComponent } from './components/wip/wip.component';
import { RawMaterialsComponent } from './components/raw-materials/raw-materials.component';
import { ComponentsComponent } from './components/components/components.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    InventoryItemsTableComponent,
    InventoryItemDetailComponent,
    NewInventoryDialogComponent,
    InventoryDashboardComponent,
    FinishedGoodsComponent,
    WipComponent,
    RawMaterialsComponent,
    ComponentsComponent,
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
