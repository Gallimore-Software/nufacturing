import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersRoutingModule } from './customers-routing.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CustomerDetailsDialogComponent } from './components/customer-details-dialog/customer-details-dialog.component';
import { NewCustomerDialogComponent } from './components/new-customer-dialog/new-customer-dialog.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerFormComponent,
    CustomerListComponent,
    CustomerDetailsDialogComponent,
    NewCustomerDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomersRoutingModule,
    MatChipsModule,
    MatCardModule,
    DragDropModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatOptionModule,
    MatDialogModule,
    MatDividerModule,
  ],
})
export class CustomersModule {}
