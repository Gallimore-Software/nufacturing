import {
  Component,
  Input,
  ViewEncapsulation,
  TrackByFunction,
} from '@angular/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import type {
  ColDef,
  GetDetailRowDataParams,
  GridApi,
  GridReadyEvent,
  SizeColumnsToFitGridStrategy,
  ValueFormatterFunc,
  ValueFormatterParams,
  ValueGetterParams,
} from '@ag-grid-community/core';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';
import { MasterDetailModule } from '@ag-grid-enterprise/master-detail';
import { MultiFilterModule } from '@ag-grid-enterprise/multi-filter';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';

import { getData } from './data';
import { ProductCellRenderer } from './cell-renderer/product-cell-renderer.component';
import { StatusCellRenderer } from './cell-renderer/status-cell-renderer.component';
import { StockCellRenderer } from './cell-renderer/stock-cell-renderer.component';
import { PriceCellRenderer } from './cell-renderer/price-cell-renderer.component';
import { ActionsCellRenderer } from './cell-renderer/actions-cell-renderer.component';

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ExcelExportModule,
  SetFilterModule,
  MultiFilterModule,
  MasterDetailModule,
]);

const statuses = {
  all: 'All',
  active: 'Active',
  paused: 'On Hold',
  outOfStock: 'Out of Stock',
};

const statusFormatter: ValueFormatterFunc = ({ value }) =>
  statuses[value as keyof typeof statuses] ?? '';

@Component({
  selector: 'inventory-example',
  templateUrl: './raw-materials-inventory.component.html',
  styleUrls: ['./raw-materials-inventory.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RawMaterialsInventoryComponent {
  @Input() gridTheme: string = 'ag-theme-quartz';
  @Input() isDarkMode: boolean = false;

  private gridApi!: GridApi;

  themeClass = `${this.gridTheme}${this.isDarkMode ? '-dark' : ''}`;

  rowData = getData();

  columnDefs: ColDef[] = [
    {
      field: 'product',
      headerName: 'Album Name',
      cellRenderer: 'agGroupCellRenderer',
      headerClass: 'header-product',
      cellRendererParams: {
        innerRenderer: ProductCellRenderer,
      },
      minWidth: 300,
    },
    { field: 'artist', headerName: 'Artist' },
    {
      field: 'year',
      headerName: 'Year',
      width: 150,
      headerClass: 'header-sku',
    },
    {
      field: 'status',
      headerName: 'Status',
      valueFormatter: statusFormatter,
      cellRenderer: StatusCellRenderer,
      filter: 'agSetColumnFilter',
      filterParams: {
        valueFormatter: statusFormatter,
      },
      headerClass: 'header-status',
    },
    {
      field: 'inventory',
      headerName: 'Inventory',
      cellRenderer: StockCellRenderer,
      headerClass: 'header-inventory',
      sortable: false,
    },
    {
      field: 'incoming',
      headerName: 'Incoming',
      cellEditorParams: {
        precision: 0,
        step: 1,
        showStepperButtons: true,
      },
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 120,
      headerClass: 'header-price',
      cellRenderer: PriceCellRenderer,
    },
    { field: 'sold', headerName: 'Sold', headerClass: 'header-calendar' },
    {
      headerName: 'Est. Profit',
      colId: 'profit',
      headerClass: 'header-percentage',
      cellDataType: 'number',
      valueGetter: ({ data }: ValueGetterParams) =>
        data.price && data.sold ? (data.price * data.sold) / 10 : null,
      valueFormatter: ({ value }: ValueFormatterParams) =>
        value ? `£${value}` : '',
      width: 150,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      cellRenderer: ActionsCellRenderer,
      minWidth: 194,
    },
  ];

  defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    filter: true,
  };

  autoSizeStrategy: SizeColumnsToFitGridStrategy = {
    type: 'fitGridWidth',
  };

  detailCellRendererParams = {
    detailGridOptions: {
      columnDefs: [
        { field: 'title', headerName: 'Title', flex: 1.5 },
        { field: 'available', headerName: 'Available', maxWidth: 120 },
        { field: 'format', headerName: 'Format', flex: 2 },
        { field: 'label', headerName: 'Label', flex: 1 },
        { field: 'country', headerName: 'Country', flex: 0.66 },
        {
          field: 'cat',
          headerName: 'Cat#',
          type: 'rightAligned',
          flex: 0.66,
        },
        {
          field: 'year',
          headerName: 'Year',
          type: 'rightAligned',
          maxWidth: 80,
        },
      ],
      headerHeight: 38,
    },
    getDetailRowData: ({
      successCallback,
      data: { variantDetails },
    }: GetDetailRowDataParams) => successCallback(variantDetails),
  };

  rowHeight = 80;
  paginationPageSizeSelector = [5, 10, 20];
  pagination = true;
  paginationPageSize = 10;
  masterDetail = true;
  detailRowAutoHeight = true;
  readonly trackStatus: TrackByFunction<[string, string]> = (index) => index;

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  statusEntries = Object.entries(statuses);
  activeTab = 'all';
  quickFilterText = '';

  handleTabClick(status: string) {
    this.gridApi.setFilterModel({
      status: status === 'all' ? null : { values: [status] },
    });
    this.gridApi.onFilterChanged();
    this.activeTab = status;
  }
}
