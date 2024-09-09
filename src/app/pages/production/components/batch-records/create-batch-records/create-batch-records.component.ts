import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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

  constructor(
    private fb: FormBuilder,
    private batchRecordsService: BatchRecordsService,
    private userService: UsersService,
    private productskuService: ProductSkusService,
    private formulasService: FormulasService,
    private dialogRef: MatDialogRef<CreateBatchRecordsComponent>
  ) {}

  ngOnInit(): void {
    this.initializeForm();
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

  onSubmit() {
    if (this.batchForm.valid) {
      console.log('Form Submitted:', this.batchForm.value); // Debug: Check the form data before submission
      this.batchRecordsService.createBatchRecord(this.batchForm.value).subscribe({
        next: () => {
          this.dialogRef.close(true);
        },
        error: (error) => {
          console.error('Error creating batch record:', error);
        },
      });
    }
  }
}
