import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsComponent } from './ingredients.component';
import { IngredientsInfoComponent } from './ingredients-info/ingredients-info.component';
import { SupplimentFactsOnlyComponent } from './suppliment-facts-only/suppliment-facts-only.component';
import { SupplementFactsDetailsComponent } from './supplement-facts-details/supplement-facts-details.component';

@NgModule({
  declarations: [
    IngredientsInfoComponent,
    IngredientsComponent,
    SupplimentFactsOnlyComponent,
    SupplementFactsDetailsComponent
  ],
  imports: [
    CommonModule,
    IngredientsRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule
  ]
})
export class IngredientsModule { }
