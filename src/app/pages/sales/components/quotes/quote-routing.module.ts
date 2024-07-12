import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteComponent } from './quote.component';

const routes: Routes = [
  {
    path: 'quotes',
    component: QuoteComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '', component: QuoteComponent },
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
