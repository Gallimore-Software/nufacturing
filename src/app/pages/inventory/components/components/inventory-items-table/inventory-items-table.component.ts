import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-items-table',
  templateUrl: './inventory-items-table.component.html',
  styleUrls: ['./inventory-items-table.component.scss'],
})
export class InventoryItemsTableComponent implements OnInit {
  @Input() dataSource: unknown[] = [];
  @Input() totalItems: number = 0;

  displayedColumns: string[] = [
    'name',
    'sku',
    'inStock',
    'price',
    'status',
    'actions',
  ];

  ngOnInit(): void {}
}
