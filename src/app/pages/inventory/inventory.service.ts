import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { InventoryItem } from './inventory-item.model'; // Adjust the path as needed

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private apiUrl = `${environment.apiUrl}/inventory`;

  constructor(private http: HttpClient) {}

  // Get all inventory items
  getInventory(): Observable<ApiResponse<InventoryItem[]>> {
    return this.http.get<ApiResponse<InventoryItem[]>>(this.apiUrl);
  }

  // Get a specific inventory item by ID
  getInventoryItem(id: string): Observable<ApiResponse<InventoryItem>> {
    return this.http.get<ApiResponse<InventoryItem>>(`${this.apiUrl}/${id}`);
  }

  // Create a new inventory item
  addInventoryItem(
    item: InventoryItem,
  ): Observable<ApiResponse<InventoryItem>> {
    return this.http.post<ApiResponse<InventoryItem>>(this.apiUrl, item);
  }

  // Update an existing inventory item by ID
  updateInventoryItem(
    id: string,
    item: InventoryItem,
  ): Observable<ApiResponse<InventoryItem>> {
    return this.http.put<ApiResponse<InventoryItem>>(
      `${this.apiUrl}/${id}`,
      item,
    );
  }

  // Delete an inventory item by ID
  deleteInventoryItem(id: string): Observable<ApiResponse<InventoryItem>> {
    return this.http.delete<ApiResponse<InventoryItem>>(`${this.apiUrl}/${id}`);
  }

  createInventory(data: InventoryItem): Observable<ApiResponse<InventoryItem>> {
    return this.http.post<ApiResponse<InventoryItem>>(this.apiUrl, data);
  }
}
