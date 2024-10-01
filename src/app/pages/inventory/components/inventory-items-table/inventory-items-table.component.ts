import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Input,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { InventoryItem } from '../../inventory-item.model';
import { InventoryService } from 'src/app/pages/inventory/inventory.service';
import { AuthService } from 'src/app/components/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { NewInventoryDialogComponent } from '../new-inventory-dialog/new-inventory-dialog.component';

@Component({
  selector: 'inventory-inventory-items-table',
  templateUrl: './inventory-items-table.component.html',
  styleUrls: ['./inventory-items-table.component.scss'],
})
export class InventoryItemsTableComponent implements OnInit, AfterViewInit {
  @Input() dataSource: MatTableDataSource<InventoryItem> =
    new MatTableDataSource();
  @Input() displayedColumns: string[] = [];
  isAdminOrManager: boolean = false;

  categories: string[] = [
    'All Inventory',
    'Raw Materials',
    'Components',
    'Work in Progress',
    'Finished Goods',
  ];
  selectedCategory: string = 'All Inventory';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private inventoryService: InventoryService,
    private authService: AuthService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.initializeTable();
    this.checkUserRole();
  }

  ngAfterViewInit() {
    this.setTableProperties();
  }

  private initializeTable() {
    this.setTableProperties();
  }

  private checkUserRole() {
    this.authService.userRole.subscribe((role: string | null) => {
      this.isAdminOrManager = role === 'admin' || role === 'manager';
    });
  }

  private setTableProperties() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();
  }

  filterByCategory() {
    this.dataSource.filter =
      this.selectedCategory === 'All Inventory' ? '' : this.selectedCategory;
  }

  createNewInventory() {
    const dialogRef = this.dialog.open(NewInventoryDialogComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((result: InventoryItem | undefined) => {
      if (result) {
        this.inventoryService
          .createInventory(result)
          .subscribe((newInventory) => {
            this.updateDataSourceWithNewItems(newInventory);
          });
      }
    });
  }

  private updateDataSourceWithNewItems(newInventory: any) {
    const updatedItems = newInventory.items.map((item: any) => ({
      ...item,
      category: newInventory.category,
      // Omit subCategory
    }));
    this.dataSource.data = [...this.dataSource.data, ...updatedItems];
  }

  editInventoryItem(item: InventoryItem) {
    this.inventoryService.getInventory().subscribe((data: any) => {
      const parentItem = this.findParentItem(data, item);

      if (parentItem) {
        const dialogRef = this.dialog.open(NewInventoryDialogComponent, {
          width: '450px',
          data: item,
        });

        dialogRef
          .afterClosed()
          .subscribe((result: InventoryItem | undefined) => {
            if (result) {
              this.updateInventoryItem(parentItem._id, result);
            }
          });
      } else {
        console.error('Parent item not found for item ID:', item._id);
      }
    });
  }

  private findParentItem(data: any, item: InventoryItem) {
    return data.find((inv: any) =>
      inv.items.some((i: any) => i._id === item._id),
    );
  }

  private updateInventoryItem(parentId: string, item: InventoryItem) {
    this.inventoryService.updateInventoryItem(parentId, item).subscribe(
      () => this.refreshInventory(),
      (error) => console.error('Error updating inventory item:', error),
    );
  }

  deleteInventoryItem(item: InventoryItem) {
    this.inventoryService.getInventory().subscribe((data: any) => {
      const parentItem = this.findParentItem(data, item);

      if (parentItem) {
        this.inventoryService.deleteInventoryItem(parentItem._id).subscribe(
          () => this.refreshInventory(),
          (error) => console.error('Error deleting inventory item:', error),
        );
      } else {
        console.error('Parent item not found for item ID:', item._id);
      }
    });
  }

  refreshInventory() {
    this.inventoryService.getInventory().subscribe((data: any) => {
      const items = this.flattenInventoryItems(data);
      this.dataSource.data = items;
      this.setTableProperties();
    });
  }

  private flattenInventoryItems(data: any) {
    return data.flatMap((category: any) =>
      category.items.map((item: any) => ({
        ...item,
        category: category.category,
      })),
    );
  }
}
