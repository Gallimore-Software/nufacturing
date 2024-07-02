import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { QuoteSheetComponent } from './components/widgets/quote-sheet/quote-sheet.component';
import { ComponentPricingComponent } from './components/widgets/component-pricing/component-pricing.component';
import { NfgSampleBomComponent } from './components/widgets/nfg-sample-bom/nfg-sample-bom.component';
import { PreProSamplesComponent } from './components/widgets/pre-pro-samples/pre-pro-samples.component';
import { CocComponent } from './components/widgets/coc/coc.component';
import { MoqOfMoqComponent } from './components/widgets/moq-of-moq/moq-of-moq.component';
import { OverageCalComponent } from './components/widgets/overage-cal/overage-cal.component';
import { LaborComponent } from './components/widgets/labor/labor.component';
import { LabTestingComponent } from './components/widgets/lab-testing/lab-testing.component';
import { PdsComponent } from './components/widgets/pds/pds.component';
import { CustomerApprovalComponent } from './components/widgets/customer-approval/customer-approval.component';
import { WeighingBatchRecordsComponent } from './components/widgets/weighing-batch-records/weighing-batch-records.component';
import { WetGranulationBatchRecordsComponent } from './components/widgets/wet-granulation-batch-records/wet-granulation-batch-records.component';
import { DryingGranulationBatchRecordsComponent } from './components/widgets/drying-granulation-batch-records/drying-granulation-batch-records.component';
import { EncapsulationBatchRecordsComponent } from './components/widgets/encapsulation-batch-records/encapsulation-batch-records.component';
import { BottlingBatchRecordsComponent } from './components/widgets/bottling-batch-records/bottling-batch-records.component';
import { FinalTestingQcSignOffComponent } from './components/widgets/final-testing-qc-sign-off/final-testing-qc-sign-off.component';
import { LabelComponent } from './components/widgets/label/label.component';
import { MixingBatchRecordsComponent } from './components/widgets/mixing-batch-records/mixing-batch-records.component';
import { IngredientsModule } from './components/widgets/ingredients/ingredients.module';
import { BomModule } from './components/widgets/bom/bom.module';
import { CustomerPackagedProductsComponent } from './modules/customers/components/customer-detail/components/customer-packaged-products/customer-packaged-products.component';
import { InventoryItemDetailComponent } from './modules/inventory/components/inventory-item-detail/inventory-item-detail.component';
import { InventoryItemsTableComponent } from './modules/inventory/components/inventory-items-table/inventory-items-table.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    QuoteSheetComponent,
    ComponentPricingComponent,
    NfgSampleBomComponent,
    PreProSamplesComponent,
    CocComponent,
    MoqOfMoqComponent,
    OverageCalComponent,
    LaborComponent,
    LabTestingComponent,
    PdsComponent,
    CustomerApprovalComponent,
    WeighingBatchRecordsComponent,
    WetGranulationBatchRecordsComponent,
    DryingGranulationBatchRecordsComponent,
    EncapsulationBatchRecordsComponent,
    BottlingBatchRecordsComponent,
    FinalTestingQcSignOffComponent,
    LabelComponent,
    MixingBatchRecordsComponent,
    CustomerPackagedProductsComponent,
    InventoryItemsTableComponent,
    InventoryItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    IngredientsModule,
    BomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
