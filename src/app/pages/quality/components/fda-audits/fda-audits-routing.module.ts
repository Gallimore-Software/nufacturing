import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FdaAuditsComponent } from './fda-audits.component';

const routes: Routes = [
  { path: '', component: FdaAuditsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FdaAuditsRoutingModule {}
