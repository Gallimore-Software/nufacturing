import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface OrderInfoFormValues {
  productType: string;
  leadTime: string;
  launchQty: number;
  capsulesPerServing: number;
  capsulesPerBottle: number;
}

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss'],
})
export class OrderInfoComponent implements OnInit {
  orderInfoForm: FormGroup;
  dataSource: { property: string; value: string | number }[]; // Define the type for previewData
  displayedColumns: string[] = ['property', 'value'];

  constructor(private fb: FormBuilder) {
    // Initialize the form with default values
    this.orderInfoForm = this.fb.group({
      productType: ['Capsule'],
      leadTime: ['6-7 weeks'],
      launchQty: [2000],
      capsulesPerServing: [2],
      capsulesPerBottle: [50],
    });

    // Create the initial dataSource from form values
    this.dataSource = this.createDataSource(
      this.orderInfoForm.value as OrderInfoFormValues
    );

    // Update dataSource whenever form values change
    this.orderInfoForm.valueChanges.subscribe((value) => {
      this.dataSource = this.createDataSource(value as OrderInfoFormValues);
    });
  }

  ngOnInit(): void {}

  // Create dataSource based on form values
  private createDataSource(
    formValues: OrderInfoFormValues
  ): { property: string; value: string | number }[] {
    // Return the data as the table data source
    return [
      { property: 'Product Type', value: formValues.productType },
      { property: 'Lead Time', value: formValues.leadTime },
      { property: 'Launch QTY', value: formValues.launchQty },
      {
        property: 'Capsules per serving',
        value: formValues.capsulesPerServing,
      },
      { property: 'Capsules per bottle', value: formValues.capsulesPerBottle },
    ];
  }
}
