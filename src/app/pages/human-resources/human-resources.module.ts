import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumanResourcesComponent } from './human-resources.component';
import { HumanResourcesRoutingModule } from './human-resources-routing.module';
import { TrainingModule } from './components/training/training.module';
import { UsersModule } from './components/users/users.module';

@NgModule({
  declarations: [HumanResourcesComponent],
  imports: [
    CommonModule,
    HumanResourcesRoutingModule,
    TrainingModule,
    UsersModule,
  ],
})
export class HumanResourcesModule {}
