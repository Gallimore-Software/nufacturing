import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

// Define ProductSku interface here
export interface ProductSku {
  _id: string;
  sku: string;
  productType: string;
  formula: string;
  packagingInfo: string;
  customerInfo: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductSkusService {
  private apiUrl = `${environment.apiUrl}/product-development/product-skus`;

  constructor(private http: HttpClient) {}

  // Fetch all Product SKUs and map them to ProductSku format
  getProductSkus(): Observable<ProductSku[]> {
    return this.http.get<ProductSku[]>(this.apiUrl).pipe(
      map((data: any[]) =>
        data.map((item) => ({
          _id: item._id,
          sku: item.sku,
          productType: item.productType,
          formula: item.formula || '', // Add default empty string if formula is missing
          packagingInfo: item.packagingInfo,
          customerInfo: item.customerInfo,
          status: item.status,
        }))
      )
    );
  }

  createProductSku(productSku: ProductSku): Observable<ProductSku> {
    return this.http.post<ProductSku>(this.apiUrl, productSku);
  }

  updateProductSku(
    id: string,
    productSku: Partial<ProductSku>
  ): Observable<ProductSku> {
    return this.http.put<ProductSku>(`${this.apiUrl}/${id}`, productSku);
  }

  deleteProductSku(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
