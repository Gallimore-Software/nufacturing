import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterManufacturingRecordsComponent } from './master-manufacturing-records.component';
import { MasterManifacturingRecordsRoutingModule } from './master-manifacturing-records-routing.module';

@NgModule({
  declarations: [MasterManufacturingRecordsComponent],
  imports: [CommonModule, MasterManifacturingRecordsRoutingModule],
})
export class MasterManufacturingRecordsModule {}
