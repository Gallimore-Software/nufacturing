import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent implements OnInit {
  customerInfoForm: FormGroup;
  dataSource: any[];
  displayedColumns: string[] = ['property', 'value'];

  constructor(private fb: FormBuilder) {
    this.customerInfoForm = this.fb.group({
      customerSku: [''],
      companyName: ['Buderer Drug Co.'],
      productName: ['Hangover Dog 50ct'],
      brandName: [''],
    });

    this.dataSource = this.createDataSource(this.customerInfoForm.value);

    this.customerInfoForm.valueChanges.subscribe((value) => {
      this.dataSource = this.createDataSource(value);
    });
  }

  ngOnInit(): void {}

  private createDataSource(formValues: any): any[] {
    return [
      { property: 'Customer SKU #', value: formValues.customerSku },
      { property: 'Company Name', value: formValues.companyName },
      { property: "Customer's Product Name", value: formValues.productName },
      { property: 'Brand Name', value: formValues.brandName },
    ];
  }
}
