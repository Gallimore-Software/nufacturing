import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { InventoryDashboardComponent } from './components/inventory-dashboard/inventory-dashboard.component';
import { FinishedGoodsComponent } from './components/finished-goods/finished-goods.component';
import { RawMaterialsComponent } from './components/raw-materials/raw-materials.component';
import { ComponentsComponent } from './components/components/components.component';
import { WipComponent } from './components/wip/wip.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      { path: 'dashboard', component: InventoryDashboardComponent },
      { path: 'finished-goods', component: FinishedGoodsComponent },
      { path: 'raw-materials', component: RawMaterialsComponent },
      { path: 'components', component: ComponentsComponent },
      { path: 'wip', component: WipComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
