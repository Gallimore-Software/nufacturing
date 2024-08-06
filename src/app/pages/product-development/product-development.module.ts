import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDevelopmentComponent } from './product-development.component';
import { ProductDevelopmentRoutingModule } from './product-development-routing.module';
import { FormulasComponent } from './components/formulas/formulas.component';
import { ProductSkusComponent } from './components/product-skus/product-skus.component';
import { ProductTypesComponent } from './components/product-types/product-types.component';
import { ResearchAndDevelopmentComponent } from './components/research-and-development/research-and-development.component';
import { FormulasModule } from './components/formulas/formulas.module';

@NgModule({
  declarations: [
    ProductDevelopmentComponent,
    ProductSkusComponent,
    ProductTypesComponent,
    ResearchAndDevelopmentComponent,
  ],
  imports: [CommonModule, ProductDevelopmentRoutingModule, FormulasModule],
})
export class ProductDevelopmentModule {}
