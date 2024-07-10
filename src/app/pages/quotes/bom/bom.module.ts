import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BomRoutingModule } from './bom-routing.module';
import { BomFormComponent } from './bom-form/bom-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { IngredientCalculationComponent } from './ingredient-calculation/ingredient-calculation.component';
import { IngredientBreakdownWithoutMoqComponent } from './ingredient-breakdown-without-moq/ingredient-breakdown-without-moq.component';
import { IngredientBreakdownWithMoqComponent } from './ingredient-breakdown-with-moq/ingredient-breakdown-with-moq.component';
import { MatIconModule } from '@angular/material/icon';
import { SalesAnalysisComponent } from './sales-analysis/sales-analysis.component';
import { PackageBreakdownComponent } from './package-breakdown/package-breakdown.component';
import { CalculateProfitComponent } from './calculate-profit/calculate-profit.component';
import { CalculateQuotePricingComponent } from './calculate-quote-pricing/calculate-quote-pricing.component';



@NgModule({
  declarations: [
    BomFormComponent,
    IngredientCalculationComponent,
    IngredientBreakdownWithoutMoqComponent,
    IngredientBreakdownWithMoqComponent,
    PackageBreakdownComponent,
    SalesAnalysisComponent,
    CalculateProfitComponent,
    CalculateQuotePricingComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatListModule, 
    FlexLayoutModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    BomRoutingModule,
    FormsModule
  ]
})
export class BomModule { }
