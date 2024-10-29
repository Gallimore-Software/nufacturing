/* eslint-disable no-undef */
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { InventoryService } from 'src/app/pages/inventory/inventory.service';
import {
  VendorsService,
  Vendor,
} from 'src/app/pages/vendors/services/vendors.service'; // Adjust the path as needed

// Define an interface for the dialog data
interface DialogData {
  userId: string;
  inventoryItem?: InventoryItem;
}

// Define an interface for InventoryItem if it has specific properties
interface InventoryItem {
  vendor: string;
  displayName: string;
  sku: string;
  description: string;
  inventoryCategory: string;
  type: string;
  lotCode: string;
  unitOfMeasurement: string;
  pricePerUnit: number;
  quantities: {
    minRestockQuantity: number;
    inStock: number;
  };
  availableQuantity: number;
  onHoldQuantity: number;
  quarantinedQuantity: number;
}

@Component({
  selector: 'app-new-inventory-dialog',
  templateUrl: './new-inventory-dialog.component.html',
  styleUrls: ['./new-inventory-dialog.component.scss'],
})
export class NewInventoryDialogComponent implements OnInit {
  inventoryForm: FormGroup;
  isSubmitting: boolean = false;
  filteredVendors: Vendor[] = [];

  constructor(
    private dialogRef: MatDialogRef<NewInventoryDialogComponent>,
    private fb: FormBuilder,
    private vendorService: VendorsService,
    private inventoryService: InventoryService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData // Type data as DialogData
  ) {
    this.inventoryForm = this.fb.group({
      vendor: [data.inventoryItem?.vendor || '', Validators.required],
      displayName: [data.inventoryItem?.displayName || '', Validators.required],
      sku: [data.inventoryItem?.sku || '', Validators.required],
      description: [data.inventoryItem?.description || '', Validators.required],
      inventoryCategory: [
        data.inventoryItem?.inventoryCategory || '',
        Validators.required,
      ],
      type: [data.inventoryItem?.type || '', Validators.required],
      lotCode: [data.inventoryItem?.lotCode || '', Validators.required],
      unitOfMeasurement: [
        data.inventoryItem?.unitOfMeasurement || '',
        Validators.required,
      ],
      pricePerUnit: [
        data.inventoryItem?.pricePerUnit || 0,
        Validators.required,
      ],
      quantities: this.fb.group({
        minRestockQuantity: [
          data.inventoryItem?.quantities.minRestockQuantity || 0,
          Validators.required,
        ],
        inStock: [
          data.inventoryItem?.quantities.inStock || 0,
          Validators.required,
        ],
      }),
      availableQuantity: [
        data.inventoryItem?.availableQuantity || 0,
        Validators.required,
      ],
      onHoldQuantity: [
        data.inventoryItem?.onHoldQuantity || 0,
        Validators.required,
      ],
      quarantinedQuantity: [
        data.inventoryItem?.quarantinedQuantity || 0,
        Validators.required,
      ],
      createdBy: [data.userId],
    });
  }

  ngOnInit() {
    if (this.data.inventoryItem) {
      console.log('inventory data:', this.data.inventoryItem);
      this.inventoryForm.patchValue(this.data.inventoryItem);
    } else {
      console.log('No Data');
    }

    // Subscribe to the vendor input value changes
    this.inventoryForm
      .get('vendor')
      ?.valueChanges.pipe(
        debounceTime(300),
        switchMap((searchTerm) => {
          if (searchTerm) {
            return this.vendorService.getVendors().pipe(
              switchMap((response) => {
                if (response) {
                  console.log(response);
                  // Filter vendors based on the search term
                  return of(
                    response.filter((vendor) =>
                      vendor.displayName
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    )
                  );
                } else {
                  console.log('No Vendor Data:', JSON.stringify(response));
                }
                return of([]);
              })
            );
          } else {
            return of([]);
          }
        })
      )
      .subscribe((filteredVendors: Vendor[]) => {
        this.filteredVendors = filteredVendors;
      });

    // Add SKU duplicate check
    this.inventoryForm
      .get('sku')
      ?.valueChanges.pipe(
        debounceTime(300),
        switchMap((skuValue) => {
          if (skuValue) {
            return this.inventoryService.checkSkuExists(skuValue);
          } else {
            return of(null);
          }
        })
      )
      .subscribe((skuExists) => {
        if (skuExists) {
          // Show error message or mark SKU as invalid
          this.inventoryForm.get('sku')?.setErrors({ skuExists: true });
          console.error('SKU already exists');
        } else {
          this.inventoryForm.get('sku')?.setErrors(null);
        }
      });
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.inventoryForm.valid) {
      this.isSubmitting = true;
      const newInventoryItem = this.inventoryForm.value;
      console.log('New Inventory Item:', newInventoryItem);

      this.inventoryService.addInventoryItem(newInventoryItem).subscribe(
        (response) => {
          if (response.success) {
            console.log('Inventory item created:', response.data);
            this.isSubmitting = false;
            this.dialogRef.close(response.data);
          } else {
            console.error('Failed to create inventory item.');
            this.isSubmitting = false;
          }
        },
        (error) => {
          console.error('Error creating inventory item:', error);
        }
      );
    } else {
      console.log('Error while saving');
      this.inventoryForm.markAllAsTouched(); // Highlight all invalid fields
      return;
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
