import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeighingComponent } from './weighing/weighing.component';
import { PlanningComponent } from './planning/planning.component';
import { MixingComponent } from './mixing/mixing.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { BottlingComponent } from './bottling/bottling.component';
import { ProductionComponent } from './production.component';
import { BatchRecordsComponent } from './components/batch-records/batch-records.component';



@NgModule({
  declarations: [
    BottlingComponent,
    EncapsulationComponent,
    MixingComponent,
    PlanningComponent,
    WeighingComponent,
    ProductionComponent,
    BatchRecordsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ProductionModule { }
