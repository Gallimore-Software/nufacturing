import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionPlanningRoutingModule } from './production-planning-routing.module';
import { WeighingCalendarComponent } from './weighing-calendar/weighing-calendar.component';
import { MixingCalendarComponent } from './mixing-calendar/mixing-calendar.component';
import { EncapsulationCalendarComponent } from './encapsulation-calendar/encapsulation-calendar.component';
import { CapsuleBottlingCalendarComponent } from './capsule-bottling-calendar/capsule-bottling-calendar.component';
import { PowderBottlingCalendarComponent } from './powder-bottling-calendar/powder-bottling-calendar.component';
import { StickPackCalendarComponent } from './stick-pack-calendar/stick-pack-calendar.component';
import { CoPackCalendarComponent } from './co-pack-calendar/co-pack-calendar.component';

@NgModule({
  declarations: [
    WeighingCalendarComponent,
    MixingCalendarComponent,
    EncapsulationCalendarComponent,
    CapsuleBottlingCalendarComponent,
    PowderBottlingCalendarComponent,
    StickPackCalendarComponent,
    CoPackCalendarComponent,
  ],
  imports: [CommonModule, ProductionPlanningRoutingModule],
})
export class ProductionPlanningModule {}
