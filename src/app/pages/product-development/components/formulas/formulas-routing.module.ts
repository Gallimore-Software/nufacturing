import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulasComponent } from './formulas.component';
import { CreateFormulasComponent } from './create-formulas/create-formulas.component';
import { ListFormulaComponent } from './list-formulas/list-formulas.component';

const routes: Routes = [
  {
    path: '',
    component: FormulasComponent,
    children: [
      {
        path: '',
        redirectTo: 'list-formulas',
        pathMatch: 'full',
      },
      {
        path: 'create-formulas',
        component: CreateFormulasComponent,
      },
      {
        path: 'list-formulas',
        component: ListFormulaComponent,
      },
    ],
  },
  //   {
  //     path: '',
  //     component: QuotesComponent,
  //     children: [
  //       {
  //         path: 'info',
  //         loadChildren: () =>
  //           import('./info/info.module').then((m) => m.InfoModule),
  //       },
  //       {
  //         path: 'ingredients',
  //         loadChildren: () =>
  //           import('./ingredients/ingredients.module').then(
  //             (m) => m.IngredientsModule
  //           ),
  //       },
  //       {
  //         path: 'bom',
  //         loadChildren: () => import('./bom/bom.module').then((m) => m.BomModule),
  //       },
  //     ],
  //   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulasRoutingModule {}
