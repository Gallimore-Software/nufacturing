import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductSkusService {
  private apiUrl = `${environment.apiUrl}/product-development/product-skus`;

  constructor(private http: HttpClient) {}

  getProductSkus(): Observable<unknown> {
    return this.http.get(this.apiUrl);
  }

  createProductSku(productSku: unknown): Observable<unknown> {
    return this.http.post(`${this.apiUrl}`, productSku);
  }

  updateProductSku(id: string, productSku: unknown): Observable<unknown> {
    return this.http.put(`${this.apiUrl}/${id}`, productSku);
  }

  deleteProductSku(id: string): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
