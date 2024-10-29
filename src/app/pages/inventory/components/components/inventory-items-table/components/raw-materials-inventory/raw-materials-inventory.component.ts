// Import necessary modules
import { Component, OnInit } from '@angular/core';
import { GridApi, ColDef, GridReadyEvent } from 'ag-grid-community';
import { getRawMaterialsData } from './raw-materials-data'; // Adjust path if necessary

@Component({
  selector: 'app-raw-materials-inventory',
  templateUrl: './raw-materials-inventory.component.html',
  styleUrls: ['./raw-materials-inventory.component.scss'],
})
export class RawMaterialsInventoryComponent implements OnInit {
  private gridApi!: GridApi;

  // Define column definitions to match the data
  columnDefs: ColDef[] = [
    { field: 'materialName', headerName: 'Material Name' },
    { field: 'category', headerName: 'Category' },
    { field: 'quantity', headerName: 'Quantity' },
    { field: 'supplier', headerName: 'Supplier' },
    { field: 'status', headerName: 'Status' },
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  rowData: any[] = []; // Will hold data for grid

  constructor() {}

  ngOnInit(): void {
    // Fetch data on component initialization
    this.rowData = getRawMaterialsData();
  }

  // Grid ready event handler
  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit(); // Optional: size columns to fit grid width
  }

  handleTabClick(status: string): void {
    // Implement filtering logic based on the 'status' argument
    if (this.gridApi) {
      if (status === 'all') {
        this.gridApi.setFilterModel(null); // Clear filters when "all" is selected
      } else {
        this.gridApi.setFilterModel({
          status: { type: 'equals', filter: status },
        });
      }
    }
  }
}
