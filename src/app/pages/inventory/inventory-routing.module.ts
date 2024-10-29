import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryDashboardComponent } from './components/inventory-dashboard/inventory-dashboard.component';
import { FinishedGoodsComponent } from './components/finished-goods/finished-goods.component';
import { WipComponent } from './components/wip/wip.component';
import { ComponentsComponent } from 'src/app/pages/inventory/components/component-parts/components.component';
import { RawMaterialsInventoryComponent } from 'src/app/pages/inventory/components/components/inventory-items-table/components/raw-materials-inventory/raw-materials-inventory.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard', // Redirect the base path to 'dashboard'
  },
  { path: 'dashboard', component: InventoryDashboardComponent },
  { path: 'finished-goods', component: FinishedGoodsComponent },
  { path: 'raw-materials', component: RawMaterialsInventoryComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'wip', component: WipComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
