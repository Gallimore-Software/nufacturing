import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BomComponent } from './bom.component';
import { BomFormComponent } from './bom-form/bom-form.component';
import { IngredientCalculationComponent } from './ingredient-calculation/ingredient-calculation.component';
import { IngredientBreakdownWithoutMoqComponent } from './ingredient-breakdown-without-moq/ingredient-breakdown-without-moq.component';
import { IngredientBreakdownWithMoqComponent } from './ingredient-breakdown-with-moq/ingredient-breakdown-with-moq.component';

const routes: Routes = [
  {
    path: '',
    component: BomComponent,
    children: [
      { path: '', redirectTo: 'bom-form', pathMatch: 'full' },
      { path: 'bom-form', component: BomFormComponent },
      { path: 'ingredient-calculation', component: IngredientCalculationComponent },
      {path:'ingredient-breakdown-without-moq', component: IngredientBreakdownWithoutMoqComponent},
      {path:'ingredient-breakdown-with-moq', component: IngredientBreakdownWithMoqComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BomRoutingModule { }
