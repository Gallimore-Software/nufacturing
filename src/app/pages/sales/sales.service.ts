import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  constructor() {}

  getKeyMetrics(): Observable<any> {
    return of({
      totalOrders: 832,
      ordersInProcess: 200,
      ordersAwaitingShipment: 150,
      ordersCompleted: 482,
      totalQuotes: 450,
      activeQuotes: 300,
      expiredQuotes: 50,
    });
  }

  getRecentActivity(): Observable<any[]> {
    return of([
      'Order #1234 - Status: In Process',
      'Quote #5678 - Status: Active',
      'Order #4321 - Status: Completed',
      'Quote #8765 - Status: Expired',
    ]);
  }

  getOrderSummaryMetrics(): Observable<any> {
    return of({
      totalOrders: 832,
      inProcess: 200,
      awaitingShipment: 150,
      completed: 482,
    });
  }

  getQuoteSummaryMetrics(): Observable<any> {
    return of({
      totalQuotes: 450,
      active: 300,
      expired: 50,
    });
  }
}
