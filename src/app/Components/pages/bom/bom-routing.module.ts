import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BomComponent } from './bom.component';
import { BomFormComponent } from './bom-form/bom-form.component';
import { IngredientCalculationComponent } from './ingredient-calculation/ingredient-calculation.component';

const routes: Routes = [
  {
    path: '',
    component: BomComponent,
    children: [
      { path: '', redirectTo: 'bom-form', pathMatch: 'full' },
      { path: 'bom-form', component: BomFormComponent },
      { path: 'ingredient-calculation', component: IngredientCalculationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BomRoutingModule { }
