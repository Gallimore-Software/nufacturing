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
import { MatIconModule } from '@angular/material/icon';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsComponent } from './ingredients.component';
import { IngredientsInfoComponent } from './ingredients-info/ingredients-info.component';
import { SupplementFactsDetailsComponent } from './supplement-facts-details/supplement-facts-details.component';
import { SupplementFactsOnlyComponent } from './supplement-facts-only/supplement-facts-only.component';

@NgModule({
  declarations: [
    IngredientsComponent,
    IngredientsInfoComponent,
    SupplementFactsDetailsComponent,
    SupplementFactsOnlyComponent, // Updated to PascalCase for the class name
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
  exports: [
    IngredientsComponent,
    IngredientsInfoComponent,
    SupplementFactsDetailsComponent,
    SupplementFactsOnlyComponent,
  ],
})
export class IngredientsModule {}
