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

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerFormComponent,
    CustomerListComponent,
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
    MatButtonModule
  ],
})
export class CustomersModule {}
