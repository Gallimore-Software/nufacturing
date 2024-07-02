import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
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

const routes: Routes = [
  { path: 'info', loadChildren: () => import('./components/widgets/info/info.module').then(m => m.InfoModule) }, 
  { path: 'ingredients', loadChildren: () => import('./components/widgets/ingredients/ingredients.module').then(m => m.IngredientsModule) },
  { path: 'bom', loadChildren: () => import('./components/widgets/bom/bom.module').then(m => m.BomModule)},
  { path: 'dashboard', component: DashboardComponent },
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
