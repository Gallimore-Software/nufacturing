import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [DashboardComponent, DashboardPageComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
  ],
})
export class DashboardModule {}
