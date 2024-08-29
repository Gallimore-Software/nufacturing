import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      companyName: ['', Validators.required],
      companyCode: ['', [Validators.required, Validators.maxLength(3)]],
      primaryContact: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
      }),
      complianceContact: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
      }),
      accountingContact: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
      }),
      companyWebsite: ['', Validators.required],
      businessAddress: this.fb.group({
        line1: ['', Validators.required],
        line2: [''],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required],
      }),
      fulfillmentAddress: this.fb.group({
        sameAsBusiness: [false],
        line1: ['', Validators.required],
        line2: [''],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required],
      }),
      customerQualificationForm: ['', Validators.required],
      brands: this.fb.array([]),
    });
  }

  ngOnInit(): void {}

  get brands() {
    return this.customerForm.get('brands') as FormArray;
  }

  addBrand() {
    this.brands.push(
      this.fb.group({
        brandCode: ['', [Validators.required, Validators.maxLength(3)]],
        brandPhoto: ['', Validators.required],
        brandWebsite: ['', Validators.required],
      }),
    );
  }

  removeBrand() {
    if (this.brands.length > 0) {
      this.brands.removeAt(this.brands.length - 1);
    }
  }
  onSubmit() {
    if (this.customerForm.valid) {
      console.log(this.customerForm.value);
    }
  }

  copyBusinessAddress() {
    if (
      this.customerForm.get('fulfillmentAddress')?.get('sameAsBusiness')?.value
    ) {
      this.customerForm
        .get('fulfillmentAddress')
        ?.patchValue(this.customerForm.get('businessAddress')?.value);
    } else {
      this.customerForm.get('fulfillmentAddress')?.reset();
    }
  }
}
