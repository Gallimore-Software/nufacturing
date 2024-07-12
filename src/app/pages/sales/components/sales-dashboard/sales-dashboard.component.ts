import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../sales.service';

@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.scss'],
})
export class SalesDashboardComponent implements OnInit {
  keyMetrics: any = {};
  recentActivity: any[] = [];

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.loadKeyMetrics();
    this.loadRecentActivity();
  }

  loadKeyMetrics(): void {
    this.salesService.getKeyMetrics().subscribe((metrics) => {
      this.keyMetrics = metrics;
    });
  }

  loadRecentActivity(): void {
    this.salesService.getRecentActivity().subscribe((activity) => {
      this.recentActivity = activity;
    });
  }
}
