import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthService } from 'src/app/components/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { CustomerDetailsDialogComponent } from './components/customer-details-dialog/customer-details-dialog.component';

interface Customer {
  _id: string;
  companyName: string;
  displayName: string;
  primaryContact: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  website: string;
  estimate?: number;
}

@Component({
  selector: 'customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'companyName',
    'displayName',
    'primaryContact',
    'email',
    'phone',
    'website',
    'actions',
  ];
  dataSource: MatTableDataSource<Customer> = new MatTableDataSource();
  isAdminOrManager: boolean = false;
  totalCustomers: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private customerService: CustomerService,
    private authService: AuthService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.totalCustomers = data.length; // Calculate total customers
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

  createNewCustomer() {
    // const dialogRef = this.dialog.open(NewCustomerDialogComponent, {
    //   width: '450px',
    // });
    // dialogRef.afterClosed().subscribe((result: Customer | undefined) => {
    //   if (result) {
    //     this.customerService.createCustomer(result).subscribe((newCustomer) => {
    //       this.dataSource.data = [...this.dataSource.data, newCustomer];
    //     });
    //   }
    // });
  }

  editCustomer(customer: Customer) {
    // const dialogRef = this.dialog.open(NewCustomerDialogComponent, {
    //   width: '450px',
    //   data: customer
    // });
    // dialogRef.afterClosed().subscribe((result: Customer | undefined) => {
    //   if (result) {
    //     this.customerService.updateCustomer(customer._id, result).subscribe(
    //       () => this.refreshCustomerData(),
    //       (error) => console.error('Error updating customer:', error)
    //     );
    //   }
    // });
  }

  deleteCustomer(customer: Customer) {
    this.customerService.deleteCustomer(customer._id).subscribe(
      () => this.refreshCustomerData(),
      (error) => console.error('Error deleting customer:', error),
    );
  }

  refreshCustomerData() {
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
      this.dataSource.data = data;
      this.totalCustomers = data.length; // Update total customers
    });
  }

  openCustomerDetails(customer: Customer) {
    this.dialog.open(CustomerDetailsDialogComponent, {
      width: '450px',
      data: customer,
    });
  }
}
