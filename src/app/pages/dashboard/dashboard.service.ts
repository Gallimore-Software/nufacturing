import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiUrl = 'api/dashboard'; // Replace with your actual API endpoint

  constructor() {}

  getKeyMetrics(): Observable<unknown> {
    return new Observable<[]>();
  }

  getRecentActivity(): Observable<unknown[]> {
    return new Observable<[]>();
  }

  getAlerts(): Observable<unknown[]> {
    return new Observable<[]>();
  }
}
