import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { InventoryService } from 'src/app/pages/inventory/inventory.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthService } from 'src/app/components/auth/auth.service';
import Chart from 'chart.js/auto';
import { MatDialog } from '@angular/material/dialog';
import { NewInventoryDialogComponent } from './components/new-inventory-dialog/new-inventory-dialog.component';

interface InventoryItem {
  _id: string;
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
    'subCategory',
    'actions'
  ];
  dataSource: MatTableDataSource<InventoryItem> = new MatTableDataSource();
  isAdminOrManager: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private inventoryService: InventoryService,
    private authService: AuthService,
    private dialog: MatDialog

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
    const dialogRef = this.dialog.open(NewInventoryDialogComponent, {
      width: '450px',
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`resultin create inventory`, result);
      
      if (result) {
        // Handle form submission, e.g., send data to backend
        this.inventoryService.createInventory(result).subscribe((newInventory) => {
          // Add the new inventory item to the data source
          const updatedItems = newInventory.items.map((item: any) => ({
            ...item,
            category: newInventory.category,
            type: newInventory.type,
            subCategory: newInventory.subCategory,
          }));
  
          this.dataSource.data = [...this.dataSource.data, ...updatedItems];
        });
      }
    });
  }

  editInventoryItem(item: InventoryItem) {
    // Retrieve the full inventory list
    this.inventoryService.getInventory().subscribe((data: any) => {
      // Find the parent ID based on the item's _id
      const parentItem = data.find((inv: any) =>
        inv.items.some((i: any) => i._id === item._id)
      );
  
      if (parentItem) {
        const parentId = parentItem._id;  // This is the parent _id
  
        // Open the dialog with the current item data
        const dialogRef = this.dialog.open(NewInventoryDialogComponent, {
          width: '450px',
          data: item
        });
  
        dialogRef.afterClosed().subscribe((result: InventoryItem | undefined) => {
          if (result) {
            // Send the update request with the parentId and updated data
            this.inventoryService.updateInventoryItem(parentId, result).subscribe(
              () => {
                // Refetch the updated inventory data
                this.refreshInventory();
              },
              (error) => {
                console.error('Error updating inventory item:', error);
              }
            );
          }
        });
      } else {
        console.error('Parent item not found for item ID:', item._id);
      }
    });
  }
  
  refreshInventory() {
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
  
      this.renderChart(items); // Refresh the chart if needed
    });
  }  
  
  deleteInventoryItem(item: InventoryItem) {
    // Retrieve the full inventory list
    this.inventoryService.getInventory().subscribe((data: any) => {
      // Find the parent inventory that contains the item to delete
      const parentItem = data.find((inv: any) =>
        inv.items.some((i: any) => i._id === item._id)
      );
  
      if (parentItem) {
        // Remove the parent inventory
        this.inventoryService.deleteInventoryItem(parentItem._id).subscribe(
          () => {
            // Refetch the updated inventory data
            this.refreshInventory();
          },
          (error) => {
            console.error('Error deleting inventory item:', error);
          }
        );
      } else {
        console.error('Parent item not found for item ID:', item._id);
      }
    });
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
