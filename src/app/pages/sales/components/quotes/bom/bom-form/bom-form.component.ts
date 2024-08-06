import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-bom-form',
  templateUrl: './bom-form.component.html',
  styleUrls: ['./bom-form.component.scss'],
})
export class BomFormComponent implements OnInit {
  quoteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private globalService: GlobalServiceService,
  ) {
    this.quoteForm = this.fb.group({
      productName: ['Hangover Dog 50ct'],
      bottlesPerMasterCase: [''],
      capsulesPerBottle: [''],
      bottles: [''],
      capsulesNeededForOrder: [''],
      setupCapsules: [2000],
      totalCapsulesNeeded: [''],
    });
  }

  ngOnInit(): void {
    this.initializeFormValues();
  }

  private initializeFormValues() {
    const orderInfo = this.globalService.getOrderInfo();
    const masterCartonInfo = this.globalService.getMasterCartonInfo();

    this.quoteForm.patchValue({
      bottlesPerMasterCase: masterCartonInfo.bottlesPerMasterCase,
      capsulesPerBottle: orderInfo.capsulesPerBottle,
      bottles: orderInfo.launchQty,
    });

    this.updateCapsulesNeededForOrder();
  }

  private updateCapsulesNeededForOrder() {
    const capsulesPerBottle = this.quoteForm.get('capsulesPerBottle')?.value;
    const bottles = this.quoteForm.get('bottles')?.value;
    const capsulesNeededForOrder = capsulesPerBottle * bottles;

    this.quoteForm.patchValue({
      capsulesNeededForOrder: capsulesNeededForOrder,
    });

    this.updateTotalCapsulesNeeded();
  }

  updateTotalCapsulesNeeded() {
    const setupCapsules = this.quoteForm.get('setupCapsules')?.value;
    const capsulesNeededForOrder = this.quoteForm.get(
      'capsulesNeededForOrder',
    )?.value;
    const totalCapsulesNeeded = setupCapsules + capsulesNeededForOrder;

    this.quoteForm.patchValue({
      totalCapsulesNeeded: totalCapsulesNeeded,
    });
  }

  onSubmit() {
    console.log(this.quoteForm.value);
  }
}
