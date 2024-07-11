import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {
  private apiUrl = 'api/overview'; // Replace with your actual API endpoint

  constructor() { }

  getKeyMetrics(): Observable<any> {
    return new Observable<[]>;
  }

  getRecentActivity(): Observable<any[]> {
    return new Observable<[]>;
  }

  getAlerts(): Observable<any[]> {
    return new Observable<[]>;
  }
}
