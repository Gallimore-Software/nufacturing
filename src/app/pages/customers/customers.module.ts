import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomersTableComponent } from './components/customers-table/customers-table.component';
import { CustomerInformationComponent } from './components/customer-detail/components/customer-information/customer-information.component';
import { CustomerSuppliedInventoryComponent } from './components/customer-detail/components/customer-supplied-inventory/customer-supplied-inventory.component';
import { CustomerPackagedProductsComponent } from './components/customer-detail/components/customer-packaged-products/customer-packaged-products.component';



@NgModule({
  declarations: [
    CustomersComponent,
    CustomerDetailComponent,
    CustomersTableComponent,
    CustomerInformationComponent,
    CustomerSuppliedInventoryComponent,
    CustomerPackagedProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
