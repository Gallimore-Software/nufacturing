import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterManufacturingRecordsComponent } from './master-manufacturing-records.component';

const routes: Routes = [
  {
    path: '',
    component: MasterManufacturingRecordsComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterManifacturingRecordsRoutingModule {}
