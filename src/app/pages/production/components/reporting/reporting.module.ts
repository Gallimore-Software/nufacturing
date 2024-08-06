import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingComponent } from './reporting.component';
import { ReportingRoutingModule } from './reporting-routing.module';

@NgModule({
  declarations: [ReportingComponent],
  imports: [CommonModule, ReportingRoutingModule],
})
export class ReportingModule {}
