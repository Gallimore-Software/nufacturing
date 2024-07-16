import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { OrdersNavigationComponent } from './components/orders-navigation/orders-navigation.component';
import { QuotesNavigationComponent } from './components/quotes-navigation/quotes-navigation.component';
import { SalesDashboardComponent } from './components/sales-dashboard/sales-dashboard.component';
import { SalesRoutingModule } from './sales-routing.module';

@NgModule({
  declarations: [
    SalesComponent,
    SalesDashboardComponent,
    OrdersNavigationComponent,
    QuotesNavigationComponent,
  ],
  imports: [CommonModule, SalesRoutingModule],
})
export class SalesModule {}
