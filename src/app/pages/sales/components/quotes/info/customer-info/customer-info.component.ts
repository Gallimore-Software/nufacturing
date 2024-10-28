import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface CustomerInfoFormValues {
  customerSku: string;
  companyName: string;
  productName: string;
  brandName: string;
}

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent implements OnInit {
  customerInfoForm: FormGroup;
  dataSource: { property: string; value: string }[]; // Define the type for dataSource
  displayedColumns: string[] = ['property', 'value'];

  constructor(private fb: FormBuilder) {
    // Initialize the form with default values
    this.customerInfoForm = this.fb.group({
      customerSku: [''],
      companyName: ['Buderer Drug Co.'],
      productName: ['Hangover Dog 50ct'],
      brandName: [''],
    });

    // Create the initial dataSource from form values
    this.dataSource = this.createDataSource(
      this.customerInfoForm.value as CustomerInfoFormValues
    );

    // Update dataSource whenever form values change
    this.customerInfoForm.valueChanges.subscribe((value) => {
      this.dataSource = this.createDataSource(value as CustomerInfoFormValues);
    });
  }

  ngOnInit(): void {}

  // Create dataSource based on form values
  private createDataSource(
    formValues: CustomerInfoFormValues
  ): { property: string; value: string }[] {
    return [
      { property: 'Customer SKU #', value: formValues.customerSku },
      { property: 'Company Name', value: formValues.companyName },
      { property: "Customer's Product Name", value: formValues.productName },
      { property: 'Brand Name', value: formValues.brandName },
    ];
  }
}
