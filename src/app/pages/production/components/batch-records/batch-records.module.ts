import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchRecordsRoutingModule } from './batch-records-routing.module';
import { BatchRecordsComponent } from './batch-records.component';


@NgModule({
  declarations: [
    BatchRecordsComponent
  ],
  imports: [
    CommonModule,
    BatchRecordsRoutingModule
  ]
})
export class BatchRecordsModule { }
