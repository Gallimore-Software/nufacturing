// customer.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor() {}

  getCustomerMetrics(): Observable<any> {
    return of({
      totalCustomers: 120,
      activeCustomers: 100,
      inactiveCustomers: 20,
    });
  }

  getCustomerList(): Observable<any[]> {
    return of([
      { id: 1, name: 'Customer A', status: 'Active' },
      { id: 2, name: 'Customer B', status: 'Inactive' },
      { id: 3, name: 'Customer C', status: 'Active' },
      { id: 4, name: 'Customer D', status: 'Active' },
    ]);
  }

  getCustomerDetails(id: number): Observable<any> {
    const customers = [
      {
        id: 1,
        companyName: 'Customer A',
        companyCode: 'CUSTA',
        primaryContact: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@customer.com',
          phone: '123-456-7890',
        },
        complianceContact: {
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane.doe@customer.com',
          phone: '098-765-4321',
        },
        accountingContact: {
          firstName: 'Jim',
          lastName: 'Beam',
          email: 'jim.beam@customer.com',
          phone: '111-222-3333',
        },
        companyWebsite: 'https://customerA.com',
        businessAddress: {
          line1: '123 Main St',
          line2: 'Suite 100',
          city: 'Hometown',
          state: 'CA',
          zip: '90210',
        },
        fulfillmentAddress: {
          line1: '123 Main St',
          line2: 'Suite 100',
          city: 'Hometown',
          state: 'CA',
          zip: '90210',
        },
        customerQualificationForm: 'Qualified',
        brands: [
          {
            brandCode: 'BR1',
            brandPhoto: 'https://via.placeholder.com/150',
            brandWebsite: 'https://brand1.com',
          },
        ],
      },
      {
        id: 2,
        companyName: 'Customer B',
        companyCode: 'CUSTB',
        primaryContact: {
          firstName: 'Alice',
          lastName: 'Wonder',
          email: 'alice.wonder@customer.com',
          phone: '234-567-8901',
        },
        complianceContact: {
          firstName: 'Bob',
          lastName: 'Builder',
          email: 'bob.builder@customer.com',
          phone: '987-654-3210',
        },
        accountingContact: {
          firstName: 'Charlie',
          lastName: 'Chaplin',
          email: 'charlie.chaplin@customer.com',
          phone: '222-333-4444',
        },
        companyWebsite: 'https://customerB.com',
        businessAddress: {
          line1: '456 Market St',
          line2: '',
          city: 'AnotherTown',
          state: 'TX',
          zip: '75001',
        },
        fulfillmentAddress: {
          line1: '456 Market St',
          line2: '',
          city: 'AnotherTown',
          state: 'TX',
          zip: '75001',
        },
        customerQualificationForm: 'Qualified',
        brands: [
          {
            brandCode: 'BR2',
            brandPhoto: 'https://via.placeholder.com/150',
            brandWebsite: 'https://brand2.com',
          },
        ],
      },
    ];

    const customer = customers.find((c) => c.id === id);
    return of(customer);
  }
}
