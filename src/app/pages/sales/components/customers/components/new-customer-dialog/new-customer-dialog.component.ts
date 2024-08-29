import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-customer-dialog',
  templateUrl: './new-customer-dialog.component.html',
  styleUrls: ['./new-customer-dialog.component.scss'],
})
export class NewCustomerDialogComponent implements OnInit {
  customerForm: FormGroup;
  currentStep = 1;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NewCustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.customerForm = this.fb.group({
      companyName: [data?.companyName || '', Validators.required],
      displayName: [data?.displayName || '', Validators.required],
      primaryContact: this.fb.group({
        firstName: [data?.primaryContact?.firstName || '', Validators.required],
        lastName: [data?.primaryContact?.lastName || '', Validators.required],
        email: [
          data?.primaryContact?.email || '',
          [Validators.required, Validators.email],
        ],
        phone: [data?.primaryContact?.phone || '', Validators.required],
      }),
      complianceContact: this.fb.group({
        firstName: [data?.complianceContact?.firstName || ''],
        lastName: [data?.complianceContact?.lastName || ''],
        email: [data?.complianceContact?.email || ''],
        phone: [data?.complianceContact?.phone || ''],
      }),
      accountingContact: this.fb.group({
        firstName: [data?.accountingContact?.firstName || ''],
        lastName: [data?.accountingContact?.lastName || ''],
        email: [data?.accountingContact?.email || ''],
        phone: [data?.accountingContact?.phone || ''],
      }),
      website: [data?.website || ''],
      businessAddress: this.fb.group({
        line1: [data?.businessAddress?.line1 || ''],
        line2: [data?.businessAddress?.line2 || ''],
        city: [data?.businessAddress?.city || ''],
        state: [data?.businessAddress?.state || ''],
        zip: [data?.businessAddress?.zip || ''],
      }),
      fulfillmentAddress: this.fb.group({
        line1: [data?.fulfillmentAddress?.line1 || ''],
        line2: [data?.fulfillmentAddress?.line2 || ''],
        city: [data?.fulfillmentAddress?.city || ''],
        state: [data?.fulfillmentAddress?.state || ''],
        zip: [data?.fulfillmentAddress?.zip || ''],
      }),
      estimate: [data?.estimate || 0],
    });
  }

  ngOnInit(): void {}

  nextStep(): void {
    if (this.currentStep < 6) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  onSave(): void {
    if (this.customerForm.valid) {
      this.dialogRef.close(this.customerForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
