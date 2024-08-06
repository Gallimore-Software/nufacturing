import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/users/login/login.component';
import { AuthGuard } from './components/auth/auth.guard';
import { RegisterComponent } from './pages/users/signup/register.component';
import { LogoutComponent } from './pages/logout/logout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule,
      ),
    canActivate: [AuthGuard],
  }, // Dashboard with AuthGuard
  {
    path: 'sales',
    loadChildren: () =>
      import('./pages/sales/sales.module').then((m) => m.SalesModule),
    canActivate: [AuthGuard], // Optionally protect this route as well
  },
  {
    path: 'inventory',
    loadChildren: () =>
      import('./pages/inventory/inventory.module').then(
        (m) => m.InventoryModule,
      ),
    canActivate: [AuthGuard], // Optionally protect this route as well
  },
  {
    path: 'receiving',
    loadChildren: () =>
      import('./pages/receiving/receiving.module').then(
        (m) => m.ReceivingModule,
      ),
    canActivate: [AuthGuard], // Optionally protect this route as well
  },
  {
    path: 'vendors',
    loadChildren: () =>
      import('./pages/vendors/vendors.module').then((m) => m.VendorsModule),
    canActivate: [AuthGuard], // Optionally protect this route as well
  },
  {
    path: 'production',
    loadChildren: () =>
      import('./pages/production/production.module').then(
        (m) => m.ProductionModule,
      ),
    canActivate: [AuthGuard], // Optionally protect this route as well
  },
  {
    path: 'product-development',
    loadChildren: () =>
      import('./pages/product-development/product-development.module').then(
        (m) => m.ProductDevelopmentModule,
      ),
    canActivate: [AuthGuard], // Optionally protect this route as well
  },
  {
    path: 'quality',
    loadChildren: () =>
      import('./pages/quality/quality.module').then((m) => m.QualityModule),
    canActivate: [AuthGuard], // Optionally protect this route as well
  },
  {
    path: 'human-resources',
    loadChildren: () =>
      import('./pages/human-resources/human-resources.module').then(
        (m) => m.HumanResourcesModule,
      ),
    canActivate: [AuthGuard], // Optionally protect this route as well
  },
  {
    path: 'logout',
    component: LogoutComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
