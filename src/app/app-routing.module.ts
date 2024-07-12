import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductDevelopmentComponent } from './pages/product-development/product-development.component';
import { HumanResourcesComponent } from './pages/human-resources/human-resources.component';
import { ProductionComponent } from './pages/production/production.component';
import { PurchasingComponent } from './pages/purchasing/purchasing.component';
import { QualityComponent } from './pages/quality/quality.component';
import { SalesComponent } from './pages/sales/sales.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'purchasing', component: PurchasingComponent },
  { path: 'production', component: ProductionComponent },
  { path: 'product-development', component: ProductDevelopmentComponent },
  { path: 'quality', component: QualityComponent },
  { path: 'human-resources', component: HumanResourcesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
