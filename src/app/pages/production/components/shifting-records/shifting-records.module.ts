import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftingRecordsRoutingModule } from './shifting-records-routing.module';
import { ShiftingRecordsComponent } from './shifting-records.component';

@NgModule({
  declarations: [ShiftingRecordsComponent],
  imports: [CommonModule, ShiftingRecordsRoutingModule],
})
export class ShiftingRecordsModule {}
