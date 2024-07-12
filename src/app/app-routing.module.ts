import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AssetsComponent } from './pages/assets/assets.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { OrdersComponent } from './pages/sales/pages/orders/orders.component';
import { ProductionComponent } from './pages/production/production.component';
import { PurchasingComponent } from './pages/purchasing/purchasing.component';
import { QualityComponent } from './pages/quality/quality.component';
import { ReceivingComponent } from './pages/receiving/receiving.component';
import { ReportingComponent } from './pages/reporting/reporting.component';
import { SalesComponent } from './pages/sales/sales.component';
import { TrainingComponent } from './pages/training/training.component';
import { VendorsComponent } from './pages/vendors/vendors.component';
import { QuoteComponent } from './pages/sales/pages/quotes/quote.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ProductDevelopmentComponent } from './pages/product-development/product-development.component';
import { HumanResourcesComponent } from './pages/human-resources/human-resources.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
  { path: 'dashboard', component: OverviewComponent },
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
