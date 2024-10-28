import { Component, OnInit } from '@angular/core';

interface OrderSummaryMetrics {
  totalOrders: number;
  inProcess: number;
  awaitingShipment: number;
  completed: number;
}

@Component({
  selector: 'app-orders-navigation',
  templateUrl: './orders-navigation.component.html',
  styleUrls: ['./orders-navigation.component.scss'],
})
export class OrdersNavigationComponent implements OnInit {
  summaryMetrics: OrderSummaryMetrics = {
    totalOrders: 0,
    inProcess: 0,
    awaitingShipment: 0,
    completed: 0,
  };

  constructor() {}

  ngOnInit(): void {
    this.loadOrderSummaryMetrics();
  }

  loadOrderSummaryMetrics(): void {
    // Example data - replace this with an API call to fetch actual metrics
    this.summaryMetrics = {
      totalOrders: 50,
      inProcess: 20,
      awaitingShipment: 15,
      completed: 15,
    };
  }
}
