import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BomComponent } from 'src/app/pages/sales/pages/quotes/bom/bom.component';
import { BomModule } from 'src/app/pages/sales/pages/quotes/bom/bom.module';
import { IngredientsModule } from 'src/app/pages/sales/pages/quotes/ingredients/ingredients.module';
import { QuoteRoutingModule } from './quote-routing.module';
import { QuoteComponent } from './quote.component';
import { InfoModule } from './info/info.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [QuoteComponent, BomComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    QuoteRoutingModule,
    IngredientsModule,
    InfoModule,
    FormsModule,
    BomModule,
    RouterModule,
  ],
})
export class QuoteModule {}
