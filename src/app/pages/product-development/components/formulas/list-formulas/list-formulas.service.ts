import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

// Define the Formula interface
export interface Formula {
  _id: string;
  name: string;
  description?: string;
  // Add any other relevant fields here
}

@Injectable({
  providedIn: 'root',
})
export class ListFormulasService {
  private apiUrl = `${environment.apiUrl}/product-development/formulas`;

  constructor(private http: HttpClient) {}

  // Fetch all formulas
  getFormulas(): Observable<Formula[]> {
    return this.http.get<Formula[]>(this.apiUrl);
  }

  // Create a new formula
  createFormula(data: Formula): Observable<Formula> {
    return this.http.post<Formula>(this.apiUrl, data);
  }

  // Update an existing formula
  updateFormula(id: string, data: Partial<Formula>): Observable<Formula> {
    return this.http.put<Formula>(`${this.apiUrl}/${id}`, data);
  }

  // Delete a formula by ID
  deleteFormula(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
