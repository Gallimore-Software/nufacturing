import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BomComponent } from './bom.component';
import { BomFormComponent } from './bom-form/bom-form.component';
import { IngredientBreakdownWithoutMoqComponent } from './ingredient-breakdown-without-moq/ingredient-breakdown-without-moq.component';
import { IngredientBreakdownWithMoqComponent } from './ingredient-breakdown-with-moq/ingredient-breakdown-with-moq.component';
import { IngredientCalculationComponent } from './ingredient-calculation/ingredient-calculation.component';
import { PackageBreakdownComponent } from './package-breakdown/package-breakdown.component';
import { SalesAnalysisComponent } from './sales-analysis/sales-analysis.component';
import { CalculateProfitComponent } from './calculate-profit/calculate-profit.component';
import { CalculateQuotePricingComponent } from './calculate-quote-pricing/calculate-quote-pricing.component';

const routes: Routes = [
  {
    path: '',
    component: BomComponent,
    children: [
      { path: '', redirectTo: 'bom-form', pathMatch: 'full' },
      { path: 'bom-form', component: BomFormComponent },
      {
        path: 'ingredient-breakdown-without-moq',
        component: IngredientBreakdownWithoutMoqComponent,
      },
      {
        path: 'ingredient-breakdown-with-moq',
        component: IngredientBreakdownWithMoqComponent,
      },
      {
        path: 'ingredient-calculation',
        component: IngredientCalculationComponent,
      },
      { path: 'package-breakdown', component: PackageBreakdownComponent },
      { path: 'sales-analysis', component: SalesAnalysisComponent },
      { path: 'calculate-profit', component: CalculateProfitComponent },
      {
        path: 'calculate-quote-pricing',
        component: CalculateQuotePricingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BomRoutingModule {}
