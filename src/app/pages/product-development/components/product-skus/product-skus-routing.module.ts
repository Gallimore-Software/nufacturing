import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSkusComponent } from './product-skus.component';
import { CreateProductSkusComponent } from './create-product-skus/create-product-skus.component';
import { ListProductSkusComponent } from './list-product-skus/list-product-skus.component';

const routes: Routes = [
  {
    path: '',
    component: ProductSkusComponent,
    children: [
      {
        path: '',
        redirectTo: 'list-product-skus',
        pathMatch: 'full',
      },
      {
        path: 'create-product-skus',
        component: CreateProductSkusComponent,
      },
      {
        path: 'list-product-skus',
        component: ListProductSkusComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductSKUsRoutingModule {}
