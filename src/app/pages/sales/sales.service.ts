import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Export the interfaces to make them accessible in other files.
export interface KeyMetric {
  name: string;
  value: number;
}

export interface Activity {
  description: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  constructor() {}

  getKeyMetrics(): Observable<KeyMetric[]> {
    return of([
      { name: 'Total Orders', value: 832 },
      { name: 'Orders In Process', value: 200 },
      { name: 'Orders Awaiting Shipment', value: 150 },
      { name: 'Orders Completed', value: 482 },
      { name: 'Total Quotes', value: 450 },
      { name: 'Active Quotes', value: 300 },
      { name: 'Expired Quotes', value: 50 },
    ]);
  }

  getRecentActivity(): Observable<Activity[]> {
    return of([
      { description: 'Order #1234', status: 'In Process' },
      { description: 'Quote #5678', status: 'Active' },
      { description: 'Order #4321', status: 'Completed' },
      { description: 'Quote #8765', status: 'Expired' },
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
