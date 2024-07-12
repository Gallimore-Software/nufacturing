import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes.component';

const routes: Routes = [
  {
    path: 'quotes',
    component: QuotesComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '', component: QuotesComponent },
      {
        path: 'info',
        loadChildren: () =>
          import('./info/info.module').then((m) => m.InfoModule),
      },
      {
        path: 'ingredients',
        loadChildren: () =>
          import('./ingredients/ingredients.module').then(
            (m) => m.IngredientsModule
          ),
      },
      {
        path: 'bom',
        loadChildren: () => import('./bom/bom.module').then((m) => m.BomModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuoteRoutingModule {}
