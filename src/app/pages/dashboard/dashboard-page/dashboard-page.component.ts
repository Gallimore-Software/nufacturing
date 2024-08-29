import { Component, OnInit } from '@angular/core';
import { DashboardMockService } from '../dashboard-mock.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  keyMetrics: any[] = [];
  recentActivity: any[] = [];
  alerts: any[] = [];

  constructor(private dashboardService: DashboardMockService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.loadKeyMetrics();
    this.loadRecentActivity();
    this.loadAlerts();
    this.initializeCharts();
  }

  loadKeyMetrics(): void {
    this.dashboardService.getKeyMetrics().subscribe((metrics) => {
      // Assuming the metrics come as an object, transform it into an array for the template
      this.keyMetrics = [
        { title: 'Total Orders', value: metrics.totalOrders },
        { title: 'Orders In Process', value: metrics.ordersInProcess },
        { title: 'Total Quotes', value: metrics.totalQuotes },
        { title: 'Active Quotes', value: metrics.activeQuotes },
        { title: 'Expired Quotes', value: metrics.expiredQuotes },
      ];
    });
  }

  loadRecentActivity(): void {
    this.dashboardService.getRecentActivity().subscribe((activity) => {
      this.recentActivity = activity;
    });
  }

  loadAlerts(): void {
    this.dashboardService.getAlerts().subscribe((alerts) => {
      this.alerts = alerts;
    });
  }
  initializeCharts(): void {
    const salesPurchaseCanvas = document.getElementById(
      'salesPurchaseChart',
    ) as HTMLCanvasElement;
    const salesPurchaseCtx = salesPurchaseCanvas?.getContext('2d');

    if (salesPurchaseCtx) {
      new Chart(salesPurchaseCtx, {
        type: 'bar',
        data: {
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          datasets: [
            {
              label: 'Sales',
              data: [
                30000, 40000, 35000, 50000, 45000, 60000, 70000, 80000, 75000,
                90000, 85000, 100000,
              ],
              backgroundColor: 'rgba(54, 162, 235, 0.7)', // High contrast
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              barPercentage: 0.6,
              categoryPercentage: 0.8,
            },
            {
              label: 'Purchase',
              data: [
                20000, 30000, 25000, 40000, 35000, 50000, 60000, 70000, 65000,
                80000, 75000, 90000,
              ],
              backgroundColor: 'rgba(75, 192, 192, 0.7)', // High contrast
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              barPercentage: 0.6,
              categoryPercentage: 0.8,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    const orderSummaryCanvas = document.getElementById(
      'orderSummaryChart',
    ) as HTMLCanvasElement;
    const orderSummaryCtx = orderSummaryCanvas?.getContext('2d');

    if (orderSummaryCtx) {
      new Chart(orderSummaryCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Ordered',
              data: [1000, 2000, 1500, 3000, 2500, 4000],
              borderColor: 'rgba(255, 159, 64, 1)', // High contrast
              backgroundColor: 'rgba(255, 159, 64, 0.2)',
              fill: true,
            },
            {
              label: 'Delivered',
              data: [800, 1800, 1200, 2500, 2300, 3500],
              borderColor: 'rgba(153, 102, 255, 1)', // High contrast
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }
}
