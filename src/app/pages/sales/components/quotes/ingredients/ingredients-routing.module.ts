import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients.component';
import { IngredientsInfoComponent } from './ingredients-info/ingredients-info.component';
import { supplementFactsOnlyComponent } from './supplement-facts-only/supplement-facts-only.component';
import { SupplementFactsDetailsComponent } from './supplement-facts-details/supplement-facts-details.component';

const routes: Routes = [
  {
    path: '',
    component: IngredientsComponent,
    children: [
      { path: '', redirectTo: 'ingredients-info', pathMatch: 'full' },
      { path: 'ingredients-info', component: IngredientsInfoComponent },
      {
        path: 'supplement-facts-only',
        component: supplementFactsOnlyComponent,
      },
      {
        path: 'supplement-facts-details',
        component: SupplementFactsDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientsRoutingModule {}
