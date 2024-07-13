import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualityComponent } from './quality.component';
import { QualityAuditsComponent } from './components/quality-audits/quality-audits.component';

@NgModule({
  declarations: [QualityComponent, QualityAuditsComponent],
  imports: [CommonModule],
})
export class QualityModule {}
