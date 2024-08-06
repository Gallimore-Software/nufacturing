import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionPlanningComponent } from './production-planning.component';

const routes: Routes = [
  { path: '', component: ProductionPlanningComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductionPlanningRoutingModule {}
