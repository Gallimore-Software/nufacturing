import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export interface Vendor {
  _id?: string; // Optional for new vendors
  displayName: string;
  email: string; // Additional fields as needed
  // Add other vendor fields here
}

@Injectable({
  providedIn: 'root',
})
export class VendorsService {
  private apiUrl = `${environment.apiUrl}/vendor`;

  constructor(private http: HttpClient) {}

  // Get all vendors
  getVendors(): Observable<ApiResponse<Vendor[]>> {
    return this.http.get<ApiResponse<Vendor[]>>(this.apiUrl);
  }

  // Get a specific vendor by ID
  getVendor(id: string): Observable<ApiResponse<Vendor>> {
    return this.http.get<ApiResponse<Vendor>>(`${this.apiUrl}/${id}`);
  }

  // Create a new vendor
  addVendor(vendor: Vendor): Observable<ApiResponse<Vendor>> {
    return this.http.post<ApiResponse<Vendor>>(this.apiUrl, vendor);
  }

  // Update an existing vendor by ID
  updateVendor(id: string, vendor: Vendor): Observable<ApiResponse<Vendor>> {
    return this.http.put<ApiResponse<Vendor>>(`${this.apiUrl}/${id}`, vendor);
  }

  // Delete a vendor by ID
  deleteVendor(id: string): Observable<ApiResponse<Vendor>> {
    return this.http.delete<ApiResponse<Vendor>>(`${this.apiUrl}/${id}`);
  }
}
