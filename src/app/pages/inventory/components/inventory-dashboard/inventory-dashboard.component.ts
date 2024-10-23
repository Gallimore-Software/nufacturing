import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../inventory.service';
import { InventoryItem } from '../../inventory-item.model';

@Component({
  selector: 'app-inventory-dashboard',
  templateUrl: './inventory-dashboard.component.html',
  styleUrls: ['./inventory-dashboard.component.scss'],
})
export class InventoryDashboardComponent implements OnInit {
  rawMaterialsData: InventoryItem[] = [];
  wipData: InventoryItem[] = [];
  finishedGoodsData: InventoryItem[] = [];
  componentsData: InventoryItem[] = [];

  rawMaterialsCount = 0;
  wipCount = 0;
  finishedGoodsCount = 0;
  componentsCount = 0;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    console.log('hit inventory-dashboard.component.ts');
    this.inventoryService
      .getInventoryByType('Raw Materials')
      .subscribe((response) => {
        this.rawMaterialsData = response.data; // Accessing the data property from ApiResponse
        this.rawMaterialsCount = response.data.length; // Counting the items
      });

    this.inventoryService
      .getInventoryByType('Work in Progress')
      .subscribe((response) => {
        this.wipData = response.data;
        this.wipCount = response.data.length;
      });

    this.inventoryService
      .getInventoryByType('Finished Goods')
      .subscribe((response) => {
        this.finishedGoodsData = response.data;
        this.finishedGoodsCount = response.data.length;
      });

    this.inventoryService
      .getInventoryByType('Components')
      .subscribe((response) => {
        this.componentsData = response.data;
        this.componentsCount = response.data.length;
      });
  }
}
