import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulasComponent } from './formulas.component';
import { CreateFormulasComponent } from './create-formulas/create-formulas.component';
import { ListFormulaComponent } from './list-formulas/list-formulas.component';
import { MatIconModule } from '@angular/material/icon';
import { FormulasRoutingModule } from './formulas-routing.module';
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
import { ConfirmDialogComponent } from '../../../../components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    FormulasComponent,
    CreateFormulasComponent,
    ListFormulaComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    FormulasRoutingModule,
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
  ],
})
export class FormulasModule {}
