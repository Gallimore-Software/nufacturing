import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QualityComponent } from './quality.component';

const routes: Routes = [
  { path: '', component: QualityComponent, pathMatch: 'full' },
  {
    path: 'fda-audits',
    loadChildren: () =>
      import('./components/fda-audits/fda-audits.module').then(
        (m) => m.FdaAuditsModule,
      ),
  },
  {
    path: 'quality-audits',
    loadChildren: () =>
      import('./components/quality-audits/quality-audits.module').then(
        (m) => m.QualityAuditsModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QualityRoutingModule {}
