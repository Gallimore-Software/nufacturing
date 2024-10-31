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
  selector: 'app-finished-goods-table',
  templateUrl: './finished-goods-table.component.html',
  styleUrls: ['./finished-goods-table.component.scss'],
})
export class FinishedGoodsTableComponent implements OnInit {
  rawMaterialsData: InventoryItem[] = [];
  columnDefs: (ColDef | ColGroupDef)[] = [
    {
      field: 'picture',
      headerName: 'Picture',
      cellRenderer: (params: { value: string }) =>
        params.value
          ? `<img src="${params.value}" style="height: 50px; width: 50px;" />`
          : '',
      sortable: false,
      filter: false,
    },
    {
      field: 'itemId',
      headerName: 'Material ID',
      sortable: true,
      filter: true,
    },
    {
      field: 'name',
      headerName: 'Material Name',
      sortable: true,
      filter: true,
    },
    { field: 'supplier', headerName: 'Supplier', sortable: true, filter: true }, // If 'supplier' isn't present, remove or modify this
    {
      field: 'quantities.inStock',
      headerName: 'Qty Avail',
      sortable: true,
      filter: true,
      valueGetter: (params) => params.data.quantities?.inStock || 0,
    },
    {
      field: 'unitOfMeasurement',
      headerName: 'Unit',
      sortable: true,
      filter: true,
    },
    { field: 'location', headerName: 'Location', sortable: true, filter: true }, // Assuming 'location' might be added later
    {
      field: 'pricePerUnit',
      headerName: 'Cost Per Unit',
      valueFormatter: (params) =>
        params.value ? `$${params.value.toFixed(2)}` : '',
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
      field: 'expirationDate',
      headerName: 'Exp Date',
      sortable: true,
      filter: true,
      valueFormatter: (params) =>
        params.value ? new Date(params.value).toLocaleDateString() : '',
    },
    {
      field: 'safetyStockLevel',
      headerName: 'Safety Stock Level',
      sortable: true,
      filter: true,
    },
    {
      field: 'consumptionRate',
      headerName: 'Consumption Rate',
      valueFormatter: (params) => (params.value ? `$${params.value}/mg` : ''),
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
    // No need to call loadAllInventoryData here; we’ll call it in onGridReady
  }

  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();

    // Wrap data load in setTimeout to avoid grid redraw issues
    setTimeout(() => {
      this.loadAllInventoryData(); // Load data after the grid is fully ready
    }, 0);
  }

  private loadAllInventoryData(): void {
    this.inventoryService.getInventory().subscribe((response) => {
      console.log(response);
      this.rawMaterialsData = response.data; // Assign to rawMaterialsData
    });
  }

  openCreateInventoryDialog(): void {
    const dialogRef = this.dialog.open(NewInventoryDialogComponent, {
      width: '50%',
      data: { userId: 'yourUserId' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        setTimeout(() => {
          this.loadAllInventoryData(); // Reload data after dialog closes
        }, 0);
      }
    });
  }
}
