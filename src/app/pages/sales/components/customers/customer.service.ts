import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'http://localhost:3000/api/sales/customers'; // Update to your API URL

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  updateCustomer(id: string, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.apiUrl}/${id}`, customer);
  }

  deleteCustomer(id: string): Observable<Customer> {
    return this.http.delete<Customer>(`${this.apiUrl}/${id}`);
  }
}
