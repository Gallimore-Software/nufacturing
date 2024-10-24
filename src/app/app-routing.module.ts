import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/users/login/login.component';
import { AuthGuard } from '../infrastructure/auth/auth.guard';
import { RegisterComponent } from './pages/users/register/register.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RoleGuard } from 'src/infrastructure/auth/role.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthGuard, RoleGuard],
  }, // Dashboard with AuthGuard, RoleGuard
  {
    path: 'sales',
    loadChildren: () =>
      import('./pages/sales/sales.module').then((m) => m.SalesModule),
    canActivate: [AuthGuard, RoleGuard], // Optionally protect this route as well
  },
  {
    path: 'inventory',
    loadChildren: () =>
      import('./pages/inventory/inventory.module').then(
        (m) => m.InventoryModule
      ),
    canActivate: [AuthGuard, RoleGuard], // Optionally protect this route as well
  },
  {
    path: 'receiving',
    loadChildren: () =>
      import('./pages/receiving/receiving.module').then(
        (m) => m.ReceivingModule
      ),
    canActivate: [AuthGuard, RoleGuard], // Optionally protect this route as well
  },
  {
    path: 'vendors',
    loadChildren: () =>
      import('./pages/vendors/vendors.module').then((m) => m.VendorsModule),
    canActivate: [AuthGuard, RoleGuard], // Optionally protect this route as well
  },
  {
    path: 'production',
    loadChildren: () =>
      import('./pages/production/production.module').then(
        (m) => m.ProductionModule
      ),
    canActivate: [AuthGuard, RoleGuard], // Optionally protect this route as well
  },
  {
    path: 'product-development',
    loadChildren: () =>
      import('./pages/product-development/product-development.module').then(
        (m) => m.ProductDevelopmentModule
      ),
    canActivate: [AuthGuard, RoleGuard], // Optionally protect this route as well
  },
  {
    path: 'quality',
    loadChildren: () =>
      import('./pages/quality/quality.module').then((m) => m.QualityModule),
    canActivate: [AuthGuard, RoleGuard], // Optionally protect this route as well
  },
  {
    path: 'human-resources',
    loadChildren: () =>
      import('./pages/human-resources/human-resources.module').then(
        (m) => m.HumanResourcesModule
      ),
    canActivate: [AuthGuard, RoleGuard], // Optionally protect this route as well
  },
  {
    path: 'logout',
    component: LogoutComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard, RoleGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
