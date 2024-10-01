import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { VendorsService, Vendor } from 'src/app/services/vendors.service'; // Adjust the path as needed
import { InventoryService } from '../../inventory.service';

@Component({
  selector: 'app-new-inventory-dialog',
  templateUrl: './new-inventory-dialog.component.html',
  styleUrls: ['./new-inventory-dialog.component.scss'],
})
export class NewInventoryDialogComponent implements OnInit {
  inventoryForm: FormGroup;
  filteredVendors: Vendor[] = [];

  constructor(
    private dialogRef: MatDialogRef<NewInventoryDialogComponent>,
    private fb: FormBuilder,
    private vendorService: VendorsService,
    private inventoryService: InventoryService,

    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.inventoryForm = this.fb.group({
      sku: ['', Validators.required],
      displayName: ['', Validators.required],
      vendor: ['', Validators.required],
      description: ['', Validators.required],
      inventoryCategory: ['', Validators.required],
      type: ['', Validators.required],
      lotCode: ['', Validators.required],
      unitOfMeasurement: ['', Validators.required],
      pricePerUnit: ['', Validators.required],
      quantities: this.fb.group({
        minRestockQuantity: [0, Validators.required],
        inStock: [0, Validators.required],
      }),
      availableQuantity: [0, Validators.required],
      onHoldQuantity: [0, Validators.required],
      quarantinedQuantity: [0, Validators.required],
      createdBy: [this.data.userId],
    });
  }

  ngOnInit() {
    // If the data has an inventory item, populate the form for editing
    if (this.data.inventoryItem) {
      this.inventoryForm.patchValue(this.data.inventoryItem);
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
                if (response.success) {
                  // Filter vendors based on the search term
                  return of(
                    response.data.filter((vendor) =>
                      vendor.displayName
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()),
                    ),
                  );
                }
                return of([]);
              }),
            );
          } else {
            return of([]);
          }
        }),
      )
      .subscribe((filteredVendors: Vendor[]) => {
        this.filteredVendors = filteredVendors;
      });
  }

  onSubmit() {
    if (this.inventoryForm.valid) {
      const newInventoryItem = this.inventoryForm.value;
      console.log('New Inventory Item:', newInventoryItem);

      this.inventoryService.addInventoryItem(newInventoryItem).subscribe(
        (response) => {
          if (response.success) {
            console.log('Inventory item created:', response.data);
            this.dialogRef.close(response.data);
          } else {
            console.error('Failed to create inventory item.');
          }
        },
        (error) => {
          console.error('Error creating inventory item:', error);
        },
      );
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
