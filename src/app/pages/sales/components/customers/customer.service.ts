import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'http://localhost:3000/api/sales/customers'; // Update to your API URL

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<unknown[]> {
    return this.http.get<unknown[]>(this.apiUrl);
  }

  createCustomer(customer: unknown): Observable<unknown> {
    return this.http.post<unknown>(this.apiUrl, customer);
  }

  updateCustomer(id: string, customer: unknown): Observable<unknown> {
    return this.http.put<unknown>(`${this.apiUrl}/${id}`, customer);
  }

  deleteCustomer(id: string): Observable<unknown> {
    return this.http.delete<unknown>(`${this.apiUrl}/${id}`);
  }
}
