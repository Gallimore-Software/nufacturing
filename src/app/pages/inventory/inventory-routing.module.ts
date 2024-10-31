import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryDashboardComponent } from './components/inventory-dashboard/inventory-dashboard.component';
import { FinishedGoodsComponent } from './components/finished-goods/finished-goods.component';
import { WorksInProgressComponent } from './components/works-in-progress/works-in-progress.component';
import { ProductComponentsComponent } from 'src/app/pages/inventory/components/product-components/product-components.component';
import { RawMaterialsComponent } from 'src/app/pages/inventory/components/raw-materials/raw-materials.component';
import { InventoryComponent } from 'src/app/pages/inventory/inventory.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: InventoryDashboardComponent },
      { path: 'raw-materials', component: RawMaterialsComponent },
      { path: 'finished-goods', component: FinishedGoodsComponent },
      { path: 'product-components', component: ProductComponentsComponent },
      { path: 'works-in-progress', component: WorksInProgressComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
