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
  withoutMoq: number;
  costQtyOrdered: string;
  costPerBottle: string;
}

@Component({
  selector: 'app-ingredient-breakdown-without-moq',
  templateUrl: './ingredient-breakdown-without-moq.component.html',
  styleUrls: ['./ingredient-breakdown-without-moq.component.scss'],
})
export class IngredientBreakdownWithoutMoqComponent implements OnInit {
  breakdownForm: FormGroup;
  dataSource: MatTableDataSource<IngredientItem>;

  displayedColumns: string[] = [
    'item',
    'qtyNeeded',
    'cost',
    'moq',
    'withoutMoq',
    'costQtyOrdered',
    'costPerBottle',
    'actions',
  ];
  totalCostPerBottle: number = 0;

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
    this.breakdownForm.get('search')?.valueChanges.subscribe(() => {
      this.applyFilter();
    });

    this.calculateBreakdown();
  }

  getItems(): IngredientItem[] {
    const ingredients = this.globalService.getIngredients();
    const orderInfo = this.globalService.getOrderInfo();
    const totalBottles = orderInfo.launchQty;

    return ingredients.map((ingredient) => {
      const qtyNeeded = this.calculateQtyNeeded(ingredient.perCapsule);
      const cost = parseFloat(ingredient.pricePerKg.replace('$', ''));
      const withoutMoq = this.calculateWithoutMoq(qtyNeeded);

      return {
        item: ingredient.name || '', // Default to empty string if `name` is undefined
        qtyNeeded: qtyNeeded.toFixed(4),
        cost: `$${cost.toFixed(2)}`,
        moq: ingredient.moqKg || 0, // Default to 0 if `moqKg` is undefined
        withoutMoq: withoutMoq,
        costQtyOrdered: `$${(cost * withoutMoq).toFixed(2)}`,
        costPerBottle: ((cost * withoutMoq) / totalBottles).toFixed(4),
      };
    });
  }

  calculateQtyNeeded(perCapsule: number): number {
    console.log(perCapsule);
    const conversionToKg = 0.1; // Example value
    const extraKgOfWaste = 0.01; // Example value
    return conversionToKg + extraKgOfWaste;
  }

  calculateWithoutMoq(qtyNeeded: number): number {
    return Math.ceil(qtyNeeded);
  }

  calculateBreakdown(): void {
    const totalBottles = this.globalService.getOrderInfo().launchQty;
    let totalCostPerBottle = 0;

    this.dataSource.data = this.dataSource.data.map((item: IngredientItem) => {
      const cost = parseFloat(item.cost.replace('$', ''));
      const withoutMoq = item.withoutMoq;
      const costQtyOrdered = cost * withoutMoq;
      const costPerBottle = costQtyOrdered / totalBottles;

      totalCostPerBottle += costPerBottle;

      return {
        ...item,
        costQtyOrdered: `$${costQtyOrdered.toFixed(2)}`,
        costPerBottle: `$${costPerBottle.toFixed(4)}`,
      };
    });

    this.totalCostPerBottle = parseFloat(totalCostPerBottle.toFixed(4));
  }

  applyFilter(event?: Event): void {
    const filterValue = event
      ? (event.target as HTMLInputElement).value
      : this.breakdownForm.get('search')?.value || '';
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSubmit(): void {
    console.log('Form Submitted', this.breakdownForm.value);
  }

  editIngredient(item: IngredientItem): void {
    // Implement the logic to edit the ingredient.
    console.log('Edit ingredient', item);
  }

  deleteIngredient(item: IngredientItem): void {
    // Implement the logic to delete the ingredient.
    console.log('Delete ingredient', item);
    this.dataSource.data = this.dataSource.data.filter((data) => data !== item);
    this.calculateBreakdown();
  }
}
