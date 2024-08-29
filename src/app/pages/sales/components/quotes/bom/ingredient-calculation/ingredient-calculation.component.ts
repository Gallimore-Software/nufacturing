import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-ingredient-calculation',
  templateUrl: './ingredient-calculation.component.html',
  styleUrls: ['./ingredient-calculation.component.scss'],
})
export class IngredientCalculationComponent implements OnInit {
  ingredientForm: FormGroup;
  displayedColumns: string[] = [
    'name',
    'perCapsule',
    'nfgTargetCapsule',
    'perBottle',
    'mgPerBottle',
    'totalMgNeeded',
    'conversionToKg',
    'percentOfTotalKg',
    'extraKgOfWaste',
    'totalKg',
    'extraKgOfWasteMg',
    'extraMgToBottle',
    'intentionalOverages',
    'actions',
  ];
  totalOfPowder: number = 0;
  totalOfFinishedCapsule: number = 0;
  totalKgBeforeWaste: number = 0;
  total: number = 0;
  totalKgAfterWaste: number = 0;
  nfgCapsuleFillRange: { min: number; max: number } = { min: 0, max: 0 };
  targetWeight: number = 0;

  constructor(
    private fb: FormBuilder,
    private globalService: GlobalServiceService,
  ) {
    this.ingredientForm = this.fb.group({
      ingredients: this.fb.array([]),
      totalBottles: [2000], // Example total bottles
      setupCapsules: [2000], // Example setup capsules
    });

    this.initIngredients();
  }

  ngOnInit(): void {
    this.ingredientForm.valueChanges.subscribe(() => {
      this.calculateSummary();
    });
  }

  get ingredients(): FormArray {
    return this.ingredientForm.get('ingredients') as FormArray;
  }

  initIngredients(): void {
    const ingredientsData = this.globalService.getIngredients();
    ingredientsData.forEach((ingredient) => {
      this.ingredients.push(
        this.fb.group({
          name: [ingredient.name],
          perCapsule: [ingredient.perCapsule],
          nfgTargetCapsule: [
            this.calculateNfgTargetCapsule(ingredient.perCapsule),
          ],
          perBottle: [50],
          mgPerBottle: [{ value: 0, disabled: true }],
          totalMgNeeded: [{ value: 0, disabled: true }],
          conversionToKg: [{ value: 0, disabled: true }],
          percentOfTotalKg: [{ value: 0, disabled: true }],
          extraKgOfWaste: [{ value: 0, disabled: true }],
          totalKg: [{ value: 0, disabled: true }],
          extraKgOfWasteMg: [{ value: 0, disabled: true }],
          extraMgToBottle: [{ value: 0, disabled: true }],
          intentionalOverages: [{ value: 0, disabled: true }],
        }),
      );
    });
    this.calculateSummary();
  }

  calculateNfgTargetCapsule(perCapsule: number): number {
    return perCapsule + perCapsule * 0.1; // Assuming 10% intentional overage
  }

  calculateSummary(): void {
    let totalKgBeforeWaste = 0;
    let totalKg = 0;
    let totalOfPowder = 0;
    const totalBottles = this.ingredientForm.get('totalBottles')?.value || 0;

    this.ingredients.controls.forEach((control) => {
      const perCapsule = control.get('perCapsule')?.value;
      const nfgTargetCapsule = control.get('nfgTargetCapsule')?.value;
      const perBottle = control.get('perBottle')?.value;
      const mgPerBottle = nfgTargetCapsule * perBottle;
      const totalMgNeeded = mgPerBottle * totalBottles;
      const conversionToKg = totalMgNeeded / 1000000;

      control.patchValue(
        {
          mgPerBottle: this.toFixed(mgPerBottle, 4),
          totalMgNeeded: this.toFixed(totalMgNeeded, 4),
          conversionToKg: this.toFixed(conversionToKg, 4),
        },
        { emitEvent: false },
      );

      totalKgBeforeWaste += conversionToKg;
      totalOfPowder += perCapsule;
    });

    this.ingredients.controls.forEach((control) => {
      const conversionToKg = control.get('conversionToKg')?.value || 0;
      const percentOfTotalKg =
        totalKgBeforeWaste > 0
          ? (conversionToKg / totalKgBeforeWaste) * 100
          : 0;
      const extraKgOfWaste = (percentOfTotalKg / 100) * 8;
      const totalKgValue = conversionToKg + extraKgOfWaste;
      const extraKgOfWasteMg = extraKgOfWaste * 1000000;
      const mgPerBottle = control.get('mgPerBottle')?.value || 1;
      const extraMgToBottle =
        mgPerBottle > 0 ? extraKgOfWasteMg / mgPerBottle : 0;
      const intentionalOverages =
        conversionToKg > 0
          ? (extraKgOfWasteMg / conversionToKg) * 100 - 100
          : 0;

      control.patchValue(
        {
          percentOfTotalKg: this.toFixed(percentOfTotalKg, 4),
          extraKgOfWaste: this.toFixed(extraKgOfWaste, 4),
          totalKg: this.toFixed(totalKgValue, 4),
          extraKgOfWasteMg: this.toFixed(extraKgOfWasteMg, 4),
          extraMgToBottle: this.toFixed(extraMgToBottle, 4),
          intentionalOverages: this.toFixed(intentionalOverages, 4),
        },
        { emitEvent: false },
      );

      totalKg += totalKgValue;
    });

    const totalOfFinishedCapsule = totalOfPowder + 124; // Example capsule weight
    const totalKgAfterWaste = totalKgBeforeWaste + totalKg;
    const minFillRange = totalOfFinishedCapsule + 10;
    const maxFillRange = minFillRange + (minFillRange / 100) * 3.5;
    const targetWeight = (minFillRange + maxFillRange) / 2;

    this.totalOfPowder = this.toFixed(totalOfPowder, 4);
    this.totalOfFinishedCapsule = this.toFixed(totalOfFinishedCapsule, 4);
    this.totalKgBeforeWaste = this.toFixed(totalKgBeforeWaste, 4);
    this.total = this.toFixed(totalKg, 4);
    this.totalKgAfterWaste = this.toFixed(totalKgAfterWaste, 4);
    this.nfgCapsuleFillRange = {
      min: this.toFixed(minFillRange, 4),
      max: this.toFixed(maxFillRange, 4),
    };
    this.targetWeight = this.toFixed(targetWeight, 4);
  }

  toFixed(value: number, decimals: number): number {
    return parseFloat(value.toFixed(decimals));
  }

  onSubmit(): void {
    console.log('Form Submitted', this.ingredientForm.value);
  }

  editIngredient(ingredient: any) {
    ingredient.get('perCapsule').enable();
    ingredient.get('perBottle').enable();
    // Add more controls to enable if necessary
  }

  deleteIngredient(ingredientIndex: number): void {
    this.ingredients.removeAt(ingredientIndex);
    this.calculateSummary(); // Recalculate the summary after deleting an ingredient
  }
}
