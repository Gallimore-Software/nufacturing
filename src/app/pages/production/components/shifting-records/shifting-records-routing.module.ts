import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShiftingRecordsComponent } from './shifting-records.component';

const routes: Routes = [
  { path: '', component: ShiftingRecordsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShiftingRecordsRoutingModule {}
