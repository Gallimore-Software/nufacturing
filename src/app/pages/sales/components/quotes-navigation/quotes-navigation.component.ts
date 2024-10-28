import { Component, OnInit } from '@angular/core';

interface SummaryMetrics {
  totalQuotes: number;
  active: number;
  expired: number;
}

@Component({
  selector: 'app-quotes-navigation',
  templateUrl: './quotes-navigation.component.html',
  styleUrls: ['./quotes-navigation.component.scss'],
})
export class QuotesNavigationComponent implements OnInit {
  summaryMetrics: SummaryMetrics = {
    totalQuotes: 0,
    active: 0,
    expired: 0,
  };

  constructor() {}

  ngOnInit(): void {
    // You would normally fetch this data from a service
    this.loadSummaryMetrics();
  }

  loadSummaryMetrics(): void {
    // Simulating an API call to fetch summary metrics
    this.summaryMetrics = {
      totalQuotes: 25, // example data
      active: 18,
      expired: 7,
    };
  }
}
