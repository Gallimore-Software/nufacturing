import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SyncStatus {
  id: string;
  status: string;
  lastSync: Date;
  message?: string; // Optional field
}

@Injectable({
  providedIn: 'root',
})
export class SyncStatusService {
  private apiUrl = 'https://your-middleware-api.com/status'; // Update with your actual API URL

  constructor(private http: HttpClient) {}

  getSyncStatus(): Observable<SyncStatus[]> {
    return this.http.get<SyncStatus[]>(this.apiUrl);
  }
}
