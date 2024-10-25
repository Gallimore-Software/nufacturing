import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListFormulasService {
  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}/product-development/formulas`;

  getFormulas(): Observable<unknown> {
    return this.http.get(this.apiUrl);
  }

  createFormula(data: unknown): Observable<unknown> {
    return this.http.post(this.apiUrl, data);
  }

  updateFormula(id: string, data: unknown): Observable<unknown> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteFormula(id: string): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
