import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormulasService {
  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}/product-development/formulas`;

  getFormulas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createFormula(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateFormula(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteFormula(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
