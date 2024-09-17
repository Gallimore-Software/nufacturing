import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDevelopmentComponent } from './product-development.component';
import { FormulasComponent } from './components/formulas/formulas.component';
import { ProductSkusComponent } from './components/product-skus/product-skus.component';
import { ProductTypesComponent } from './components/product-types/product-types.component';
import { ResearchAndDevelopmentComponent } from './components/research-and-development/research-and-development.component';

const routes: Routes = [
  {
    path: '',
    component: ProductDevelopmentComponent,
    children: [
      {
        path: 'formulas',
        loadChildren: () =>
          import('./components/formulas/formulas.module').then(
            (m) => m.FormulasModule,
          ),
      },
      {
        path: 'product-skus',
        loadChildren: () =>
          import('./components/product-skus/product-skus.module').then(
            (m) => m.ProductSkusModule,
          ),
      },
      {
        path: 'product-types',
        component: ProductTypesComponent,
      },
      {
        path: 'research-and-development',
        component: ResearchAndDevelopmentComponent,
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
export class ProductDevelopmentRoutingModule {}
