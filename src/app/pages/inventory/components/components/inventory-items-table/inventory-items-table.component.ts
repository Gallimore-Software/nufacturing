/* eslint-disable no-undef */
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
    {
      field: 'picture',
      headerName: 'Picture',
      cellRenderer: (params: { value: string }) =>
        `<img src="${params.value}" style="height: 50px; width: 50px;" />`,
      sortable: false,
      filter: false,
    },
    {
      field: 'materialId',
      headerName: 'Material ID',
      sortable: true,
      filter: true,
    },
    {
      field: 'materialName',
      headerName: 'Material Name',
      sortable: true,
      filter: true,
    },
    { field: 'supplier', headerName: 'Supplier', sortable: true, filter: true },
    {
      field: 'quantityAvailable',
      headerName: 'Qty Avail',
      sortable: true,
      filter: true,
    },
    { field: 'unit', headerName: 'Unit', sortable: true, filter: true },
    { field: 'location', headerName: 'Location', sortable: true, filter: true },
    {
      field: 'costPerUnit',
      headerName: 'Cost Per Unit',
      valueFormatter: (params) => `$${params.value.toFixed(2)}`,
      sortable: true,
      filter: true,
    },
    {
      field: 'leadTime',
      headerName: 'Lead Time',
      sortable: true,
      filter: true,
    },
    {
      field: 'reorderLevel',
      headerName: 'Reorder Level',
      sortable: true,
      filter: true,
    },
    {
      field: 'minOrderQty',
      headerName: 'Min Order Qty',
      sortable: true,
      filter: true,
    },
    {
      field: 'lastRestock',
      headerName: 'Last Restock',
      sortable: true,
      filter: true,
    },
    {
      field: 'expirationDate',
      headerName: 'Exp Date',
      sortable: true,
      filter: true,
    },
    { field: 'batchId', headerName: 'Batch ID', sortable: true, filter: true },
    { field: 'lotId', headerName: 'Lot ID', sortable: true, filter: true },
    {
      field: 'safetyStockLevel',
      headerName: 'Safety Stock Level',
      sortable: true,
      filter: true,
    },
    {
      field: 'consumptionRate',
      headerName: 'Consumption Rate',
      valueFormatter: (params) => `$${params.value}/mg`,
      sortable: true,
      filter: true,
    },
    {
      field: 'backorderedQuantity',
      headerName: 'Backordered Quantity',
      sortable: true,
      filter: true,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      cellRenderer: () => `
        <button class="view-btn">👁️</button>
        <button class="delete-btn">🗑️</button>
      `,
      sortable: false,
      filter: false,
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
      this.rawMaterialsData = response.data; // Directly assign data to `rawMaterialsData`
    });
  }
  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.loadAllInventoryData(); // Load data after the grid is ready
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
