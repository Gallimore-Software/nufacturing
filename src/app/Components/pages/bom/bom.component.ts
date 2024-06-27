import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface BOMElement {
  property: string;
  value: string;
  notes: string;
}

export interface IngredientElement {
  ingredient: string;
  quantity: number;
  cost: number;
}

export interface PackagingElement {
  packagingItem: string;
  quantity: number;
  cost: number;
}

export interface IngredientMOQElement {
  ingredient: string;
  moq: number;
  cost: number;
}

const BOM_DATA: BOMElement[] = [
  {property: 'Bottles per Master Case', value: '135', notes: '225cc = 90ct'},
  {property: 'Capsules per bottle', value: '50', notes: '175cc = 135ct'},
  {property: 'Bottles', value: '2000', notes: ''},
  {property: 'Capsules Needed For Order', value: '100000', notes: ''},
  {property: 'Total Capsules Needed', value: '102000', notes: ''}
];

const INGREDIENT_DATA: IngredientElement[] = [
  {ingredient: 'Ingredient A', quantity: 100, cost: 50},
  {ingredient: 'Ingredient B', quantity: 200, cost: 30},
  {ingredient: 'Ingredient C', quantity: 150, cost: 20}
];

const INGREDIENT_MOQ_DATA: IngredientMOQElement[] = [
  {ingredient: 'Ingredient A', moq: 1000, cost: 500},
  {ingredient: 'Ingredient B', moq: 2000, cost: 600},
  {ingredient: 'Ingredient C', moq: 1500, cost: 300}
];

const PACKAGING_DATA: PackagingElement[] = [
  {packagingItem: 'Bottle', quantity: 2000, cost: 100},
  {packagingItem: 'Cap', quantity: 2000, cost: 50},
  {packagingItem: 'Label', quantity: 2000, cost: 30}
];

@Component({
  selector: 'app-bom-sheet',
  templateUrl: './bom.component.html',
  styleUrls: ['./bom.component.scss']
})
export class BomComponent implements OnInit {
  displayedColumns: string[] = ['property', 'value', 'notes'];
  dataSource = BOM_DATA;

  ingredientColumns: string[] = ['ingredient', 'quantity', 'cost'];
  ingredientBreakdownData = INGREDIENT_DATA;

  ingredientMOQColumns: string[] = ['ingredient', 'moq', 'cost'];
  ingredientMOQBreakdownData = INGREDIENT_MOQ_DATA;

  packagingColumns: string[] = ['packagingItem', 'quantity', 'cost'];
  packagingBreakdownData = PACKAGING_DATA;

  ingredientCalculationForm = this.fb.group({
    ingredientName: [''],
    quantity: [0],
    unit: [''],
    cost: [0]
  });

  quotePricingForm = this.fb.group({
    cost: [0],
    profitMargin: [0],
    moq: [0],
    totalCost: [{value: 0, disabled: true}],
    finalQuote: [{value: 0, disabled: true}]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.quotePricingForm.valueChanges.subscribe(values => {
      let { cost, profitMargin, moq } = values;
      if (!cost) {
        cost = 0;
      }
      if (!profitMargin) {
        profitMargin = 0;
      }
      if (!moq) {
        moq = 0;
      }
      const totalCost = cost * moq;
    
      const finalQuote = totalCost + (totalCost * profitMargin / 100);
      this.quotePricingForm.patchValue({
        totalCost,
        finalQuote
      }, { emitEvent: false });
    });
  }
}
