import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MixingRecordsComponent } from './mixing-records.component';

const routes: Routes = [
  { path: '', component: MixingRecordsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MixingRecordsRoutingModule {}
