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
import { SupplementFactsDetailsComponent } from './supplement-facts-details/supplement-facts-details.component';
import { supplementFactsOnlyComponent } from './supplement-facts-only/supplement-facts-only.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    IngredientsInfoComponent,
    IngredientsComponent,
    SupplementFactsDetailsComponent,
    supplementFactsOnlyComponent,
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
    MatButtonModule,
    MatIconModule,
  ],
})
export class IngredientsModule {}
