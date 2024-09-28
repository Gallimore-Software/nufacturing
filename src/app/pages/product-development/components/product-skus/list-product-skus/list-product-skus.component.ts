import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthService } from 'src/app/components/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductSkusService } from 'src/app/services/product-skus.service';
import { CreateProductSkusComponent } from '../create-product-skus/create-product-skus.component';
import { ConfirmDialogComponent } from '../../../../../components/confirm-dialog/confirm-dialog.component';

export interface ProductSku {
  _id: string;
  sku: string;
  productType: string;
  formula: string;
  packagingInfo: string;
  customerInfo: string;
  status: string;
}

@Component({
  selector: 'app-product-skus',
  templateUrl: './list-product-skus.component.html',
  styleUrls: ['./list-product-skus.component.scss'],
})
export class ListProductSkusComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'sku',
    'productType',
    'formula',
    'packagingInfo',
    'customerInfo',
    'status',
    'actions',
  ];
  dataSource: MatTableDataSource<ProductSku> = new MatTableDataSource();
  isAdminOrManager: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private productSkusService: ProductSkusService,
    private authService: AuthService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.refreshProductSkus();

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

  createNewProductSku() {
    const dialogRef = this.dialog.open(CreateProductSkusComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: ProductSku | undefined) => {
      if (result) {
        this.productSkusService
          .createProductSku(result)
          .subscribe((newProductSku: any) => {
            this.dataSource.data = [
              ...this.dataSource.data,
              { _id: newProductSku._id, ...newProductSku },
            ];
          });
      }
    });
  }
  editProductSkuItem(item: ProductSku) {
    const dialogRef = this.dialog.open(CreateProductSkusComponent, {
      width: '800px',
      data: item,
    });

    dialogRef.afterClosed().subscribe((result: ProductSku | undefined) => {
      if (result) {
        this.productSkusService
          .updateProductSku(item._id, result)
          .subscribe(() => {
            this.refreshProductSkus();
          });
      }
    });
  }

  refreshProductSkus() {
    this.productSkusService.getProductSkus().subscribe((data: ProductSku[]) => {
      this.dataSource.data = data;
      console.log(data);
    });
  }

  deleteProductSkuItem(item: ProductSku) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '700px',
      data: {
        message: `Are you sure you want to delete the product SKU ${item.sku}?`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.productSkusService.deleteProductSku(item._id).subscribe(() => {
          this.refreshProductSkus();
        });
      }
    });
  }
}
