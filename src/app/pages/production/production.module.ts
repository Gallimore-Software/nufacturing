import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionComponent } from './production.component';
import { BatchRecordsComponent } from './components/batch-records/batch-records.component';
import { BottlingComponent } from './components/batch-records/components/bottling/bottling.component';
import { EncapsulationComponent } from './components/batch-records/components/encapsulation/encapsulation.component';
import { MixingComponent } from './components/batch-records/components/mixing/mixing.component';
import { WeighingComponent } from './components/batch-records/components/weighing/weighing.component';
import { ProductionPlanningComponent } from './components/production-planning/production-planning.component';

@NgModule({
  declarations: [
    BottlingComponent,
    EncapsulationComponent,
    MixingComponent,
    ProductionPlanningComponent,
    WeighingComponent,
    ProductionComponent,
    BatchRecordsComponent,
  ],
  imports: [CommonModule],
})
export class ProductionModule {}
