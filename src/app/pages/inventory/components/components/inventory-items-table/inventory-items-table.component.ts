import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ColDef,
  ColGroupDef,
  GridApi,
  GridReadyEvent,
} from 'ag-grid-community';
import { NewInventoryDialogComponent } from 'src/app/pages/inventory/components/components/new-inventory-dialog/new-inventory-dialog.component';
import { InventoryItem } from 'src/app/pages/inventory/inventory-item.model';
import { InventoryService } from 'src/app/pages/inventory/inventory.service';

@Component({
  selector: 'app-inventory-items-table',
  templateUrl: './inventory-items-table.component.html',
  styleUrls: ['./inventory-items-table.component.scss'],
})
export class InventoryItemsTableComponent implements OnInit {
  rawMaterialsData: InventoryItem[] = [];
  columnDefs: (ColDef | ColGroupDef)[] = [
    { field: 'itemId', headerName: 'Item ID', sortable: true, filter: true },
    { field: 'name', headerName: 'Name', sortable: true, filter: true },
    { field: 'sku', headerName: 'SKU', sortable: true, filter: true },
    {
      field: 'pricePerUnit',
      headerName: 'Price Per Unit',
      valueFormatter: (params) => `£${params.value.toFixed(2)}`,
      sortable: true,
      filter: true,
    },
    { field: 'status', headerName: 'Status', sortable: true, filter: true },
    {
      field: 'availableQuantity',
      headerName: 'Available Quantity',
      sortable: true,
      filter: true,
    },
  ];

  defaultColDef = {
    resizable: true,
    sortable: true,
    filter: true,
  };

  private gridApi!: GridApi;

  constructor(
    private inventoryService: InventoryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadAllInventoryData();
  }

  private loadAllInventoryData(): void {
    this.inventoryService.getInventory().subscribe((response) => {
      this.rawMaterialsData = response.data; // Assign to raw materials
    });
  }

  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  openCreateInventoryDialog(): void {
    const dialogRef = this.dialog.open(NewInventoryDialogComponent, {
      width: '50%',
      data: { userId: 'yourUserId' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadAllInventoryData();
      }
    });
  }
}
