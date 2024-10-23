import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
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

  private handleError(error: HttpErrorResponse) {
    // Handle the error according to your needs
    console.error('Server Error:', error);
    return throwError(
      () => new Error('Error occurred; please try again later.')
    );
  }

  // Get all inventory items
  getInventory(): Observable<ApiResponse<InventoryItem[]>> {
    return this.http
      .get<ApiResponse<InventoryItem[]>>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  // Get a specific inventory item by ID
  getInventoryItem(id: string): Observable<ApiResponse<InventoryItem>> {
    return this.http
      .get<ApiResponse<InventoryItem>>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Create a new inventory item
  addInventoryItem(
    item: InventoryItem
  ): Observable<ApiResponse<InventoryItem>> {
    return this.http
      .post<ApiResponse<InventoryItem>>(this.apiUrl, item)
      .pipe(catchError(this.handleError));
  }

  // Update an existing inventory item by ID
  updateInventoryItem(
    id: string,
    item: InventoryItem
  ): Observable<ApiResponse<InventoryItem>> {
    return this.http
      .put<ApiResponse<InventoryItem>>(`${this.apiUrl}/${id}`, item)
      .pipe(catchError(this.handleError));
  }

  // Check if SKU already exists
  checkSkuExists(sku: string): Observable<boolean> {
    return this.http
      .get<boolean>(`${this.apiUrl}/check-sku/${sku}`)
      .pipe(catchError(this.handleError));
  }

  // Delete an inventory item by ID
  deleteInventoryItem(id: string): Observable<ApiResponse<InventoryItem>> {
    return this.http
      .delete<ApiResponse<InventoryItem>>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Method to filter inventory items by type
  getInventoryByType(type: string): Observable<ApiResponse<InventoryItem[]>> {
    console.log('hit inventory.service.ts');
    return this.http
      .get<ApiResponse<InventoryItem[]>>(`${this.apiUrl}`)
      .pipe(catchError(this.handleError));
  }

  createInventory(data: InventoryItem): Observable<ApiResponse<InventoryItem>> {
    return this.http
      .post<ApiResponse<InventoryItem>>(this.apiUrl, data)
      .pipe(catchError(this.handleError));
  }
}
