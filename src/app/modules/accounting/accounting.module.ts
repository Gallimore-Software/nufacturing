import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ExpensesComponent } from './expenses/expenses.component';



@NgModule({
  declarations: [
    SalesComponent,
    InventoryComponent,
    ExpensesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountingModule { }
