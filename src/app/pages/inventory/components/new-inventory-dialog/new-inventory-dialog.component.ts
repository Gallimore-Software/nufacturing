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
  isSubmitting: boolean = false;
  filteredVendors: Vendor[] = [];

  // Mock vendors for development
  mockVendors: Vendor[] = [
    {
      _id: 'vendor-001',
      displayName: 'Acme Supplies Inc.',
      email: 'contact@acmesupplies.com',
      phone: '+1-800-123-4567',
      address: '123 Industrial Ave, New York, NY',
    } as Vendor,
    {
      _id: 'vendor-002',
      displayName: 'Global Materials LLC',
      email: 'sales@globalmaterials.com',
      phone: '+1-888-555-0123',
      address: '456 Commerce St, Los Angeles, CA',
    } as Vendor,
    {
      _id: 'vendor-003',
      displayName: 'Premium Components Co.',
      email: 'info@premiumcomponents.com',
      phone: '+1-866-777-0456',
      address: '789 Tech Boulevard, Austin, TX',
    } as Vendor,
    {
      _id: 'vendor-004',
      displayName: 'Quality Imports Ltd.',
      email: 'ordering@qualityimports.com',
      phone: '+1-855-888-0789',
      address: '321 Import Blvd, Chicago, IL',
    } as Vendor,
    {
      _id: 'vendor-005',
      displayName: 'Direct Wholesale Corp.',
      email: 'wholesale@directwholesale.com',
      phone: '+1-844-999-0234',
      address: '654 Wholesale Pkwy, Houston, TX',
    } as Vendor,
  ];

  constructor(
    private dialogRef: MatDialogRef<NewInventoryDialogComponent>,
    private fb: FormBuilder,
    private vendorService: VendorsService,
    private inventoryService: InventoryService,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.inventoryForm = this.fb.group({
      vendor: ['', Validators.required],
      displayName: ['', Validators.required],
      sku: ['', Validators.required],
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
    // Try to load vendors from service, fall back to mock data
    this.vendorService.getVendors().subscribe(
      (vendors) => {
        this.filteredVendors =
          vendors && vendors.length > 0 ? vendors : this.mockVendors;
      },
      (error) => {
        console.warn('Error loading vendors, using mock data:', error);
        this.filteredVendors = this.mockVendors;
      }
    );

    // If the data has an inventory item, populate the form for editing
    if (this.data.inventoryItem) {
      console.log('inventory data: ' + this.data.inventoryItem);
      this.inventoryForm.patchValue(this.data.inventoryItem);
    } else {
      console.log('No Data');
    }

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
