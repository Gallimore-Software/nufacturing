import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InventoryService } from '../../inventory.service';
import { InventoryItem } from '../../inventory-item.model';
import { NewInventoryDialogComponent } from '../components/new-inventory-dialog/new-inventory-dialog.component';

@Component({
  selector: 'app-inventory-dashboard',
  templateUrl: './inventory-dashboard.component.html',
  styleUrls: ['./inventory-dashboard.component.scss'],
})
export class InventoryDashboardComponent implements OnInit {
  inventoryData: InventoryItem[] = [];
  rawMaterialsData: InventoryItem[] = [];
  wipData: InventoryItem[] = [];
  finishedGoodsData: InventoryItem[] = [];
  componentsData: InventoryItem[] = [];

  displayedColumns: string[] = [
    'itemId',
    'name',
    'sku',
    'pricePerUnit',
    'status',
    'availableQuantity',
  ];

  inventoryDataCount = 0;
  rawMaterialsCount = 0;
  wipCount = 0;
  finishedGoodsCount = 0;
  componentsCount = 0;

  constructor(
    private inventoryService: InventoryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadAllInventoryData();
  }

  private loadAllInventoryData(): void {
    this.inventoryService.getInventory().subscribe((response) => {
      this.inventoryData = response.data;
      this.inventoryDataCount = response.data.length;
    });
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
