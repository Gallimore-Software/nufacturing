import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BomRoutingModule } from './bom-routing.module';
import { BomComponent } from './bom.component';
import { BomFormComponent } from './bom-form/bom-form.component';
import { IngredientCalculationComponent } from './ingredient-calculation/ingredient-calculation.component';
import { IngredientBreakdownWithoutMoqComponent } from './ingredient-breakdown-without-moq/ingredient-breakdown-without-moq.component';
import { IngredientBreakdownWithMoqComponent } from './ingredient-breakdown-with-moq/ingredient-breakdown-with-moq.component';

@NgModule({
  declarations: [
    BomComponent,
    BomFormComponent,
    IngredientCalculationComponent,
    IngredientBreakdownWithoutMoqComponent,
    IngredientBreakdownWithMoqComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BomRoutingModule
  ]
})
export class BomModule { }
