/* eslint-disable no-undef */
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Define the Formula interface to ensure proper typing
interface Ingredient {
  name: string;
  scientificName: string;
  perUnit: number;
}

interface Formula {
  code?: string;
  name: string;
  productType: string;
  unitOfMeasurement: string;
  activeIngredients?: Ingredient[];
  inactiveIngredients?: Ingredient[];
  createdAt?: Date;
  updatedAt?: Date;
}

@Component({
  selector: 'app-create-formulas',
  templateUrl: './create-formulas.component.html',
  styleUrls: ['./create-formulas.component.scss'],
})
export class CreateFormulasComponent {
  formulaForm: FormGroup;
  productTypes = [
    'Capsules',
    'Powder',
    'Gummies',
    'Tinctures',
    'Powder Stickpacks',
    'Liquid Stickpacks',
    'Pouches',
  ];
  unitOptions: { [key: string]: string[] } = {
    Capsules: ['mg', 'g', 'kg'],
    Powder: ['mg', 'g', 'kg'],
    Gummies: ['mcg', 'mg', 'g', 'kg', 'ml', 'liter', 'gallons', 'ounces'],
    Tinctures: ['ml', 'liter'],
    'Powder Stickpacks': ['mg', 'g', 'kg'],
    'Liquid Stickpacks': ['ml', 'liter'],
    Pouches: ['mg', 'g', 'kg', 'ml', 'liter'],
  };

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateFormulasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Formula = {} as Formula // Type the injected data as Formula
  ) {
    this.formulaForm = this.fb.group({
      code: [data.code || ''],
      name: [data.name || '', Validators.required],
      productType: [data.productType || '', Validators.required],
      unitOfMeasurement: [data.unitOfMeasurement || '', Validators.required],
      activeIngredients: this.fb.array([]), // Initialize as empty FormArray
      inactiveIngredients: this.fb.array([]), // Initialize as empty FormArray
      createdAt: [data.createdAt || new Date()],
      updatedAt: [data.updatedAt || new Date()],
    });

    // Populate the active and inactive ingredients FormArrays
    this.populateIngredients('activeIngredients', data.activeIngredients || []);
    this.populateIngredients(
      'inactiveIngredients',
      data.inactiveIngredients || []
    );

    // Update unit options whenever the product type changes
    this.formulaForm
      .get('productType')
      ?.valueChanges.subscribe((productType) => {
        this.updateUnitOptions(productType);
      });
  }

  get activeIngredients(): FormArray {
    return this.formulaForm.get('activeIngredients') as FormArray;
  }

  get inactiveIngredients(): FormArray {
    return this.formulaForm.get('inactiveIngredients') as FormArray;
  }

  // Populate FormArray with existing data
  private populateIngredients(arrayName: string, ingredients: Ingredient[]) {
    const ingredientsArray = this.formulaForm.get(arrayName) as FormArray;
    ingredients.forEach((ingredient: Ingredient) => {
      ingredientsArray.push(
        this.fb.group({
          name: [ingredient.name, Validators.required],
          scientificName: [ingredient.scientificName, Validators.required],
          perUnit: [
            ingredient.perUnit,
            [Validators.required, Validators.min(0)],
          ],
        })
      );
    });
  }

  addActiveIngredient() {
    this.activeIngredients.push(
      this.fb.group({
        name: ['', Validators.required],
        scientificName: ['', Validators.required],
        perUnit: [0, [Validators.required, Validators.min(0)]],
      })
    );
  }

  removeActiveIngredient(index: number) {
    this.activeIngredients.removeAt(index);
  }

  addInactiveIngredient() {
    this.inactiveIngredients.push(
      this.fb.group({
        name: ['', Validators.required],
        scientificName: ['', Validators.required],
        perUnit: [0, [Validators.required, Validators.min(0)]],
      })
    );
  }

  removeInactiveIngredient(index: number) {
    this.inactiveIngredients.removeAt(index);
  }

  onSubmit() {
    if (this.formulaForm.valid) {
      this.dialogRef.close(this.formulaForm.value);
    }
  }

  private updateUnitOptions(productType: string) {
    const unitControl = this.formulaForm.get('unitOfMeasurement');
    const units = this.unitOptions[productType] || [];
    if (units.length > 0) {
      unitControl?.setValidators([Validators.required]);
      unitControl?.updateValueAndValidity();
    } else {
      unitControl?.clearValidators();
      unitControl?.updateValueAndValidity();
    }
  }
}
