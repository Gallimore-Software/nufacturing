import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-package-breakdown',
  templateUrl: './package-breakdown.component.html',
  styleUrls: ['./package-breakdown.component.scss'],
})
export class PackageBreakdownComponent implements OnInit {
  displayedColumns: string[] = [
    'item',
    'qtyNeeded',
    'cost',
    'minOrderQty',
    'costQtyOrdered',
    'costPerBottle',
    'costPerOrder',
    'actions',
  ];
  dataSource: any[] = [];
  filteredDataSource: any[] = [];
  totalCostPerBottle: number = 0;
  totalCostPerOrder: number = 0;

  constructor(private globalService: GlobalServiceService) {}

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData(): void {
    const packageData = [
      {
        item: '225 PET Black',
        qtyNeeded: 2000,
        cost: 0.4,
        minOrderQty: 0,
        costQtyOrdered: 0.4,
        costPerBottle: 0.4,
        costPerOrder: 800.0,
      },
      {
        item: '#N/A',
        qtyNeeded: 2000,
        cost: 0.0,
        minOrderQty: 0,
        costQtyOrdered: 0.0,
        costPerBottle: 0.0,
        costPerOrder: 0.0,
      },
      {
        item: '2.50" X 7.00" White BOPP PET',
        qtyNeeded: 2000,
        cost: 0.3755,
        minOrderQty: 0,
        costQtyOrdered: 0.1,
        costPerBottle: 0.1,
        costPerOrder: 200.0,
      },
      {
        item: 'Tamper-Proof Sticker-94mm x 0.5mm',
        qtyNeeded: 2000,
        cost: 0.07,
        minOrderQty: 0,
        costQtyOrdered: 0.07,
        costPerBottle: 0.07,
        costPerOrder: 140.0,
      },
      {
        item: 'Gelatin',
        qtyNeeded: 102000,
        cost: 0.005,
        minOrderQty: 0,
        costQtyOrdered: 0.25,
        costPerBottle: 0.25,
        costPerOrder: 500.0,
      },
      {
        item: 'Can Liner',
        qtyNeeded: 2,
        cost: 0.002,
        minOrderQty: 0,
        costQtyOrdered: 0.004,
        costPerBottle: 0.004,
        costPerOrder: 8.0,
      },
      {
        item: 'Labor',
        qtyNeeded: 0,
        cost: 0,
        minOrderQty: 0,
        costQtyOrdered: 0.355,
        costPerBottle: 0.355,
        costPerOrder: 710.75,
      },
      {
        item: 'NFG TAX',
        qtyNeeded: 0,
        cost: 0,
        minOrderQty: 0,
        costQtyOrdered: 0.25,
        costPerBottle: 0.25,
        costPerOrder: 500.0,
      },
      {
        item: '16" x 10" x 4" (CEL)',
        qtyNeeded: 15,
        cost: 1.08,
        minOrderQty: 0,
        costQtyOrdered: 0.008,
        costPerBottle: 0.008,
        costPerOrder: 16.0,
      },
      {
        item: 'Testing Costs',
        qtyNeeded: 0,
        cost: 0,
        minOrderQty: 0,
        costQtyOrdered: 0.257,
        costPerBottle: 0.257,
        costPerOrder: 514.0,
      },
      {
        item: 'Silica',
        qtyNeeded: 2000,
        cost: 0.15,
        minOrderQty: 0,
        costQtyOrdered: 0.15,
        costPerBottle: 0.15,
        costPerOrder: 300.0,
      },
      {
        item: 'Cotton',
        qtyNeeded: 2000,
        cost: 0.05,
        minOrderQty: 0,
        costQtyOrdered: 0.05,
        costPerBottle: 0.05,
        costPerOrder: 100.0,
      },
    ];

    this.dataSource = packageData;
    this.filteredDataSource = packageData;
    this.calculateSummary();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.filteredDataSource = this.dataSource.filter((item) =>
      item.item.toLowerCase().includes(filterValue),
    );
    this.calculateSummary();
  }

  calculateSummary(): void {
    this.totalCostPerBottle = this.filteredDataSource.reduce(
      (acc, curr) => acc + curr.costPerBottle,
      0,
    );
    this.totalCostPerOrder = this.filteredDataSource.reduce(
      (acc, curr) => acc + curr.costPerOrder,
      0,
    );
  }

  editItem(element: any): void {
    // Implement edit logic here
    console.log('Edit item:', element);
  }

  deleteItem(element: any): void {
    // Implement delete logic here
    this.dataSource = this.dataSource.filter((item) => item !== element);
    this.filteredDataSource = this.filteredDataSource.filter(
      (item) => item !== element,
    );
    this.calculateSummary();
    console.log('Delete item:', element);
  }
}
