import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorsComponent } from './vendors.component';
import { VendorsRoutingModule } from './vendors-routing.module';

@NgModule({
  declarations: [VendorsComponent],
  imports: [CommonModule, VendorsRoutingModule],
})
export class VendorsModule {}
