import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class BatchRecordsService {
  private apiUrl = `${environment.apiUrl}/quality-audits/batch-records`;

  constructor(private http: HttpClient) {}

  // Fetch all batch records
  getBatchRecords(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Create a new batch record
  createBatchRecord(batchRecord: any): Observable<any> {
    return this.http.post(this.apiUrl, batchRecord);
  }

  // Update an existing batch record
  updateBatchRecord(id: string, batchRecord: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, batchRecord);
  }

  // Delete a batch record
  deleteBatchRecord(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Fetch batch record details by ID (optional if you want a detailed view endpoint)
  getBatchRecordById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
