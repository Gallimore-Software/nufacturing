import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-ingredient-breakdown-without-moq',
  templateUrl: './ingredient-breakdown-without-moq.component.html',
  styleUrls: ['./ingredient-breakdown-without-moq.component.scss'],
})
export class IngredientBreakdownWithoutMoqComponent implements OnInit {
  breakdownForm: FormGroup;
  dataSource: MatTableDataSource<any>;

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
    private globalService: GlobalServiceService,
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

  get items(): any[] {
    return this.globalService.getIngredients();
  }

  getItems(): any[] {
    const ingredients = this.globalService.getIngredients();
    const orderInfo = this.globalService.getOrderInfo();
    const totalBottles = orderInfo.launchQty;

    return ingredients.map((ingredient) => {
      const qtyNeeded = this.calculateQtyNeeded(ingredient.perCapsule);
      const cost = parseFloat(ingredient.pricePerKg.replace('$', ''));
      const withoutMoq = this.calculateWithoutMoq(qtyNeeded);

      return {
        item: ingredient.name,
        qtyNeeded: qtyNeeded.toFixed(4),
        cost: `$${cost.toFixed(2)}`,
        moq: ingredient.moqKg,
        withoutMoq: withoutMoq,
        costQtyOrdered: `$${(cost * withoutMoq).toFixed(2)}`,
        costPerBottle: (cost * withoutMoq) / totalBottles,
      };
    });
  }

  calculateQtyNeeded(perCapsule: number): number {
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

    this.dataSource.data.forEach((item) => {
      const cost = parseFloat(item.cost.replace('$', ''));
      const withoutMoq = item.withoutMoq;
      const costQtyOrdered = cost * withoutMoq;
      const costPerBottle = costQtyOrdered / totalBottles;

      item.costQtyOrdered = `$${costQtyOrdered.toFixed(2)}`;
      item.costPerBottle = `$${costPerBottle.toFixed(4)}`;

      totalCostPerBottle += costPerBottle;
    });

    this.totalCostPerBottle = totalCostPerBottle;
  }

  applyFilter(event?: Event) {
    const filterValue = event
      ? (event.target as HTMLInputElement).value
      : this.breakdownForm.get('search')?.value || '';
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSubmit(): void {
    console.log('Form Submitted', this.breakdownForm.value);
  }

  editIngredient(item: any): void {
    // Implement the logic to edit the ingredient.
    console.log('Edit ingredient', item);
  }

  deleteIngredient(item: any): void {
    // Implement the logic to delete the ingredient.
    console.log('Delete ingredient', item);
    this.dataSource.data = this.dataSource.data.filter((data) => data !== item);
    this.calculateBreakdown();
  }
}
