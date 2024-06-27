import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { InfoComponent } from './Components/pages/info/info.component';
import { IngredientsComponent } from './Components/pages/ingredients/ingredients.component';
import { BomComponent } from './Components/pages/bom/bom.component';
import { QuoteSheetComponent } from './Components/pages/quote-sheet/quote-sheet.component';
import { ComponentPricingComponent } from './Components/pages/component-pricing/component-pricing.component';
import { NfgSampleBomComponent } from './Components/pages/nfg-sample-bom/nfg-sample-bom.component';
import { PreProSamplesComponent } from './Components/pages/pre-pro-samples/pre-pro-samples.component';
import { CocComponent } from './Components/pages/coc/coc.component';
import { MoqOfMoqComponent } from './Components/pages/moq-of-moq/moq-of-moq.component';
import { OverageCalComponent } from './Components/pages/overage-cal/overage-cal.component';
import { LaborComponent } from './Components/pages/labor/labor.component';
import { LabTestingComponent } from './Components/pages/lab-testing/lab-testing.component';
import { PdsComponent } from './Components/pages/pds/pds.component';
import { CustomerApprovalComponent } from './Components/pages/customer-approval/customer-approval.component';
import { WeighingBatchRecordsComponent } from './Components/pages/weighing-batch-records/weighing-batch-records.component';
import { WetGranulationBatchRecordsComponent } from './Components/pages/wet-granulation-batch-records/wet-granulation-batch-records.component';
import { DryingGranulationBatchRecordsComponent } from './Components/pages/drying-granulation-batch-records/drying-granulation-batch-records.component';
import { EncapsulationBatchRecordsComponent } from './Components/pages/encapsulation-batch-records/encapsulation-batch-records.component';
import { BottlingBatchRecordsComponent } from './Components/pages/bottling-batch-records/bottling-batch-records.component';
import { FinalTestingQcSignOffComponent } from './Components/pages/final-testing-qc-sign-off/final-testing-qc-sign-off.component';
import { LabelComponent } from './Components/pages/label/label.component';
import { MixingBatchRecordsComponent } from './Components/pages/mixing-batch-records/mixing-batch-records.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    InfoComponent,
    IngredientsComponent,
    BomComponent,
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
    MixingBatchRecordsComponent
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
