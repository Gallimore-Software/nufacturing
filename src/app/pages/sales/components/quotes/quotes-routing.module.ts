import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes.component';

const routes: Routes = [
  {
    path: '',
    component: QuotesComponent,
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      {
        path: 'info',
        loadChildren: () =>
          import('./info/info.module').then((m) => m.InfoModule),
      },
      {
        path: 'ingredients',
        loadChildren: () =>
          import('./ingredients/ingredients.module').then(
            (m) => m.IngredientsModule,
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
