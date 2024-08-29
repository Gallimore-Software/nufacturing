import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeighingRecordsComponent } from './weighing-records.component';

const routes: Routes = [
  { path: '', component: WeighingRecordsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeighingRecordsRoutingModule {}
