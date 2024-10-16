import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // Sample Data for Raw Materials
  rawMaterials = [
    {
      picture: 'assets/materialA.png',  // Path to image
      materialId: 'RM001',
      name: 'Material A',
      supplier: 'Supplier X',
      qtyAvail: 100,
      unit: 'kg',
      location: 'Warehouse 1',
      costPerUnit: 10,
      leadTime: 5,
      reorderLevel: 20,
      minOrderQty: 50,
      lastRestock: new Date('2024-01-10'),
      expDate: new Date('2025-01-10'),
      batchId: 'BATCH123',
      lotId: 'LOT456',
      safetyStockLevel: 30,
      consumptionRate: '5 per day',
      backorderedQty: 0
    },
    {
      picture: 'assets/materialB.png',  // Path to image
      materialId: 'RM002',
      name: 'Material B',
      supplier: 'Supplier Y',
      qtyAvail: 200,
      unit: 'kg',
      location: 'Warehouse 2',
      costPerUnit: 8,
      leadTime: 7,
      reorderLevel: 50,
      minOrderQty: 100,
      lastRestock: new Date('2024-02-15'),
      expDate: new Date('2025-02-15'),
      batchId: 'BATCH789',
      lotId: 'LOT101',
      safetyStockLevel: 50,
      consumptionRate: '10 per day',
      backorderedQty: 20
    }
  ];
  constructor() {}
  ngOnInit(): void {}
}
