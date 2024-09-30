import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BatchRecordsService } from 'src/app/services/batch-records.service';
import { ProductSkusService } from 'src/app/services/product-skus.service';
import { FormulasService } from 'src/app/services/fromulas.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-batch-records',
  templateUrl: './create-batch-records.component.html',
  styleUrls: ['./create-batch-records.component.scss'],
})
export class CreateBatchRecordsComponent implements OnInit {
  batchForm!: FormGroup;
  productSKUs: Array<{ _id: string; sku: string }> = [];
  formulas: Array<{ _id: string; name: string }> = [];
  operators: Array<{ _id: string; username: string }> = [];
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private batchRecordsService: BatchRecordsService,
    private userService: UsersService,
    private productskuService: ProductSkusService,
    private formulasService: FormulasService,
    private dialogRef: MatDialogRef<CreateBatchRecordsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    if (this.data?.batch) {
      this.isEditMode = true;
      this.patchFormWithBatchData(this.data.batch); // Pre-fill form for editing
    }
    this.loadProductSKUs();
    this.loadFormulas();
    this.loadOperators();
  }

  initializeForm(): void {
    this.batchForm = this.fb.group({
      batchNumber: ['', Validators.required],
      productSKU: ['', Validators.required],
      formula: ['', Validators.required],
      productionDate: ['', Validators.required],
      expirationDate: ['', Validators.required],
      productionLine: [''],
      shift: [''],
      quantityProduced: [0, [Validators.required, Validators.min(1)]],
      status: ['in-progress'],
      operator: ['', Validators.required],
    });
  }

  patchFormWithBatchData(batch: any): void {
    this.batchForm.patchValue({
      batchNumber: batch.batchNumber,
      productSKU: batch.productSKU,
      formula: batch.formula,
      productionDate: batch.productionDate,
      expirationDate: batch.expirationDate,
      productionLine: batch.productionLine,
      shift: batch.shift,
      quantityProduced: batch.quantityProduced,
      status: batch.status,
      operator: batch.operator,
    });
  }

  loadProductSKUs(): void {
    this.productskuService.getProductSkus().subscribe({
      next: (data) => {
        console.log('Product SKUs:', data); // Debug: Check the data structure
        this.productSKUs = data; // Ensure data is in the expected format
      },
      error: (err) => console.error('Error loading Product SKUs:', err),
    });
  }

  loadFormulas(): void {
    this.formulasService.getFormulas().subscribe({
      next: (data) => {
        console.log('Formulas:', data); // Debug: Check the data structure
        this.formulas = data; // Ensure data is in the expected format
      },
      error: (err) => console.error('Error loading Formulas:', err),
    });
  }

  loadOperators(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        console.log('Operators:', data); // Debug: Check the data structure
        this.operators = data; // Ensure data is in the expected format
      },
      error: (err) => console.error('Error loading Operators:', err),
    });
  }

  onSubmit(): void {
    if (this.batchForm.valid) {
      const batchData = this.batchForm.value;

      if (this.isEditMode) {
        this.batchRecordsService
          .updateBatchRecord(this.data.batch._id, batchData)
          .subscribe({
            next: () => this.dialogRef.close(true),
            error: (error) =>
              console.error('Error updating batch record:', error),
          });
      } else {
        this.batchRecordsService.createBatchRecord(batchData).subscribe({
          next: () => this.dialogRef.close(true),
          error: (error) =>
            console.error('Error creating batch record:', error),
        });
      }
    }
  }
}
