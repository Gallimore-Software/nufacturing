import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiUrl = 'api/dashboard'; // Replace with your actual API endpoint

  constructor() {}

  getKeyMetrics(): Observable<any> {
    return new Observable<[]>();
  }

  getRecentActivity(): Observable<any[]> {
    return new Observable<[]>();
  }

  getAlerts(): Observable<any[]> {
    return new Observable<[]>();
  }
}
