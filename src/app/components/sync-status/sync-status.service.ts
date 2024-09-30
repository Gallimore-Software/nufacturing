import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SyncStatusService {
  private apiUrl = 'https://your-middleware-api.com/status'; // Update with your actual API URL

  constructor(private http: HttpClient) {}

  getSyncStatus(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
