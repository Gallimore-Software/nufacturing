import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositorRecordsComponent } from './depositor-records.component';

const routes: Routes = [
  { path: '', component: DepositorRecordsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositorRecordsRoutingModule {}
