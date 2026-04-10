import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchRecordsRoutingModule } from './batch-records-routing.module';
import { BatchRecordsComponent } from './batch-records.component';
import { ListBatchRecordsComponent } from './list-batch-records/list-batch-records.component';
import { CreateBatchRecordsComponent } from './create-batch-records/create-batch-records.component';
import { BatchDetailDialogComponent } from './batch-detail-dialog/batch-detail-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    BatchRecordsComponent,
    ListBatchRecordsComponent,
    CreateBatchRecordsComponent,
    BatchDetailDialogComponent,
  ],
  imports: [
    CommonModule,
    BatchRecordsRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSortModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
  ],
})
export class BatchRecordsModule {}
