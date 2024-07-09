import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AccountingComponent } from './accounting.component';



@NgModule({
  declarations: [
    SalesComponent,
    InventoryComponent,
    ExpensesComponent,
    AccountingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountingModule { }
