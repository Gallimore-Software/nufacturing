import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
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

const routes: Routes = [
  { path: 'info', loadChildren: () => import('./Components/pages/info/info.module').then(m => m.InfoModule) }, 
  { path: 'ingredients', loadChildren: () => import('./Components/pages/ingredients/ingredients.module').then(m => m.IngredientsModule) },
  {path:'bom', component:BomComponent},
  { path: 'label', component: LabelComponent },
  { path: 'quote-sheet', component: QuoteSheetComponent },
  { path: 'component-pricing', component: ComponentPricingComponent },
  { path: 'nfg-sample-bom', component: NfgSampleBomComponent },
  { path: 'pre-pro-samples', component: PreProSamplesComponent },
  { path: 'coc', component: CocComponent },
  { path: 'moq-of-moq', component: MoqOfMoqComponent },
  { path: 'overage-cal', component: OverageCalComponent },
  { path: 'labor', component: LaborComponent },
  { path: 'lab-testing', component: LabTestingComponent },
  { path: 'pds', component: PdsComponent },
  { path: 'customer-approval', component: CustomerApprovalComponent },
  { path: 'weighing-batch-records', component: WeighingBatchRecordsComponent },
  { path: 'mixing-batch-records', component: MixingBatchRecordsComponent },
  { path: 'wet-granulation-batch-records', component: WetGranulationBatchRecordsComponent },
  { path: 'drying-granulation-batch-records', component: DryingGranulationBatchRecordsComponent },
  { path: 'encapsulation-batch-records', component: EncapsulationBatchRecordsComponent },
  { path: 'bottling-batch-records', component: BottlingBatchRecordsComponent },
  { path: 'final-testing-qc-sign-off', component: FinalTestingQcSignOffComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
