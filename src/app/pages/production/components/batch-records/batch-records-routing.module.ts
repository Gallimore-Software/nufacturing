import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchRecordsComponent } from './batch-records.component';
import { ListBatchRecordsComponent } from './list-batch-records/list-batch-records.component';
import { CreateBatchRecordsComponent } from './create-batch-records/create-batch-records.component';

const routes: Routes = [
  {
    path: '',
    component: BatchRecordsComponent,
    children: [
      {
        path: '',
        redirectTo: 'list-batch-records',
        pathMatch: 'full',
      },
      {
        path: 'list-batch-records',
        component: ListBatchRecordsComponent,
      },
      {
        path: 'create-batch-records',
        component: CreateBatchRecordsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatchRecordsRoutingModule {}
