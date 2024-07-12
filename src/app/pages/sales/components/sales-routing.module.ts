import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { SalesComponent } from '../sales.component';
const routes: Routes = [
  {
    path: 'quotes',
    component: SalesComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '', component: SalesComponent },
      {
        path: 'quotes',
        loadChildren: () =>
          import('./quotes/quotes.module').then((m) => m.QuotesModule),
      },
      {
        path: 'customers',
        loadChildren: () =>
          import('./customers/customers.module').then((m) => m.CustomersModule),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./orders/orders.module').then((m) => m.OrdersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuoteRoutingModule {}
