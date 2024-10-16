import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // Sample Data for each tables
  rawMaterials = [
    {
      picture: 'assets/ascorbicAcid.png',  // Path to image
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
      backorderedQty: 0
    },
    {
      picture: 'assets/manganeseSulfate.png',  // Path to image
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
      backorderedQty: 10
    },
    {
      picture: 'assets/riboflavin.png',  // Path to image
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
      backorderedQty: 5
    },
    {
      picture: 'assets/calciferol.png',  // Path to image
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
      backorderedQty: 0
    }
  ];

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
  
  constructor() {}
  ngOnInit(): void {}
}
