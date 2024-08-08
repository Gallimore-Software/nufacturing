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
    @Inject(MAT_DIALOG_DATA) public data: any // Inject data from the dialog opening
  ) {
    this.inventoryForm = this.fb.group({
      type: [data?.type || '', Validators.required],
      category: [data?.category || '', Validators.required],
      subCategory: [data?.subCategory || ''],
      ingredientName: [data?.items?.[0]?.ingredientName || '', Validators.required],
      pricePerKg: [data?.items?.[0]?.pricePerKg || '', [Validators.required, Validators.min(0)]],
      stockQuantity: [data?.items?.[0]?.stockQuantity || '', [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.inventoryForm.valid) {
      const formValue = this.inventoryForm.value;
      const inventoryData = {
        type: formValue.type,
        category: formValue.category,
        subCategory: formValue.subCategory,
        items: [
          {
            ingredientName: formValue.ingredientName,
            pricePerKg: formValue.pricePerKg,
            stockQuantity: formValue.stockQuantity,
          },
        ],
      };

      this.dialogRef.close(inventoryData);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
