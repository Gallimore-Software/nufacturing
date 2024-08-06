import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-formulas',
  templateUrl: './create-formulas.component.html',
  styleUrls: ['./create-formulas.component.scss'],
})
export class CreateFormulasComponent implements OnInit {
  formulasList: any[] = [];

  formulaForm: FormGroup = this.fb.group({
    basicInfo: this.fb.group({
      formulaName: ['', Validators.required],
      formulaCode: ['', Validators.required],
      productType: ['', Validators.required],
    }),
    ingredients: this.fb.array([]),
    nutritionalInfo: this.fb.group({
      servingSize: [0, Validators.min(1)],
      calories: [0, Validators.min(0)],
      otherNutrients: this.fb.array([]),
    }),
    manufacturingInstructions: this.fb.group({
      preparationInstructions: [''],
      mixingInstructions: [''],
      packagingInstructions: [''],
    }),
    qualityControl: this.fb.group({
      qualityControlTests: [''],
      acceptanceCriteria: [''],
    }),
    regulatoryCompliance: this.fb.group({
      regulatoryRequirements: [''],
      certifications: this.fb.group({
        GMP: false,
        FDA: false,
        ISO: false,
      }),
    }),
    additionalInfo: this.fb.group({
      notes: [''],
    }),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formulaForm = this.fb.group({
      basicInfo: this.fb.group({
        formulaName: ['', Validators.required],
        formulaCode: ['', Validators.required],
        productType: ['', Validators.required],
      }),
      ingredients: this.fb.array([]),
      nutritionalInfo: this.fb.group({
        servingSize: [0, Validators.min(1)],
        calories: [0, Validators.min(0)],
        otherNutrients: this.fb.array([]),
      }),
      manufacturingInstructions: this.fb.group({
        preparationInstructions: [''],
        mixingInstructions: [''],
        packagingInstructions: [''],
      }),
      qualityControl: this.fb.group({
        qualityControlTests: [''],
        acceptanceCriteria: [''],
      }),
      regulatoryCompliance: this.fb.group({
        regulatoryRequirements: [''],
        certifications: this.fb.group({
          GMP: false,
          FDA: false,
          ISO: false,
        }),
      }),
      additionalInfo: this.fb.group({
        notes: [''],
      }),
    });
  }

  get ingredients(): FormArray {
    return this.formulaForm.get('ingredients') as FormArray;
  }

  get otherNutrients(): FormArray {
    return this.formulaForm
      .get('nutritionalInfo')
      ?.get('otherNutrients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(
      this.fb.group({
        ingredientName: ['', Validators.required],
        perCapsuleMg: [0, [Validators.required, Validators.min(0)]],
        pricePerKG: [{ value: '', disabled: true }],
        source: ['', Validators.required],
        stockQuantity: [{ value: '', disabled: true }],
        totalCost: [{ value: '', disabled: true }],
      }),
    );
  }
  removeIngredient() {
    const ingredientsArray = this.ingredients;
    if (ingredientsArray.length > 0) {
      ingredientsArray.removeAt(ingredientsArray.length - 1);
    }
  }

  addNutrient() {
    this.otherNutrients.push(
      this.fb.group({
        nutrientName: [''],
        amount: [0, Validators.min(0)],
      }),
    );
  }

  removeNutrient() {
    if (this.otherNutrients.length > 0) {
      this.otherNutrients.removeAt(this.otherNutrients.length - 1);
    }
  }
  onSubmit() {
    const formulaData = this.formulaForm.value;
    this.formulasList.push(formulaData);
    console.log('Formulas List:', this.formulasList);
    this.formulaForm.reset();
  }
}
