import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-dashboard',
  templateUrl: './inventory-dashboard.component.html',
  styleUrls: ['./inventory-dashboard.component.scss']
})
export class InventoryDashboardComponent {


  components = [
    {
      picture: 'assets/bottleCap.png',  // Path to image
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
      status: 'In Stock'
    },
    {
      picture: 'assets/labels.png',  // Path to image
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
      status: 'Backordered'
    },
    {
      picture: 'assets/silicaGel.png',  // Path to image
      componentId: 'CMP003',
      name: 'Silica Gel Packets',
      supplier: 'DryGuard Corp',
      qtyAvail: 2000,
      unit: 'pcs',
      costPerUnit: 0.10,
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
      status: 'In Stock'
    },
    {
      picture: 'assets/cottonBalls.png',  // Path to image
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
      status: 'In Stock'
    },
    {
      picture: 'assets/bottles.png',  // Path to image
      componentId: 'CMP005',
      name: 'Plastic Pill Bottles',
      supplier: 'PharmaContainer Ltd.',
      qtyAvail: 500,
      unit: 'pcs',
      costPerUnit: 0.50,
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
      status: 'Backordered'
    }
  ];
}
