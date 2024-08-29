import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales.component';

const routes: Routes = [
  { path: '', component: SalesComponent, pathMatch: 'full' },
  {
    path: 'quotes',
    loadChildren: () =>
      import('./components/quotes/quotes.module').then((m) => m.QuotesModule),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./components/customers/customers.module').then(
        (m) => m.CustomersModule,
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./components/orders/orders.module').then((m) => m.OrdersModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
