import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthService } from 'src/app/components/auth/auth.service';
import Chart from 'chart.js/auto';

interface InventoryItem {
  ingredientName: string;
  pricePerKg: number;
  stockQuantity: number;
  category: string;
  type: string;
  subCategory: string;
}

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'ingredientName',
    'pricePerKg',
    'stockQuantity',
    'category',
    'type',
    'subCategory'
  ];
  dataSource: MatTableDataSource<InventoryItem> = new MatTableDataSource();
  isAdminOrManager: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private inventoryService: InventoryService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe((data: any) => {
      const items = data.flatMap((category: any) =>
        category.items.map((item: any) => ({
          ...item,
          category: category.category,
          type: category.type,
          subCategory: category.subCategory,
        }))
      );

      this.dataSource.data = items;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
      this.renderChart(items);
    });

    this.authService.userRole.subscribe((role: string | null) => {
      this.isAdminOrManager = role === 'admin' || role === 'manager';
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  createNewInventory() {
    // Logic for creating new inventory
  }

  renderChart(items: InventoryItem[]) {
    const ctx = (document.getElementById('inventoryChart') as HTMLCanvasElement).getContext('2d');
    if (!ctx) return;

    const labels = items.map(item => item.ingredientName);
    const data = items.map(item => item.stockQuantity);

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Stock Quantity',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
