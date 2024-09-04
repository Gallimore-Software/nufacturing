import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardMockService {
  getKeyMetrics(): Observable<any> {
    return of({
      totalOrders: 832,
      ordersInProcess: 200,
      totalQuotes: 450,
      activeQuotes: 300,
      expiredQuotes: 50,
    });
  }

  getRecentActivity(): Observable<any[]> {
    return of([
      { details: 'Order #1234 - Status: In Process', date: new Date() },
      { details: 'Quote #5678 - Status: Active', date: new Date() },
      { details: 'Order #4321 - Status: Completed', date: new Date() },
      { details: 'Quote #8765 - Status: Expired', date: new Date() },
    ]);
  }

  getAlerts(): Observable<any[]> {
    return of([
      { message: 'Payment overdue for Order #1234', date: new Date() },
      { message: 'New Quote #5678 awaiting approval', date: new Date() },
      { message: 'Inventory low for Product XYZ', date: new Date() },
      { message: 'Order #4321 delivered successfully', date: new Date() },
    ]);
  }
}
