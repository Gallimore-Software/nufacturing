import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';

const routes: Routes = [
  { path: '', component: InventoryComponent, pathMatch: 'full' },
  { path: 'inventory', component: InventoryComponent },
  //   {
  //     path: 'quotes',
  //     loadChildren: () =>
  //       import('./components/quotes/quotes.module').then((m) => m.QuotesModule),
  //   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
