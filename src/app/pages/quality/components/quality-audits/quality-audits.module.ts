import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualityAuditsComponent } from './quality-audits.component';
import { QualityAuditsRoutingModule } from './quality-audits-routing.module';

@NgModule({
  declarations: [QualityAuditsComponent],
  imports: [CommonModule, QualityAuditsRoutingModule],
})
export class QualityAuditsModule {}
