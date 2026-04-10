import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSkusComponent } from './product-skus.component';
import { CreateProductSkusComponent } from './create-product-skus/create-product-skus.component';
import { ProductSKUsRoutingModule } from './product-skus-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListProductSkusComponent } from './list-product-skus/list-product-skus.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    ProductSkusComponent,
    CreateProductSkusComponent,
    ListProductSkusComponent,
  ],
  imports: [
    CommonModule,
    ProductSKUsRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSelectModule,
    MatAutocompleteModule,
  ],
})
export class ProductSkusModule {}
