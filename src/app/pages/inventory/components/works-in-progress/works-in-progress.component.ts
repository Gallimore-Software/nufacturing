import { Component } from '@angular/core';
import { InventoryItem } from 'src/app/pages/inventory/inventory-item.model';
import { InventoryService } from 'src/app/pages/inventory/inventory.service';

@Component({
  selector: 'app-works-in-progress',
  templateUrl: './works-in-progress.component.html',
  styleUrls: ['./works-in-progress.component.scss'],
})
export class WorksInProgressComponent {
  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.loadAllInventoryData();
  }

  displayedColumns: string[] = [
    'itemId',
    'name',
    'sku',
    'pricePerUnit',
    'status',
    'availableQuantity',
  ];

  inventoryDataCount = 0;

  inventoryData: InventoryItem[] = [];

  private loadAllInventoryData(): void {
    this.inventoryService.getInventory().subscribe((response) => {
      this.inventoryData = response.data;
      this.inventoryDataCount = response.data.length;
    });
  }
}
