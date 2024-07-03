import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientCalculationComponent } from './ingredient-calculation/ingredient-calculation.component';
import { IngredientBreakdownWithoutMoqComponent } from './ingredient-breakdown-without-moq/ingredient-breakdown-without-moq.component';
import { IngredientBreakdownWithMoqComponent } from './ingredient-breakdown-with-moq/ingredient-breakdown-with-moq.component';
import { BomFormComponent } from './bom-form/bom-form.component';
import { QuoteComponent } from './quote.component';
import { InfoComponent } from './info/info.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

const routes: Routes = [
  {
    path: 'quotes',
    component: QuoteComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '', component: QuoteComponent },
      { path: 'info', component: InfoComponent },
      { path: 'bom-form', component: BomFormComponent },
      { path: 'ingredients', component: IngredientsComponent },
      { path: 'ingredient-calculation', component: IngredientCalculationComponent },
      { path:'ingredient-breakdown-without-moq', component: IngredientBreakdownWithoutMoqComponent},
      { path:'ingredient-breakdown-with-moq', component: IngredientBreakdownWithMoqComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }
