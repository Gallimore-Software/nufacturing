import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AssetsComponent } from './pages/assets/assets.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductionComponent } from './pages/production/production.component';
import { PurchasingComponent } from './pages/purchasing/purchasing.component';
import { QualityComponent } from './pages/quality/quality.component';
import { ReceivingComponent } from './pages/receiving/receiving.component';
import { ReportingComponent } from './pages/reporting/reporting.component';
import { SalesComponent } from './pages/sales/sales.component';
import { TrainingComponent } from './pages/training/training.component';
import { VendorsComponent } from './pages/vendors/vendors.component';
import { QuoteComponent } from './pages/quotes/quote.component';
import { OverviewComponent } from './pages/overview/overview.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
  { path: 'accounting', component: AccountingComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'assets', component: AssetsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'production', component: ProductionComponent },
  { path: 'purchasing', component: PurchasingComponent },
  { path: 'quality', component: QualityComponent },
  { path: 'quotes', component: QuoteComponent },
  { path: 'receiving', component: ReceivingComponent },
  { path: 'reporting', component: ReportingComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'vendors', component: VendorsComponent },
  { path: 'overview', component: OverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
