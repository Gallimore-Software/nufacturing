import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductSkusService } from 'src/app/services/product-skus.service';
import { ListFormulasService } from '../../formulas/list-formulas/list-formulas.service';

@Component({
  selector: 'app-create-product-skus',
  templateUrl: './create-product-skus.component.html',
  styleUrls: ['./create-product-skus.component.scss'],
})
export class CreateProductSkusComponent implements OnInit {
  productSkuForm: FormGroup;
  productTypes = ['Capsule', 'Powder', 'Gummy', 'Tablet'];
  statusOptions = ['active', 'inactive'];
  filteredFormulas: any[] = [];

  constructor(
    private fb: FormBuilder,
    private productSkusService: ProductSkusService,
    private formulasService: ListFormulasService,
    private dialogRef: MatDialogRef<CreateProductSkusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log('data:', data);
    this.productSkuForm = this.fb.group({
      sku: [data?.sku || '', Validators.required],
      productType: [data?.productType || '', Validators.required],
      formula: [
        data?.formula?._id || data?.formula?.name || '',
        Validators.required,
      ],
      packagingInfo: [data?.packagingInfo || ''],
      customerInfo: [data?.customerInfo || ''],
      status: [data?.status || ''],
    });
  }

  ngOnInit(): void {
    this.fetchFormulas();
  }

  get formulaControl(): FormControl {
    return this.productSkuForm.get('formula') as FormControl;
  }

  fetchFormulas(searchTerm: string = ''): void {
    this.formulasService.getFormulas().subscribe((formulas: any[]) => {
      this.filteredFormulas = formulas.filter((formula) =>
        formula.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    });
  }

  onFormulaSearch(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.fetchFormulas(input);
  }

  onFormulaSelected(event: any): void {
    const selectedFormula = this.filteredFormulas.find(
      (formula) => formula.name === event.option.value,
    );
    this.productSkuForm.patchValue({ formula: selectedFormula._id });
  }

  onSubmit(): void {
    if (this.productSkuForm.valid) {
      const productSkuData = this.productSkuForm.value;
      this.dialogRef.close(productSkuData);
    }
  }
}
