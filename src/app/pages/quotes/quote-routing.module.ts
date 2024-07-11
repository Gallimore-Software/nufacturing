import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientCalculationComponent } from './bom/ingredient-calculation/ingredient-calculation.component';
import { IngredientBreakdownWithoutMoqComponent } from './bom/ingredient-breakdown-without-moq/ingredient-breakdown-without-moq.component';
import { IngredientBreakdownWithMoqComponent } from './bom/ingredient-breakdown-with-moq/ingredient-breakdown-with-moq.component';
import { BomFormComponent } from './bom/bom-form/bom-form.component';
import { QuoteComponent } from './quote.component';
import { InfoComponent } from './info/info.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientsModule } from './ingredients/ingredients.module';
import { PackageBreakdownComponent } from './bom/package-breakdown/package-breakdown.component';
import { SalesAnalysisComponent } from './bom/sales-analysis/sales-analysis.component';
import { BomComponent } from './bom/bom.component';

const routes: Routes = [
  {
    path: 'quotes',
    component: QuoteComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '', component: QuoteComponent },
      { path: 'info', loadChildren: () => import('./info/info.module').then(m => m.InfoModule) }, 
      { path: 'ingredients', loadChildren: () => import('./ingredients/ingredients.module').then(m => m.IngredientsModule) },
      { path: 'bom', loadChildren: () => import('./bom/bom.module').then(m => m.BomModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IngredientsModule],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }
