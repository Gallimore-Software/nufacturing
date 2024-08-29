import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionComponent } from './production.component';
import { BatchRecordsModule } from './components/batch-records/batch-records.module';
import { ShiftingRecordsModule } from './components/shifting-records/shifting-records.module';
import { DepositorRecordsModule } from './components/depositor-records/depositor-records.module';
import { PackagingRecordsModule } from './components/packaging-records/packaging-records.module';
import { MixingRecordsModule } from './components/mixing-records/mixing-records.module';
import { WeighingRecordsModule } from './components/weighing-records/weighing-records.module';
import { BottlingRecordsModule } from './components/bottling-records/bottling-records.module';
import { EncapsulationRecordsModule } from './components/encapsulation-records/encapsulation-records.module';
import { MasterManufacturingRecordsModule } from './components/master-manufacturing-records/master-manufacturing-records.module';
import { AssetsModule } from './components/assets/assets.module';
import { ProductionPlanningModule } from './components/production-planning/production-planning.module';
import { ProductionRoutingModule } from './production-routing.module';
import { ReportingModule } from './components/reporting/reporting.module';

@NgModule({
  declarations: [ProductionComponent],
  imports: [
    CommonModule,
    ProductionRoutingModule,
    BatchRecordsModule,
    ShiftingRecordsModule,
    DepositorRecordsModule,
    PackagingRecordsModule,
    MixingRecordsModule,
    WeighingRecordsModule,
    BottlingRecordsModule,
    EncapsulationRecordsModule,
    MasterManufacturingRecordsModule,
    AssetsModule,
    ProductionPlanningModule,
    ReportingModule,
  ],
})
export class ProductionModule {}
