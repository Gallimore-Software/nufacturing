import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualityComponent } from './quality.component';
import { FdaAuditsModule } from './components/fda-audits/fda-audits.module';
import { QualityRoutingModule } from './quality-routing.module';
import { QualityAuditsModule } from './components/quality-audits/quality-audits.module';

@NgModule({
  declarations: [QualityComponent],
  imports: [
    CommonModule,
    FdaAuditsModule,
    QualityAuditsModule,
    QualityRoutingModule,
  ],
})
export class QualityModule {}
