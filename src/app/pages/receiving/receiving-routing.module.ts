import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceivingComponent } from './receiving.component';

const routes: Routes = [
  { path: '', component: ReceivingComponent, pathMatch: 'full' },
  { path: 'receiving', component: ReceivingComponent },
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
export class ReceivingRoutingModule {}
