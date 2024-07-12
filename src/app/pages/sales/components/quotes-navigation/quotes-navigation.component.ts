import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../sales.service';

@Component({
  selector: 'app-quotes-navigation',
  templateUrl: './quotes-navigation.component.html',
  styleUrls: ['./quotes-navigation.component.scss'],
})
export class QuotesNavigationComponent implements OnInit {
  summaryMetrics: any = {};

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.loadSummaryMetrics();
  }

  loadSummaryMetrics(): void {
    this.salesService.getQuoteSummaryMetrics().subscribe((metrics) => {
      this.summaryMetrics = metrics;
    });
  }
}
