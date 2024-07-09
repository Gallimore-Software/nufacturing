import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { QuoteComponent } from './quote.component';
import { IngredientCalculationComponent } from './bom/ingredient-calculation/ingredient-calculation.component';
import { IngredientBreakdownWithoutMoqComponent } from './bom/ingredient-breakdown-without-moq/ingredient-breakdown-without-moq.component';
import { IngredientBreakdownWithMoqComponent } from './bom/ingredient-breakdown-with-moq/ingredient-breakdown-with-moq.component';
import { QuoteRoutingModule } from './quote-routing.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { InfoModule } from './info/info.module';
import { PackageBreakdownComponent } from './bom/package-breakdown/package-breakdown.component';
import { SalesAnalysisComponent } from './bom/sales-analysis/sales-analysis.component';
import { BomComponent } from './bom/bom.component';
import { BomModule } from './bom/bom.module';

@NgModule({
  declarations: [
    QuoteComponent,
    BomComponent
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
    QuoteRoutingModule,
    IngredientsModule,
    InfoModule,
    FormsModule,
    BomModule
  ]
})
export class QuoteModule { }
