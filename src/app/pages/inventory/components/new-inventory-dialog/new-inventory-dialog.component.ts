import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-inventory-dialog',
  templateUrl: './new-inventory-dialog.component.html',
  styleUrls: ['./new-inventory-dialog.component.scss'],
})
export class NewInventoryDialogComponent {
  inventoryForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<NewInventoryDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any, // Inject data from the dialog opening
  ) {
    this.inventoryForm = this.fb.group({
      ingredientName: [data?.ingredientName || '', Validators.required],
      unitOfMeasurement: [data?.unitOfMeasurement || '', Validators.required],
      pricePerUnit: [
        data?.pricePerUnit || '',
        [Validators.required, Validators.min(0)],
      ],
      stockQuantity: [
        data?.stockQuantity || '',
        [Validators.required, Validators.min(0)],
      ],
      minOrderQuantity: [
        data?.minOrderQuantity || '',
        [Validators.required, Validators.min(0)],
      ],
    });
  }

  onSubmit() {
    if (this.inventoryForm.valid) {
      const formValue = this.inventoryForm.value;
      const inventoryData = {
        ingredientName: formValue.ingredientName,
        unitOfMeasurement: formValue.unitOfMeasurement,
        pricePerUnit: formValue.pricePerUnit,
        stockQuantity: formValue.stockQuantity,
        minOrderQuantity: formValue.minOrderQuantity,
      };

      this.dialogRef.close(inventoryData);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
