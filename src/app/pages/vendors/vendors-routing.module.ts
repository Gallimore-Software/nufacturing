import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorsComponent } from './vendors.component';

const routes: Routes = [
  { path: '', component: VendorsComponent, pathMatch: 'full' },
  { path: 'inventory', component: VendorsComponent },
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
export class VendorsRoutingModule {}
