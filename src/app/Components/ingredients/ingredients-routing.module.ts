import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients.component';
import { IngredientsInfoComponent } from './ingredients-info/ingredients-info.component';
import { SupplimentFactsOnlyComponent } from './suppliment-facts-only/suppliment-facts-only.component';
import { SupplementFactsDetailsComponent } from './supplement-facts-details/supplement-facts-details.component';

const routes: Routes = [
  {
    path: '',
    component: IngredientsComponent,
    children: [
      { path: '', redirectTo: 'ingredients-info', pathMatch: 'full' },
      { path: 'ingredients-info', component: IngredientsInfoComponent },
      { path: 'suppliment-facts-only', component:SupplimentFactsOnlyComponent },
      { path: 'suppliment-facts-details', component: SupplementFactsDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientsRoutingModule { }
