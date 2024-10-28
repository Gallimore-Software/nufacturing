/* eslint-disable no-undef */
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BatchRecordsService } from 'src/app/pages/production/services/batch-records.service';
import { ProductSkusService } from 'src/app/pages/product-development/services/product-skus.service';
import { FormulasService } from 'src/app/pages/product-development/services/formulas.service';
import { UsersService } from 'src/app/pages/users/services/users.service';

// Define interfaces for the expected data structures
interface Batch {
  _id: string;
  batchNumber: string;
  productSKU: string;
  formula: string;
  productionDate: Date;
  expirationDate: Date;
  productionLine: string;
  shift: string;
  quantityProduced: number;
  status: string;
  operator: string;
}

interface ProductSKU {
  _id: string;
  sku: string;
}

interface Formula {
  _id: string;
  name: string;
}

interface Operator {
  _id: string;
  username: string;
}

@Component({
  selector: 'app-create-batch-records',
  templateUrl: './create-batch-records.component.html',
  styleUrls: ['./create-batch-records.component.scss'],
})
export class CreateBatchRecordsComponent implements OnInit {
  batchForm!: FormGroup;
  productSKUs: ProductSKU[] = [];
  formulas: Formula[] = [];
  operators: Operator[] = [];
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private batchRecordsService: BatchRecordsService,
    private userService: UsersService,
    private productskuService: ProductSkusService,
    private formulasService: FormulasService,
    private dialogRef: MatDialogRef<CreateBatchRecordsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { batch?: Batch } // Type the batch data
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

  patchFormWithBatchData(batch: Batch): void {
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
      next: (data: ProductSKU[]) => {
        console.log('Product SKUs:', data); // Debug: Check the data structure
        this.productSKUs = data; // Ensure data is in the expected format
      },
      error: (err) => console.error('Error loading Product SKUs:', err),
    });
  }

  loadFormulas(): void {
    this.formulasService.getFormulas().subscribe({
      next: (data: Formula[]) => {
        console.log('Formulas:', data); // Debug: Check the data structure
        this.formulas = data; // Ensure data is in the expected format
      },
      error: (err) => console.error('Error loading Formulas:', err),
    });
  }

  loadOperators(): void {
    this.userService.getAllUsers().subscribe({
      next: (data: Operator[]) => {
        console.log('Operators:', data); // Debug: Check the data structure
        this.operators = data; // Ensure data is in the expected format
      },
      error: (err) => console.error('Error loading Operators:', err),
    });
  }

  onSubmit(): void {
    if (this.batchForm.valid) {
      const batchData = this.batchForm.value as Batch;

      if (this.isEditMode) {
        this.batchRecordsService
          .updateBatchRecord(this.data.batch!._id, batchData)
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
