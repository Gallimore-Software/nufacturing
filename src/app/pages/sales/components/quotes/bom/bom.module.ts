import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BomFormComponent } from './bom-form/bom-form.component';
import { BomRoutingModule } from './bom-routing.module';
import { CalculateProfitComponent } from './calculate-profit/calculate-profit.component';
import { CalculateQuotePricingComponent } from './calculate-quote-pricing/calculate-quote-pricing.component';
import { IngredientBreakdownWithMoqComponent } from './ingredient-breakdown-with-moq/ingredient-breakdown-with-moq.component';
import { IngredientBreakdownWithoutMoqComponent } from './ingredient-breakdown-without-moq/ingredient-breakdown-without-moq.component';
import { IngredientCalculationComponent } from './ingredient-calculation/ingredient-calculation.component';
import { PackageBreakdownComponent } from './package-breakdown/package-breakdown.component';
import { SalesAnalysisComponent } from './sales-analysis/sales-analysis.component';
import { BomComponent } from './bom.component';

@NgModule({
  declarations: [
    BomComponent,
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
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
  ],
})
export class BomModule {}
