import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss'],
})
export class OrderInfoComponent implements OnInit {
  orderInfoForm: FormGroup;
  dataSource: any[];
  displayedColumns: string[] = ['property', 'value'];

  constructor(private fb: FormBuilder) {
    this.orderInfoForm = this.fb.group({
      productType: ['Capsule'],
      leadTime: ['6-7 weeks'],
      launchQty: [2000],
      capsulesPerServing: [2],
      capsulesPerBottle: [50],
    });

    this.dataSource = this.createDataSource(this.orderInfoForm.value);

    this.orderInfoForm.valueChanges.subscribe((value) => {
      this.dataSource = this.createDataSource(value);
    });
  }

  ngOnInit(): void {}

  private createDataSource(formValues: any): any[] {
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
