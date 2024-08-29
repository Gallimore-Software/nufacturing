import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-ingredient-breakdown-with-moq',
  templateUrl: './ingredient-breakdown-with-moq.component.html',
  styleUrls: ['./ingredient-breakdown-with-moq.component.scss'],
})
export class IngredientBreakdownWithMoqComponent implements OnInit {
  breakdownForm: FormGroup;
  dataSource: MatTableDataSource<any>;
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
    private globalService: GlobalServiceService,
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

  get items(): any[] {
    return this.globalService.getIngredients();
  }

  getItems(): any[] {
    const items = this.items.map((ingredient) => {
      const qtyNeeded = this.calculateQtyNeeded(ingredient.perCapsule);
      const cost = parseFloat(ingredient.pricePerKg.replace('$', ''));
      const withMoq = ingredient.moqKg;
      const moqInMg = withMoq * 1000000;
      const maxBottlePerMoq = Math.floor(moqInMg / qtyNeeded);
      const costQtyOrdered = cost * withMoq;
      const costPerBottle =
        costQtyOrdered / this.globalService.getOrderInfo().launchQty;

      return {
        item: ingredient.name,
        qtyNeeded: qtyNeeded.toFixed(4),
        cost: `$${cost.toFixed(2)}`,
        moq: ingredient.moqKg,
        withMoq: withMoq,
        costQtyOrdered: `$${costQtyOrdered.toFixed(2)}`,
        costPerBottle: `$${costPerBottle.toFixed(4)}`,
        maxBottlePerMoq: maxBottlePerMoq,
        moqInMg: moqInMg,
      };
    });

    return items;
  }

  calculateQtyNeeded(perCapsule: number): number {
    const conversionToKg = 0.1; // Example value
    const extraKgOfWaste = 0.01; // Example value
    return conversionToKg + extraKgOfWaste;
  }

  calculateBreakdown(): void {
    const totalBottles = this.globalService.getOrderInfo().launchQty;
    let totalCostPerBottle = 0;
    let totalCost = 0;

    this.dataSource.data.forEach((item) => {
      const cost = parseFloat(item.cost.replace('$', ''));
      const withMoq = item.withMoq;
      const costQtyOrdered = cost * withMoq;
      const costPerBottle = costQtyOrdered / totalBottles;

      item.costQtyOrdered = `$${costQtyOrdered.toFixed(2)}`;
      item.costPerBottle = `$${costPerBottle.toFixed(4)}`;

      totalCostPerBottle += costPerBottle;
      totalCost += costQtyOrdered;
    });

    this.totalCostPerBottle = totalCostPerBottle;
    this.totalCost = totalCost;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editItem(item: any): void {
    // Edit functionality is commented out for now
    // const dialogRef = this.dialog.open(EditItemDialogComponent, {
    //   width: '250px',
    //   data: item
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     const index = this.dataSource.data.findIndex(i => i.item === item.item);
    //     this.dataSource.data[index] = result;
    //     this.dataSource = new MatTableDataSource(this.dataSource.data);
    //     this.calculateBreakdown();
    //   }
    // });
  }

  deleteItem(item: any): void {
    const index = this.dataSource.data.findIndex((i) => i.item === item.item);
    if (index > -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.dataSource.data);
      this.calculateBreakdown();
    }
  }
}
