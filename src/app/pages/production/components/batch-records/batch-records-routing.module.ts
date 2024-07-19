import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchRecordsComponent } from './batch-records.component';

const routes: Routes = [
  {path:'', component:BatchRecordsComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchRecordsRoutingModule { }
