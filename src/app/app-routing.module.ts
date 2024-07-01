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
  // { path: '', component: DashboardComponent, pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'app-info', loadChildren: () => import('./Components/pages/info/info.module').then(m => m.InfoModule) }, 
  { path: 'app-ingredients', loadChildren: () => import('./Components/pages/ingredients/ingredients.module').then(m => m.IngredientsModule) },
  // { path: 'app-info', component: InfoComponent },
  // {path:'app-ingredients', component:IngredientsComponent},
  {path:'app-bom', component:BomComponent},
  { path: 'app-label', component: LabelComponent },
  { path: 'app-quote-sheet', component: QuoteSheetComponent },
  { path: 'app-component-pricing', component: ComponentPricingComponent },
  { path: 'app-nfg-sample-bom', component: NfgSampleBomComponent },
  { path: 'app-pre-pro-samples', component: PreProSamplesComponent },
  { path: 'app-coc', component: CocComponent },
  { path: 'app-moq-of-moq', component: MoqOfMoqComponent },
  { path: 'app-overage-cal', component: OverageCalComponent },
  { path: 'app-labor', component: LaborComponent },
  { path: 'app-lab-testing', component: LabTestingComponent },
  { path: 'app-pds', component: PdsComponent },
  { path: 'app-customer-approval', component: CustomerApprovalComponent },
  { path: 'app-weighing-batch-records', component: WeighingBatchRecordsComponent },
  { path: 'app-mixing-batch-records', component: MixingBatchRecordsComponent },
  { path: 'app-wet-granulation-batch-records', component: WetGranulationBatchRecordsComponent },
  { path: 'app-drying-granulation-batch-records', component: DryingGranulationBatchRecordsComponent },
  { path: 'app-encapsulation-batch-records', component: EncapsulationBatchRecordsComponent },
  { path: 'app-bottling-batch-records', component: BottlingBatchRecordsComponent },
  { path: 'app-final-testing-qc-sign-off', component: FinalTestingQcSignOffComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
