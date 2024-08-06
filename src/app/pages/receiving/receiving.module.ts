import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceivingComponent } from './receiving.component';
import { ReceivingRoutingModule } from './receiving-routing.module';

@NgModule({
  declarations: [ReceivingComponent],
  imports: [CommonModule, ReceivingRoutingModule],
})
export class ReceivingModule {}
