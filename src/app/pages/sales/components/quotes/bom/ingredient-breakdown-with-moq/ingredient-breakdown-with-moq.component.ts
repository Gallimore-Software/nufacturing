/* eslint-disable no-undef */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalServiceService } from 'src/app/services/global-service.service';

interface IngredientItem {
  item: string;
  qtyNeeded: string;
  cost: string;
  moq: number;
  withMoq: number;
  costQtyOrdered: string;
  costPerBottle: string;
  maxBottlePerMoq: number;
  moqInMg: number;
}

@Component({
  selector: 'app-ingredient-breakdown-with-moq',
  templateUrl: './ingredient-breakdown-with-moq.component.html',
  styleUrls: ['./ingredient-breakdown-with-moq.component.scss'],
})
export class IngredientBreakdownWithMoqComponent implements OnInit {
  breakdownForm: FormGroup;
  dataSource: MatTableDataSource<IngredientItem>;
  displayedColumns: string[] = [
    'item',
    'qtyNeeded',
    'cost',
    'moq',
    'withMoq',
    'costQtyOrdered',
    'costPerBottle',
    'maxBottlePerMoq',
    'moqInMg',
    'actions',
  ];
  totalCostPerBottle: number = 0;
  totalCost: number = 0;

  constructor(
    private fb: FormBuilder,
    private globalService: GlobalServiceService
  ) {
    this.breakdownForm = this.fb.group({
      search: [''],
      items: this.fb.array([]),
    });

    this.dataSource = new MatTableDataSource(this.getItems());
  }

  ngOnInit(): void {
    this.calculateBreakdown();
  }

  getItems(): IngredientItem[] {
    const ingredients = this.globalService.getIngredients();
    const totalBottles = this.globalService.getOrderInfo().launchQty;

    return ingredients.map((ingredient) => {
      const qtyNeeded = this.calculateQtyNeeded(ingredient.perCapsule);
      const cost = parseFloat(ingredient.pricePerKg.replace('$', ''));
      const withMoq = ingredient.moqKg || 0; // Handle case where moqKg might be undefined
      const moqInMg = withMoq * 1000000;
      const maxBottlePerMoq = Math.floor(moqInMg / qtyNeeded);
      const costQtyOrdered = cost * withMoq;
      const costPerBottle = costQtyOrdered / totalBottles;

      return {
        item: ingredient.name || '',
        qtyNeeded: qtyNeeded.toFixed(4),
        cost: `$${cost.toFixed(2)}`,
        moq: withMoq,
        withMoq: withMoq,
        costQtyOrdered: `$${costQtyOrdered.toFixed(2)}`,
        costPerBottle: `$${costPerBottle.toFixed(4)}`,
        maxBottlePerMoq: maxBottlePerMoq,
        moqInMg: moqInMg,
      };
    });
  }

  calculateQtyNeeded(perCapsule: number): number {
    console.log(perCapsule);
    const conversionToKg = 0.1; // Example conversion
    const extraKgOfWaste = 0.01; // Example waste
    return conversionToKg + extraKgOfWaste;
  }

  calculateBreakdown(): void {
    const totalBottles = this.globalService.getOrderInfo().launchQty;
    let totalCostPerBottle = 0;
    let totalCost = 0;

    this.dataSource.data = this.dataSource.data.map((item) => {
      const cost = parseFloat(item.cost.replace('$', ''));
      const withMoq = item.withMoq;
      const costQtyOrdered = cost * withMoq;
      const costPerBottle = costQtyOrdered / totalBottles;

      totalCostPerBottle += costPerBottle;
      totalCost += costQtyOrdered;

      return {
        ...item,
        costQtyOrdered: `$${costQtyOrdered.toFixed(2)}`,
        costPerBottle: `$${costPerBottle.toFixed(4)}`,
      };
    });

    this.totalCostPerBottle = parseFloat(totalCostPerBottle.toFixed(4));
    this.totalCost = parseFloat(totalCost.toFixed(2));
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editItem(item: IngredientItem): void {
    console.log('Edit item:', item);
    // Implement your edit logic here
  }

  deleteItem(item: IngredientItem): void {
    this.dataSource.data = this.dataSource.data.filter((data) => data !== item);
    this.calculateBreakdown();
    console.log('Deleted item:', item);
  }
}
