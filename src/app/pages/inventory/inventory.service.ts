import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environment/environment';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private apiUrl = `${environment.apiUrl}/inventory`;

  constructor(private http: HttpClient) {}

  // Get all inventory items
  getInventory(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get a specific inventory item by ID
  getInventoryItem(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Create a new inventory item
  addInventoryItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  // Update an existing inventory item by ID
  updateInventoryItem(id: string, item: any): Observable<any> {
    console.log(`Updating inventory item with ID: ${id}`); // Log the ID
    console.log(`API URL: ${this.apiUrl}/${id}`); // Log the full URL
    return this.http.put<any>(`${this.apiUrl}/${id}`, item);
  }

  // Delete an inventory item by ID
  deleteInventoryItem(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  createInventory(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, data);
  }
}
