import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HumanResourcesComponent } from './pages/human-resources/human-resources.component';
import { ProductionComponent } from './pages/production/production.component';
import { PurchasingComponent } from './pages/purchasing/purchasing.component';
import { QualityComponent } from './pages/quality/quality.component';
import { SalesComponent } from './pages/sales/sales.component';
import { ProductDevelopmentComponent } from './pages/product-development/product-development.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'sales',
    loadChildren: () =>
      import('./pages/sales/sales.module').then((m) => m.SalesModule),
  },
  {
    path: 'purchasing',
    loadChildren: () =>
      import('./pages/purchasing/purchasing.module').then(
        (m) => m.PurchasingModule
      ),
  },
  {
    path: 'production',
    loadChildren: () =>
      import('./pages/production/production.module').then(
        (m) => m.ProductionModule
      ),
  },
  {
    path: 'product-development',
    loadChildren: () =>
      import('./pages/product-development/product-development.module').then(
        (m) => m.ProductDevelopmentModule
      ),
  },
  {
    path: 'quality',
    loadChildren: () =>
      import('./pages/quality/quality.module').then((m) => m.QualityModule),
  },
  {
    path: 'human-resources',
    loadChildren: () =>
      import('./pages/human-resources/human-resources.module').then(
        (m) => m.HumanResourcesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
