import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagingRecordsComponent } from './packaging-records.component';

const routes: Routes = [
  { path: '', component: PackagingRecordsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PackagingRecordsRoutingModule {}
