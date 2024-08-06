import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulasComponent } from './formulas.component';
import { CreateFormulasComponent } from './create-formulas/create-formulas.component';
import { ListFormulasComponent } from './list-formulas/list-formulas.component';
import { MatIconModule } from '@angular/material/icon';
import { FormulasRoutingModule } from './formulas-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    FormulasComponent,
    CreateFormulasComponent,
    ListFormulasComponent,
  ],
  imports: [
    CommonModule,
    FormulasRoutingModule,
    MatIconModule,
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
  ],
})
export class FormulasModule {}
