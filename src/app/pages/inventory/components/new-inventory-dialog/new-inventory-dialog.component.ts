import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-inventory-dialog',
  templateUrl: './new-inventory-dialog.component.html',
  styleUrls: ['./new-inventory-dialog.component.scss'],
})
export class NewInventoryDialogComponent {
  inventoryForm: FormGroup;
  showPricingTable = false;

  // For demonstration purposes, this could be fetched from an API
  filteredVendors = ['Vendor1', 'Vendor2'];
  filteredFormulas = ['Formula1', 'Formula2'];
  filteredProductSkus = ['Product1', 'Product2'];
  filteredPos = ['PO1', 'PO2'];

  constructor(
    private dialogRef: MatDialogRef<NewInventoryDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.inventoryForm = this.fb.group({
      vendor: ['', Validators.required],
      displayName: ['', Validators.required],
      ingredientSku: ['', Validators.required],
      scientificName: ['', Validators.required],
      description: [''],
      picture: [null],
      associatedFormulas: [''],
      associatedProductSkus: [''],
      ingredientBatchNumber: [''],
      assignedPo: [''],
      certificateOfAuthenticity: [null],
      inventoryCategory: ['', Validators.required],
      type: ['', Validators.required],
      lotCode: [''],
      unitOfMeasurement: ['', Validators.required],
      minOrderQuantity: [''],
      pricePerQuantity: [''],
      inStock: ['', Validators.required],
      quantityAvailable: [''],
      onHold: [''],
      onHoldChance: [''],
      allocated: [''],
      quarantined: [''],
      associatedLabTest: [''],
    });
  }

  togglePricingTable(event: any) {
    this.showPricingTable = event.checked;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.inventoryForm.patchValue({ picture: file });
  }

  onCertificateUpload(event: any) {
    const file = event.target.files[0];
    this.inventoryForm.patchValue({ certificateOfAuthenticity: file });
  }

  onSubmit() {
    if (this.inventoryForm.valid) {
      this.dialogRef.close(this.inventoryForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
