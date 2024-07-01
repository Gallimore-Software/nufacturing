import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-costs',
  templateUrl: './order-costs.component.html',
  styleUrls: ['./order-costs.component.scss']
})
export class OrderCostsComponent implements OnInit {
  dataSource: any[];
  displayedColumns: string[] = ['property', 'value'];

  constructor() {
    this.dataSource = this.createDataSource();
  }

  ngOnInit(): void {}

  private createDataSource(): any[] {
    return [
      { property: 'NGF Cost (per bottle)', value: '$5.70' },
      { property: 'Customer Sale Price (per bottle)', value: '$8.05' }
    ];
  }
}
