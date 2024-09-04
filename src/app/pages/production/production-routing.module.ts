import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionComponent } from './production.component';

const routes: Routes = [
  { path: '', component: ProductionComponent, pathMatch: 'full' },
  {
    path: 'batch-records',
    loadChildren: () =>
      import('./components/batch-records/batch-records.module').then(
        (m) => m.BatchRecordsModule,
      ),
  },
  {
    path: 'shifting-records',
    loadChildren: () =>
      import('./components/shifting-records/shifting-records.module').then(
        (m) => m.ShiftingRecordsModule,
      ),
  },
  {
    path: 'depositor-records',
    loadChildren: () =>
      import('./components/depositor-records/depositor-records.module').then(
        (m) => m.DepositorRecordsModule,
      ),
  },
  {
    path: 'packaging-records',
    loadChildren: () =>
      import('./components/packaging-records/packaging-records.module').then(
        (m) => m.PackagingRecordsModule,
      ),
  },
  {
    path: 'mixing-records',
    loadChildren: () =>
      import('./components/mixing-records/mixing-records.module').then(
        (m) => m.MixingRecordsModule,
      ),
  },
  {
    path: 'weighing-records',
    loadChildren: () =>
      import('./components/weighing-records/weighing-records.module').then(
        (m) => m.WeighingRecordsModule,
      ),
  },
  {
    path: 'bottling-records',
    loadChildren: () =>
      import('./components/bottling-records/bottling-records.module').then(
        (m) => m.BottlingRecordsModule,
      ),
  },
  {
    path: 'encapsulation-records',
    loadChildren: () =>
      import(
        './components/encapsulation-records/encapsulation-records.module'
      ).then((m) => m.EncapsulationRecordsModule),
  },
  {
    path: 'master-manufacturing-records',
    loadChildren: () =>
      import(
        './components/master-manufacturing-records/master-manufacturing-records.module'
      ).then((m) => m.MasterManufacturingRecordsModule),
  },
  {
    path: 'assets-and-machines',
    loadChildren: () =>
      import('./components/assets/assets.module').then((m) => m.AssetsModule),
  },
  {
    path: 'production-planning',
    loadChildren: () =>
      import(
        './components/production-planning/production-planning.module'
      ).then((m) => m.ProductionPlanningModule),
  },
  {
    path: 'reporting',
    loadChildren: () =>
      import('./components/reporting/reporting.module').then(
        (m) => m.ReportingModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductionRoutingModule {}
