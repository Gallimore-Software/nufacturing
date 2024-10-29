import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryDashboardComponent } from './components/inventory-dashboard/inventory-dashboard.component';
import { FinishedGoodsComponent } from './components/finished-goods/finished-goods.component';
import { WorksInProgressComponent } from './components/works-in-progress/works-in-progress.component';
import { ProductComponentsComponent } from 'src/app/pages/inventory/components/product-components/product-components.component';
import { RawMaterialsInventoryComponent } from 'src/app/pages/inventory/components/components/inventory-items-table/components/raw-materials-inventory/raw-materials-inventory.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview',
  },
  { path: 'overview', component: InventoryDashboardComponent },
  { path: 'finished-goods', component: FinishedGoodsComponent },
  { path: 'raw-materials', component: RawMaterialsInventoryComponent },
  { path: 'product-components', component: ProductComponentsComponent },
  { path: 'works-in-progress', component: WorksInProgressComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
