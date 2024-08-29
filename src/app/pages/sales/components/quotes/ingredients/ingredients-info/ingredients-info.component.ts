import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-ingredients-info',
  templateUrl: './ingredients-info.component.html',
  styleUrls: ['./ingredients-info.component.scss'],
})
export class IngredientsInfoComponent implements OnInit {
  ingredientForm: FormGroup;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'name',
    'perCapsule',
    'pricePerKg',
    'moqKg',
    'vendor',
    'leadTime',
    'actions',
  ];
  selectedIngredient: any;

  constructor(
    private fb: FormBuilder,
    private globalService: GlobalServiceService,
  ) {
    this.dataSource = new MatTableDataSource(
      this.globalService.getIngredients(),
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

  viewIngredientDetails(ingredient: any) {
    this.selectedIngredient = ingredient;
    // Open modal or detailed view
  }

  editIngredient(ingredient: any) {
    this.ingredientForm.patchValue(ingredient);
    this.selectedIngredient = ingredient;
  }

  deleteIngredient(ingredient: any) {
    const ingredients = this.globalService.getIngredients();
    const index = ingredients.findIndex((ing) => ing.name === ingredient.name);
    if (index >= 0) {
      ingredients.splice(index, 1);
      this.dataSource.data = ingredients;
    }
  }

  onSubmit() {
    const formValue = this.ingredientForm.value;
    const ingredients = this.globalService.getIngredients();
    const existingIngredientIndex = ingredients.findIndex(
      (ing) => ing.name === formValue.name,
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
