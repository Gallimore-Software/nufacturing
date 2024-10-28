import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalServiceService } from 'src/app/services/global-service.service';

interface Ingredient {
  name: string;
  perCapsule: number;
  pricePerKg: string;
  moqKg: number;
  vendor: string;
  leadTime: string;
}

@Component({
  selector: 'app-ingredients-info',
  templateUrl: './ingredients-info.component.html',
  styleUrls: ['./ingredients-info.component.scss'],
})
export class IngredientsInfoComponent implements OnInit {
  ingredientForm: FormGroup;
  dataSource: MatTableDataSource<Ingredient>;
  displayedColumns: string[] = [
    'name',
    'perCapsule',
    'pricePerKg',
    'moqKg',
    'vendor',
    'leadTime',
    'actions',
  ];
  selectedIngredient: Ingredient | null = null;

  constructor(
    private fb: FormBuilder,
    private globalService: GlobalServiceService
  ) {
    this.dataSource = new MatTableDataSource<Ingredient>(
      this.globalService.getIngredients() as Ingredient[]
    );

    this.ingredientForm = this.fb.group({
      name: [''],
      perCapsule: [''],
      pricePerKg: [''],
      moqKg: [''],
      vendor: [''],
      leadTime: [''],
    });
  }

  ngOnInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewIngredientDetails(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
    // Open modal or detailed view
  }

  editIngredient(ingredient: Ingredient) {
    this.ingredientForm.patchValue(ingredient);
    this.selectedIngredient = ingredient;
  }

  deleteIngredient(ingredient: Ingredient) {
    const ingredients = this.globalService.getIngredients() as Ingredient[];
    const index = ingredients.findIndex((ing) => ing.name === ingredient.name);
    if (index >= 0) {
      ingredients.splice(index, 1);
      this.dataSource.data = ingredients;
    }
  }

  onSubmit() {
    const formValue = this.ingredientForm.value as Ingredient;
    const ingredients = this.globalService.getIngredients() as Ingredient[];
    const existingIngredientIndex = ingredients.findIndex(
      (ing) => ing.name === formValue.name
    );
    if (existingIngredientIndex >= 0) {
      ingredients[existingIngredientIndex] = formValue;
    } else {
      ingredients.push(formValue);
    }
    this.dataSource.data = ingredients;
    this.ingredientForm.reset();
  }
}
