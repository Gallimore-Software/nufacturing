import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottlingRecordsComponent } from './bottling-records.component';

const routes: Routes = [
  {
    path: '',
    component: BottlingRecordsComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottlingRecordsRoutingModule {}
