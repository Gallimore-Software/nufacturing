import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../sales.service';

@Component({
  selector: 'app-orders-navigation',
  templateUrl: './orders-navigation.component.html',
  styleUrls: ['./orders-navigation.component.scss'],
})
export class OrdersNavigationComponent implements OnInit {
  summaryMetrics: any = {};

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.loadSummaryMetrics();
  }

  loadSummaryMetrics(): void {
    this.salesService.getOrderSummaryMetrics().subscribe((metrics) => {
      this.summaryMetrics = metrics;
    });
  }
}
