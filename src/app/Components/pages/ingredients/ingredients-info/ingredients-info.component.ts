import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ingredients-info',
  templateUrl: './ingredients-info.component.html',
  styleUrls: ['./ingredients-info.component.scss']
})
export class IngredientsInfoComponent implements OnInit {
  ingredientForm: FormGroup;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'perCapsule', 'pricePerKg', 'moqKg', 'vendor', 'leadTime'];
  selectedIngredient: any;

  ingredients = [
    { name: 'Vitamin C (as absorbic acid)', perCapsule: 51, pricePerKg: '$6.00', moqKg: 25.0, vendor: 'Trafa', leadTime: 'In Stock' },
    { name: 'Vitamin B1 (thiamine)', perCapsule: 25, pricePerKg: '$24', moqKg: 25.0, vendor: 'Trafa', leadTime: 'In Stock' },
    { name: 'Vitamin B2 (riboflavin)', perCapsule: 25, pricePerKg: '$38', moqKg: 25.0, vendor: 'JHD', leadTime: '' },
    { name: 'Niacin (niacinamide)', perCapsule: 10, pricePerKg: '$10', moqKg: 25.0, vendor: 'Trafa', leadTime: 'In Stock' },
    { name: 'Vitamin B6 (pyridoxyl 5 phosphate)', perCapsule: 25, pricePerKg: '$125', moqKg: 25.0, vendor: 'Trafa', leadTime: 'In Stock' },
    { name: 'Pantothenic acid (d-calcium pantothenate)', perCapsule: 25, pricePerKg: '$17', moqKg: 25.0, vendor: 'Trafa', leadTime: 'In Stock' },
    { name: 'Manganese (manganese aminomin)', perCapsule: 12.5, pricePerKg: '$16', moqKg: 25.0, vendor: 'Trafa', leadTime: '5 Days' },
    { name: 'Calcium', perCapsule: 4.5, pricePerKg: '$14', moqKg: 25.0, vendor: 'Trafa', leadTime: '5 Days' },
    { name: 'Manganese (manganese glycinate)', perCapsule: 300, pricePerKg: '$26', moqKg: 25.0, vendor: 'Jia Herb', leadTime: '1 Week' },
    { name: 'Zinc (Zinc aspartate)', perCapsule: 50, pricePerKg: '$14', moqKg: 25.0, vendor: 'Trafa', leadTime: '5 Days' },
    { name: 'Cysteine (L)', perCapsule: 100, pricePerKg: '$17', moqKg: 25.0, vendor: 'Trafa', leadTime: '5 Days' },
    { name: 'Magnesium stearate', perCapsule: 100, pricePerKg: '$8', moqKg: 1.0, vendor: '', leadTime: '' },
    // Add more ingredients as needed
  ];

  constructor(private fb: FormBuilder) {
    this.dataSource = new MatTableDataSource(this.ingredients);

    this.ingredientForm = this.fb.group({
      name: [''],
      perCapsule: [''],
      pricePerKg: [''],
      moqKg: [''],
      vendor: [''],
      leadTime: ['']
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

  onSubmit() {
    const formValue = this.ingredientForm.value;
    const existingIngredientIndex = this.ingredients.findIndex(ing => ing.name === formValue.name);
    if (existingIngredientIndex >= 0) {
      this.ingredients[existingIngredientIndex] = formValue;
    } else {
      this.ingredients.push(formValue);
    }
    this.dataSource.data = this.ingredients;
    this.ingredientForm.reset();
  }
}
