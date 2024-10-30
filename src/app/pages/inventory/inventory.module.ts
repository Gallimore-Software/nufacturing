import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryItemDetailComponent } from './components/inventory-item-detail/inventory-item-detail.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryService } from './inventory.service';
import { NewInventoryDialogComponent } from './components/components/new-inventory-dialog/new-inventory-dialog.component';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InventoryDashboardComponent } from './components/inventory-dashboard/inventory-dashboard.component';
import { FinishedGoodsComponent } from './components/finished-goods/finished-goods.component';
import { WorksInProgressComponent } from './components/works-in-progress/works-in-progress.component';
import { RawMaterialsComponent } from './components/raw-materials/raw-materials.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductComponentsComponent } from 'src/app/pages/inventory/components/product-components/product-components.component';
import { AgGridAngular } from 'ag-grid-angular';
import { ActionsCellRenderer } from 'src/app/pages/inventory/components/components/inventory-items-table/components/cell-renderer/actions-cell-renderer.component';
import { PriceCellRenderer } from 'src/app/pages/inventory/components/components/inventory-items-table/components/cell-renderer/price-cell-renderer.component';
import { ProductCellRenderer } from 'src/app/pages/inventory/components/components/inventory-items-table/components/cell-renderer/product-cell-renderer.component';
import { StatusCellRenderer } from 'src/app/pages/inventory/components/components/inventory-items-table/components/cell-renderer/status-cell-renderer.component';
import { StockCellRenderer } from 'src/app/pages/inventory/components/components/inventory-items-table/components/cell-renderer/stock-cell-renderer.component';
import { InventoryItemsTableComponent } from 'src/app/pages/inventory/components/components/inventory-items-table/inventory-items-table.component';

@NgModule({
  declarations: [
    InventoryItemDetailComponent,
    NewInventoryDialogComponent,
    InventoryDashboardComponent,
    FinishedGoodsComponent,
    WorksInProgressComponent,
    RawMaterialsComponent,
    ProductComponentsComponent,
    InventoryItemsTableComponent,
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
    FormsModule,
    AgGridAngular,
    ProductCellRenderer,
    StatusCellRenderer,
    StockCellRenderer,
    PriceCellRenderer,
    ActionsCellRenderer,
  ],
  providers: [InventoryService],
})
export class InventoryModule {}
