import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UsersTableComponent } from './components/users-table/users-table.component';



@NgModule({
  declarations: [
    AdminComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
