import { Component, OnInit } from '@angular/core';
import { GridApi } from '@ag-grid-community/core';
import { GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-raw-materials-inventory',
  templateUrl: './raw-materials-inventory.component.html',
  styleUrls: ['./raw-materials-inventory.component.scss'],
})
export class RawMaterialsInventoryComponent implements OnInit {
  private gridApi!: GridApi;

  // Define 'activeTab' property to store the currently active tab
  activeTab: string = 'all'; // Default tab to 'all'

  statusEntries = Object.entries({
    all: 'All',
    active: 'Active',
    paused: 'On Hold',
    outOfStock: 'Out of Stock',
  });

  constructor() {}

  ngOnInit(): void {}

  // Method to handle tab switching
  handleTabClick(status: string): void {
    if (status === 'all') {
      this.gridApi.setFilterModel(null); // Clear filters when "all" is selected
    } else {
      this.gridApi.setFilterModel({
        status: {
          type: 'equals',
          filter: status,
        },
      });
    }
    this.activeTab = status; // Update active tab status
  }

  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
  }
}
