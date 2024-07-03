import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientCalculationComponent } from './ingredient-calculation/ingredient-calculation.component';
import { IngredientBreakdownWithoutMoqComponent } from './ingredient-breakdown-without-moq/ingredient-breakdown-without-moq.component';
import { IngredientBreakdownWithMoqComponent } from './ingredient-breakdown-with-moq/ingredient-breakdown-with-moq.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteComponent } from './quote.component';

const routes: Routes = [
  {
    path: 'quotes',
    component: QuoteComponent,
    children: [
      { path: '', redirectTo: 'create', pathMatch: 'full' },
      { path: 'create', component: QuoteFormComponent },
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
