import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface QualityCheck {
  checkName: string;
  result: string;
  checkedBy: string;
  checkedAt: Date;
}

export interface BatchRecord {
  _id: string;
  batchNumber: string;
  productSKU: string;
  formula: string;
  productionDate: Date;
  expirationDate: Date;
  productionLine: string;
  shift: string;
  quantityProduced: number;
  status: string;
  operator: string;
  qualityChecks: QualityCheck[];
}

@Injectable({
  providedIn: 'root',
})
export class BatchRecordsService {
  private apiUrl = `${environment.apiUrl}/quality-audits/batch-records`;

  constructor(private http: HttpClient) {}

  // Fetch all batch records
  getBatchRecords(): Observable<BatchRecord[]> {
    return this.http.get<BatchRecord[]>(this.apiUrl);
  }

  // Create a new batch record
  createBatchRecord(batchRecord: BatchRecord): Observable<BatchRecord> {
    return this.http.post<BatchRecord>(this.apiUrl, batchRecord);
  }

  // Update an existing batch record
  updateBatchRecord(
    id: string,
    batchRecord: Partial<BatchRecord>
  ): Observable<BatchRecord> {
    return this.http.put<BatchRecord>(`${this.apiUrl}/${id}`, batchRecord);
  }

  // Delete a batch record
  deleteBatchRecord(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Fetch batch record details by ID (optional if you want a detailed view endpoint)
  getBatchRecordById(id: string): Observable<BatchRecord> {
    return this.http.get<BatchRecord>(`${this.apiUrl}/${id}`);
  }
}
