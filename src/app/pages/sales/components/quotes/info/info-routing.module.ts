import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { TestingInfoComponent } from './testing-info/testing-info.component';
import { OrderCostsComponent } from './order-costs/order-costs.component';
import { CapsuleInfoComponent } from './capsule-info/capsule-info.component';
import { BottleInfoComponent } from './bottle-info/bottle-info.component';
import { ClosureInfoComponent } from './closure-info/closure-info.component';
import { MasterCartonInfoComponent } from './master-carton-info/master-carton-info.component';
import { OtherComponentsComponent } from './other-components/other-components.component';
import { LabelInfoComponent } from './label-info/label-info.component';

const routes: Routes = [
  {
    path: '',
    component: InfoComponent,
    children: [
      { path: '', redirectTo: 'account-info', pathMatch: 'full' },
      { path: 'account-info', component: AccountInfoComponent },
      { path: 'customer-info', component: CustomerInfoComponent },
      { path: 'order-info', component: OrderInfoComponent },
      { path: 'testing-info', component: TestingInfoComponent },
      { path: 'order-costs', component: OrderCostsComponent },
      { path: 'capsule-info', component: CapsuleInfoComponent },
      { path: 'bottle-info', component: BottleInfoComponent },
      { path: 'closure-info', component: ClosureInfoComponent },
      { path: 'master-carton-info', component: MasterCartonInfoComponent },
      { path: 'other-components', component: OtherComponentsComponent },
      { path: 'label-info', component: LabelInfoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
