import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductSkusService {
  private apiUrl = `${environment.apiUrl}/product-development/product-skus`;

  constructor(private http: HttpClient) {}

  getProductSkus(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createProductSku(productSku: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, productSku);
  }

  updateProductSku(id: string, productSku: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, productSku);
  }

  deleteProductSku(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
