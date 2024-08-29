import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportingComponent } from './reporting.component';

const routes: Routes = [
  { path: '', component: ReportingComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportingRoutingModule {}
