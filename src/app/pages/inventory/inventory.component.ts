import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/pages/inventory/inventory.service';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/components/auth/auth.service';
import { InventoryItem } from './inventory-item.model';
import { MatDialog } from '@angular/material/dialog';
import { NewInventoryDialogComponent } from './components/new-inventory-dialog/new-inventory-dialog.component';

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  displayedColumns: string[] = [
    'sku',
    'vendorName',
    'ingredientName',
    'pricePerKg',
    'stockQuantity',
    'lotCode',
    'category',
    'type',
    'actions',
  ];

  dataSource: MatTableDataSource<InventoryItem> = new MatTableDataSource();
  isAdminOrManager: boolean = false;

  constructor(
    private inventoryService: InventoryService,
    private authService: AuthService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.authService.userRole.subscribe((role: string | null) => {
      this.isAdminOrManager = role === 'admin' || role === 'manager';
    });
    this.refreshInventory();
  }

  refreshInventory() {
    this.inventoryService.getInventory().subscribe(
      (response: { success: boolean; data: any[] }) => {
        if (response.success && Array.isArray(response.data)) {
          this.dataSource.data = response.data.map((item: any) => ({
            _id: item._id,
            sku: item.sku,
            vendorName: item.vendor ? item.vendor.displayName : 'N/A',
            ingredientName: item.displayName,
            pricePerKg: item.pricePerUnit,
            stockQuantity: item.quantities.inStock,
            lotCode: item.lotCode,
            category: item.inventoryCategory,
            type: item.type,
          }));
          console.log(this.dataSource.data); // Log the populated data
        } else {
          console.error(
            'Expected an array in response.data, but got:',
            response.data,
          );
        }
      },
      (error) => {
        console.error('Failed to fetch inventory:', error); // Error handling
      },
    );
  }

  createNewInventory() {
    const dialogRef = this.dialog.open(NewInventoryDialogComponent, {
      width: '450px',
      data: { userId: this.authService.getCurrentUserId() },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.inventoryService.createInventory(result).subscribe(() => {
          this.refreshInventory(); // Refresh inventory after creation
        });
      }
    });
  }
}
