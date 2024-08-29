import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-sales-analysis',
  templateUrl: './sales-analysis.component.html',
  styleUrls: ['./sales-analysis.component.scss'],
})
export class SalesAnalysisComponent implements OnInit {
  salesAnalysisForm: FormGroup;
  scenarioManagerForm: FormGroup;
  dataTableForm: FormGroup;
  displayedColumns: string[] = ['price', 'salesVolume', 'revenue'];
  dataTable: any[] = [];
  filteredDataTable: any[] = [];

  suggestedPricesWithMOQ: any[] = [];
  suggestedPricesWithoutMOQ: any[] = [];
  totalCostPerBottleWithMOQ: number = 6.1; // Example value
  totalCostPerBottleWithoutMOQ: number = 2.9; // Example value

  constructor(private fb: FormBuilder) {
    this.salesAnalysisForm = this.fb.group({
      targetRevenue: [100000, Validators.required],
      salesVolume: [{ value: 0, disabled: true }, Validators.required],
      price: [0, Validators.required],
    });

    this.scenarioManagerForm = this.fb.group({
      scenarios: this.fb.array([]),
    });

    this.dataTableForm = this.fb.group({
      priceRange: this.fb.array([this.createPriceRange()]),
      salesVolumeRange: this.fb.array([this.createSalesVolumeRange()]),
    });

    this.filteredDataTable = this.dataTable;
  }

  ngOnInit(): void {
    this.initializeScenarios();
    this.calculateDataTable();
  }

  createPriceRange(): FormGroup {
    return this.fb.group({
      price: [0, Validators.required],
    });
  }

  createSalesVolumeRange(): FormGroup {
    return this.fb.group({
      salesVolume: [0, Validators.required],
    });
  }

  get scenarios(): FormArray {
    return this.scenarioManagerForm.get('scenarios') as FormArray;
  }

  get priceRange(): FormArray {
    return this.dataTableForm.get('priceRange') as FormArray;
  }

  get salesVolumeRange(): FormArray {
    return this.dataTableForm.get('salesVolumeRange') as FormArray;
  }

  addScenario(): void {
    this.scenarios.push(
      this.fb.group({
        price: [0, Validators.required],
        salesVolume: [0, Validators.required],
        revenue: [{ value: 0, disabled: true }],
      }),
    );
  }

  initializeScenarios(): void {
    for (let i = 0; i < 3; i++) {
      this.addScenario();
    }
  }

  calculateRevenue(): void {
    const targetRevenue = this.salesAnalysisForm.get('targetRevenue')?.value;
    const price = this.salesAnalysisForm.get('price')?.value;
    if (price > 0) {
      const salesVolume = targetRevenue / price;
      this.salesAnalysisForm.patchValue({ salesVolume });
    }
  }

  calculateScenarioRevenue(index: number): void {
    const scenario = this.scenarios.at(index);
    const price = scenario.get('price')?.value;
    const salesVolume = scenario.get('salesVolume')?.value;
    if (price > 0 && salesVolume > 0) {
      const revenue = price * salesVolume;
      scenario.patchValue({ revenue }, { emitEvent: false });
    }
  }

  calculateDataTable(): void {
    const priceRange = this.priceRange.value;
    const salesVolumeRange = this.salesVolumeRange.value;

    this.dataTable = [];
    priceRange.forEach((price: any) => {
      salesVolumeRange.forEach((volume: any) => {
        this.dataTable.push({
          price: price.price,
          salesVolume: volume.salesVolume,
          revenue: price.price * volume.salesVolume,
        });
      });
    });

    this.filteredDataTable = this.dataTable;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredDataTable = this.dataTable.filter(
      (item) =>
        item.price.toString().includes(filterValue) ||
        item.salesVolume.toString().includes(filterValue) ||
        item.revenue.toString().includes(filterValue),
    );
  }

  onSubmit(): void {
    console.log('Form Submitted', this.salesAnalysisForm.value);
  }

  calculateSuggestedPrices(): void {
    const margins = [10, 15, 20, 25, 30, 35, 40, 45, 50];
    this.suggestedPricesWithMOQ = [];
    this.suggestedPricesWithoutMOQ = [];

    margins.forEach((margin) => {
      const priceWithMOQ = this.totalCostPerBottleWithMOQ * (1 + margin / 100);
      const priceWithoutMOQ =
        this.totalCostPerBottleWithoutMOQ * (1 + margin / 100);

      this.suggestedPricesWithMOQ.push({
        margin: `${margin}%`,
        price: `$${priceWithMOQ.toFixed(2)}`,
      });
      this.suggestedPricesWithoutMOQ.push({
        margin: `${margin}%`,
        price: `$${priceWithoutMOQ.toFixed(2)}`,
      });
    });
  }
}
