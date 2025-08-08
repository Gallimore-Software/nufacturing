import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Input,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { InventoryItem } from '../../inventory-item.model';
import { InventoryService } from 'src/app/pages/inventory/inventory.service';
import { AuthService } from 'src/app/components/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { NewInventoryDialogComponent } from '../new-inventory-dialog/new-inventory-dialog.component';

@Component({
  selector: 'inventory-inventory-items-table',
  templateUrl: './inventory-items-table.component.html',
  styleUrls: ['./inventory-items-table.component.scss'],
})
export class InventoryItemsTableComponent implements OnInit, AfterViewInit {
  // Sample Table Data
  rawMaterials = [
    {
      picture: 'assets/ascorbicAcid.png',
      materialId: 'RM001',
      name: 'Ascorbic Acid (Vitamin C)',
      supplier: 'HealthPro Labs',
      qtyAvail: 500,
      unit: 'kg',
      location: 'Warehouse 3',
      costPerUnit: 25,
      leadTime: 3,
      reorderLevel: 100,
      minOrderQty: 200,
      lastRestock: new Date('2024-02-01'),
      expDate: new Date('2025-08-01'),
      batchId: 'BATCHC123',
      lotId: 'LOT1011',
      safetyStockLevel: 50,
      consumptionRate: '20 kg per day',
      backorderedQty: 0,
      approvalStatus: 'Approved',
      receivedDate: new Date('2024-02-01'),
      priceLastUpdated: new Date('2024-01-25'),
    },
    {
      picture: 'assets/manganeseSulfate.png',
      materialId: 'RM002',
      name: 'Manganese Sulfate (Manganese)',
      supplier: 'Mineral Essentials Co.',
      qtyAvail: 150,
      unit: 'kg',
      location: 'Warehouse 2',
      costPerUnit: 15,
      leadTime: 5,
      reorderLevel: 50,
      minOrderQty: 100,
      lastRestock: new Date('2024-01-15'),
      expDate: new Date('2025-05-15'),
      batchId: 'BATCHM789',
      lotId: 'LOT2021',
      safetyStockLevel: 30,
      consumptionRate: '5 kg per day',
      backorderedQty: 10,
      approvalStatus: 'Pending',
      receivedDate: new Date('2024-01-10'),
      priceLastUpdated: new Date('2024-01-05'),
    },
    {
      picture: 'assets/riboflavin.png',
      materialId: 'RM003',
      name: 'Riboflavin (Vitamin B2)',
      supplier: 'VitalSource Pharma',
      qtyAvail: 100,
      unit: 'kg',
      location: 'Warehouse 1',
      costPerUnit: 35,
      leadTime: 6,
      reorderLevel: 20,
      minOrderQty: 50,
      lastRestock: new Date('2024-02-20'),
      expDate: new Date('2025-06-20'),
      batchId: 'BATCHR456',
      lotId: 'LOT3032',
      safetyStockLevel: 25,
      consumptionRate: '2 kg per day',
      backorderedQty: 5,
      approvalStatus: 'Approved',
      receivedDate: new Date('2024-02-15'),
      priceLastUpdated: new Date('2024-02-01'),
    },
    {
      picture: 'assets/calciferol.png',
      materialId: 'RM004',
      name: 'Ergocalciferol (Vitamin D2)',
      supplier: 'Sunshine Extracts',
      qtyAvail: 80,
      unit: 'kg',
      location: 'Warehouse 4',
      costPerUnit: 50,
      leadTime: 4,
      reorderLevel: 20,
      minOrderQty: 40,
      lastRestock: new Date('2024-03-10'),
      expDate: new Date('2025-09-10'),
      batchId: 'BATCHD654',
      lotId: 'LOT4043',
      safetyStockLevel: 15,
      consumptionRate: '1.5 kg per day',
      backorderedQty: 0,
      approvalStatus: 'Rejected',
      receivedDate: new Date('2024-03-05'),
      priceLastUpdated: new Date('2024-03-01'),
    },
  ];
  components = [
    {
      picture: 'assets/bottleCap.png',
      componentId: 'CMP001',
      name: 'Plastic Bottle Cap',
      supplier: 'CapIt Industries',
      qtyAvail: 1500,
      unit: 'pcs',
      costPerUnit: 0.05,
      location: 'Shelf A1',
      reorderLevel: 200,
      leadTime: 5,
      minOrderQty: 500,
      lastRestock: new Date('2024-03-05'),
      componentType: 'Packaging',
      weight: '0.01 kg',
      dimensions: '3x3x1 cm',
      batchIds: 'BATCHCAP101, BATCHCAP102',
      lotIds: 'LOTCAP789, LOTCAP790',
      backorderedQty: 0,
      status: 'In Stock',
    },
    {
      picture: 'assets/labels.png',
      componentId: 'CMP002',
      name: 'Pill Bottle Labels',
      supplier: 'LabelPro Supplies',
      qtyAvail: 7500,
      unit: 'pcs',
      costPerUnit: 0.02,
      location: 'Shelf B2',
      reorderLevel: 1000,
      leadTime: 7,
      minOrderQty: 2000,
      lastRestock: new Date('2024-02-18'),
      componentType: 'Packaging',
      weight: '0.001 kg',
      dimensions: '5x5x0.1 cm',
      batchIds: 'BATCHLBL103',
      lotIds: 'LOTLBL791',
      backorderedQty: 500,
      status: 'Backordered',
    },
    {
      picture: 'assets/silicaGel.png',
      componentId: 'CMP003',
      name: 'Silica Gel Packets',
      supplier: 'DryGuard Corp',
      qtyAvail: 2000,
      unit: 'pcs',
      costPerUnit: 0.1,
      location: 'Shelf C3',
      reorderLevel: 500,
      leadTime: 4,
      minOrderQty: 1000,
      lastRestock: new Date('2024-03-01'),
      componentType: 'Stabilizer',
      weight: '0.005 kg',
      dimensions: '2x2x0.5 cm',
      batchIds: 'BATCHSIL104, BATCHSIL105',
      lotIds: 'LOTSIL792, LOTSIL793',
      backorderedQty: 0,
      status: 'In Stock',
    },
    {
      picture: 'assets/cottonBalls.png',
      componentId: 'CMP004',
      name: 'Cotton Balls',
      supplier: 'PureSoft Materials',
      qtyAvail: 1200,
      unit: 'pcs',
      costPerUnit: 0.03,
      location: 'Shelf D4',
      reorderLevel: 300,
      leadTime: 6,
      minOrderQty: 600,
      lastRestock: new Date('2024-02-28'),
      componentType: 'Packaging Filler',
      weight: '0.001 kg',
      dimensions: '4x4x4 cm',
      batchIds: 'BATCHCTN106',
      lotIds: 'LOTCTN794',
      backorderedQty: 0,
      status: 'In Stock',
    },
    {
      picture: 'assets/bottles.png',
      componentId: 'CMP005',
      name: 'Plastic Pill Bottles',
      supplier: 'PharmaContainer Ltd.',
      qtyAvail: 500,
      unit: 'pcs',
      costPerUnit: 0.5,
      location: 'Shelf E5',
      reorderLevel: 100,
      leadTime: 8,
      minOrderQty: 300,
      lastRestock: new Date('2024-03-03'),
      componentType: 'Packaging',
      weight: '0.08 kg',
      dimensions: '10x5x5 cm',
      batchIds: 'BATCHBOT107',
      lotIds: 'LOTBOT795',
      backorderedQty: 50,
      status: 'Backordered',
    },
  ];

  wips = [
    {
      picture: 'assets/probioticCapsules.png', // Path to image
      wipId: 'WIP001',
      productName: 'Probiotic Capsules',
      sku: 'PROB-CAP-001',
      batchIds: 'BATCHC123, BATCHC124',
      lotIds: 'LOT1011, LOT1012',
      stageOfProd: 'Encapsulation',
      qtyInProgress: 1000,
      unit: 'capsules',
      costToDate: 2000,
      estCompletion: new Date('2024-04-10'),
      workOrderId: 'WO12345',
      location: 'Manufacturing Area 1',
      leadTimeRemaining: 5,
      reservedForOrderIds: 'ORD456, ORD789',
      supplier: 'Probiotic Health Supplies',
      matsAllocated: 'Lactobacillus Powder, Gelatin',
      assignee: 'John Doe',
      status: 'In Progress',
    },
    {
      picture: 'assets/vitaminDPowder.png', // Path to image
      wipId: 'WIP002',
      productName: 'Vitamin D Powder',
      sku: 'VITD-PWD-001',
      batchIds: 'BATCHD456',
      lotIds: 'LOT2022',
      stageOfProd: 'Blending',
      qtyInProgress: 500,
      unit: 'kg',
      costToDate: 1500,
      estCompletion: new Date('2024-04-05'),
      workOrderId: 'WO54321',
      location: 'Blending Area 2',
      leadTimeRemaining: 3,
      reservedForOrderIds: 'ORD654',
      supplier: 'Sunshine Extracts',
      matsAllocated: 'Ergocalciferol, Maltodextrin',
      assignee: 'Jane Smith',
      status: 'Delayed',
    },
    {
      picture: 'assets/fishOilLiquid.png', // Path to image
      wipId: 'WIP003',
      productName: 'Omega-3 Fish Oil',
      sku: 'FISH-OIL-001',
      batchIds: 'BATCHF789',
      lotIds: 'LOT3032',
      stageOfProd: 'Filling',
      qtyInProgress: 250,
      unit: 'liters',
      costToDate: 3200,
      estCompletion: new Date('2024-04-12'),
      workOrderId: 'WO98765',
      location: 'Filling Line 1',
      leadTimeRemaining: 7,
      reservedForOrderIds: 'ORD987, ORD123',
      supplier: 'OmegaLife Solutions',
      matsAllocated: 'Fish Oil Concentrate, Gelatin',
      assignee: 'Chris Lee',
      status: 'In Progress',
    },
  ];
  finishedGoods = [
    {
      picture: 'assets/probioticCapsules.png', // Path to image
      productName: 'Probiotic Capsules',
      sku: 'PROB-CAP-001',
      batchIds: 'BATCHC123, BATCHC124',
      lotIds: 'LOT1011, LOT1012',
      qtyAvail: 5000,
      unit: 'capsules',
      costPerUnit: 0.1,
      sellingPrice: 0.25,
      location: 'Warehouse A1',
      expirationDate: new Date('2025-12-01'),
      reorderLevel: 1000,
      reservedQty: 2000,
      reservedForOrderIds: 'ORD789, ORD123',
      supplier: 'HealthPro Labs',
      orderAllocationDetails: 'Allocated for ORD789, partially fulfilled',
      status: 'In Stock',
    },
    {
      picture: 'assets/vitaminDPowder.png', // Path to image
      productName: 'Vitamin D Powder',
      sku: 'VITD-PWD-001',
      batchIds: 'BATCHD456',
      lotIds: 'LOT2022',
      qtyAvail: 1500,
      unit: 'kg',
      costPerUnit: 25,
      sellingPrice: 45,
      location: 'Warehouse B2',
      expirationDate: new Date('2024-11-15'),
      reorderLevel: 500,
      reservedQty: 500,
      reservedForOrderIds: 'ORD456',
      supplier: 'Sunshine Extracts',
      orderAllocationDetails: 'Reserved for ORD456',
      status: 'Backordered',
    },
    {
      picture: 'assets/fishOilLiquid.png', // Path to image
      productName: 'Omega-3 Fish Oil',
      sku: 'FISH-OIL-001',
      batchIds: 'BATCHF789',
      lotIds: 'LOT3032',
      qtyAvail: 1200,
      unit: 'liters',
      costPerUnit: 10,
      sellingPrice: 25,
      location: 'Warehouse C3',
      expirationDate: new Date('2024-09-10'),
      reorderLevel: 300,
      reservedQty: 400,
      reservedForOrderIds: 'ORD654, ORD987',
      supplier: 'OmegaLife Solutions',
      orderAllocationDetails: 'Allocated for ORD654, ORD987',
      status: 'In Stock',
    },
  ];

  @Input() dataSource: MatTableDataSource<InventoryItem> =
    new MatTableDataSource();
  @Input() displayedColumns: string[] = [];
  isAdminOrManager: boolean = false;

  categories: string[] = [
    'All Inventory',
    'Raw Materials',
    'Components',
    'Work in Progress',
    'Finished Goods',
  ];
  selectedCategory: string = 'All Inventory';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private inventoryService: InventoryService,
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initializeTable();
    this.checkUserRole();
  }

  ngAfterViewInit() {
    this.setTableProperties();
  }

  private initializeTable() {
    this.setTableProperties();
  }

  private checkUserRole() {
    this.authService.userRole.subscribe((role: string | null) => {
      this.isAdminOrManager = role === 'admin' || role === 'manager';
    });
  }

  private setTableProperties() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();
  }

  filterByCategory() {
    this.dataSource.filter =
      this.selectedCategory === 'All Inventory' ? '' : this.selectedCategory;
  }

  createNewInventory() {
    const dialogRef = this.dialog.open(NewInventoryDialogComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((result: InventoryItem | undefined) => {
      if (result) {
        this.updateDataSourceWithNewItem(result);
      }
    });
  }

  private updateDataSourceWithNewItem(newInventoryItem: InventoryItem) {
    this.dataSource.data = [...this.dataSource.data, newInventoryItem];
  }

  editInventoryItem(item: InventoryItem) {
    this.inventoryService.getInventory().subscribe((data: any) => {
      const parentItem = this.findParentItem(data, item);

      if (parentItem) {
        const dialogRef = this.dialog.open(NewInventoryDialogComponent, {
          width: '450px',
          data: item,
        });

        dialogRef
          .afterClosed()
          .subscribe((result: InventoryItem | undefined) => {
            if (result) {
              this.updateInventoryItem(parentItem._id, result);
            }
          });
      } else {
        console.error('Parent item not found for item ID:', item._id);
      }
    });
  }

  private findParentItem(inventoryItems: any[], item: InventoryItem) {
    // Use find to locate the parent item in the inventoryItems array
    return inventoryItems.find((inv: any) => inv._id === item._id);
  }

  private updateInventoryItem(parentId: string, item: InventoryItem) {
    this.inventoryService.updateInventoryItem(parentId, item).subscribe(
      () => this.refreshInventory(),
      (error) => console.error('Error updating inventory item:', error)
    );
  }

  deleteInventoryItem(item: InventoryItem) {
    this.inventoryService.getInventory().subscribe((data: any) => {
      // Accessing the correct data property that contains the array
      const inventoryItems = data.data;

      // Finding the parent item based on the item's _id
      const parentItem = this.findParentItem(inventoryItems, item);

      if (parentItem) {
        // Call the delete method on the parent item's _id
        this.inventoryService.deleteInventoryItem(parentItem._id).subscribe(
          () => this.refreshInventory(),
          (error) => console.error('Error deleting inventory item:', error)
        );
      } else {
        console.error('Parent item not found for item ID:', item._id);
      }
    });
  }

  refreshInventory() {
    this.inventoryService.getInventory().subscribe((data: any) => {
      const items = this.flattenInventoryItems(data);
      this.dataSource.data = items;
      this.setTableProperties();
    });
  }

  private flattenInventoryItems(data: any) {
    return data.flatMap((category: any) =>
      category.items.map((item: any) => ({
        ...item,
        category: category.category,
      }))
    );
  }
}
