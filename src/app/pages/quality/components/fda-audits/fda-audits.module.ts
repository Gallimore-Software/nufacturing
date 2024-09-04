import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FdaAuditsComponent } from './fda-audits.component';
import { FdaAuditsRoutingModule } from './fda-audits-routing.module';

@NgModule({
  declarations: [FdaAuditsComponent],
  imports: [CommonModule, FdaAuditsRoutingModule],
})
export class FdaAuditsModule {}
