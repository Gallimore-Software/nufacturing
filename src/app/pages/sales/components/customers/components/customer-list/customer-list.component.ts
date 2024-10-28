import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';

interface Customer {
  name: string;
  status: string;
}

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe((data: any[]) => {
      // Map the response to fit the Customer interface structure if necessary
      this.customers = data.map((item) => ({
        name: item.displayName || item.companyName || 'Unnamed Customer',
        status: item.status || 'Inactive',
      }));
    });
  }
}
