import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { OrdersNavigationComponent } from './components/orders-navigation/orders-navigation.component';
import { QuotesNavigationComponent } from './components/quotes-navigation/quotes-navigation.component';
import { SalesDashboardComponent } from './components/sales-dashboard/sales-dashboard.component';
import { SalesRoutingModule } from './sales-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    SalesComponent,
    SalesDashboardComponent,
    OrdersNavigationComponent,
    QuotesNavigationComponent,
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule,
  ],
})
export class SalesModule {}
