import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface Formula {
  _id: string;
  name: string;
  code: string;
  productType: string;
  unitOfMeasurement: string;
  activeIngredients: Ingredient[];
  inactiveIngredients: Ingredient[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Ingredient {
  name: string;
  perUnit: number;
  // Add other properties as needed
}

@Injectable({
  providedIn: 'root',
})
export class FormulasService {
  private apiUrl = `${environment.apiUrl}/product-development/formulas`;

  constructor(private http: HttpClient) {}

  getFormulas(): Observable<Formula[]> {
    return this.http.get<Formula[]>(this.apiUrl);
  }

  createFormula(data: Formula): Observable<Formula> {
    return this.http.post<Formula>(this.apiUrl, data);
  }

  updateFormula(id: string, data: Partial<Formula>): Observable<Formula> {
    return this.http.put<Formula>(`${this.apiUrl}/${id}`, data);
  }

  deleteFormula(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
