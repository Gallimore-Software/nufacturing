import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HumanResourcesComponent } from './human-resources.component';

const routes: Routes = [
  { path: '', component: HumanResourcesComponent, pathMatch: 'full' },
  {
    path: 'training',
    loadChildren: () =>
      import('./components/training/training.module').then(
        (m) => m.TrainingModule,
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./components/users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HumanResourcesRoutingModule {}
