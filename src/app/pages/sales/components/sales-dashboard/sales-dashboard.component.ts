import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { SalesService, KeyMetric, Activity } from '../../sales.service'; // Path might need adjustment based on actual structure

@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.scss'],
})
export class SalesDashboardComponent implements OnInit, AfterViewInit {
  keyMetrics: KeyMetric[] = [];
  recentActivity: Activity[] = [];
  @ViewChild('salesPieChart') salesPieChart!: ElementRef<HTMLCanvasElement>;

  constructor(private salesService: SalesService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.loadKeyMetrics();
    this.loadRecentActivity();
  }

  ngAfterViewInit(): void {
    this.initializeCharts();
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

  initializeCharts(): void {
    if (this.salesPieChart.nativeElement) {
      const ctx = this.salesPieChart.nativeElement.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: this.keyMetrics.map((m) => m.name),
            datasets: [
              {
                data: this.keyMetrics.map((m) => m.value),
                backgroundColor: ['red', 'blue', 'green', 'yellow', 'purple'],
              },
            ],
          },
        });
      }
    }
  }
}
