import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit {
  accountInfoForm: FormGroup;
  accountManagers = [
    'Logan Adair',
    'Eli Griffin',
    'Jordan Adair',
    'Anson Zonar',
    'Tony Gorris',
  ];
  displayedColumns: string[] = ['property', 'value'];
  dataSource: any[];

  constructor(private fb: FormBuilder) {
    this.accountInfoForm = this.fb.group({
      accountManager: ['Logan Adair'],
      newAccountManager: [''],
      customerCode: ['NTV'],
      sku: [''],
      formulaCode: ['FCH123'],
      batchNumber: [''],
      customerBatchNumber: ['NA'],
      nfgBatchCode: [{ value: '', disabled: true }],
      dateMonth: ['05'],
      dateDay: ['09'],
      dateYear: ['24'],
    });

    this.dataSource = this.createDataSource(this.accountInfoForm.value);

    this.accountInfoForm.valueChanges.subscribe((value) => {
      this.updateNfgBatchCode();
      this.dataSource = this.createDataSource(value);
    });
  }

  ngOnInit(): void {}

  private createDataSource(formValues: any): any[] {
    return [
      {
        property: 'Account Manager',
        value:
          formValues.accountManager === 'other'
            ? formValues.newAccountManager
            : formValues.accountManager,
      },
      { property: 'Customer Code', value: formValues.customerCode },
      { property: 'SKU #', value: formValues.sku },
      { property: 'Formula Code', value: formValues.formulaCode },
      { property: 'Batch #', value: formValues.batchNumber },
      { property: 'Customer Batch #', value: formValues.customerBatchNumber },
      {
        property: 'NFG Batch Code',
        value: this.accountInfoForm.get('nfgBatchCode')?.value,
      },
      { property: 'Date Month', value: formValues.dateMonth },
      { property: 'Date Day', value: formValues.dateDay },
      { property: 'Date Year', value: formValues.dateYear },
    ];
  }

  private updateNfgBatchCode() {
    const formulaCode = this.accountInfoForm.get('formulaCode')?.value;
    const dateMonth = this.accountInfoForm.get('dateMonth')?.value;
    const dateDay = this.accountInfoForm.get('dateDay')?.value;
    const dateYear = this.accountInfoForm.get('dateYear')?.value;

    const nfgBatchCode = `${formulaCode}${dateYear}${dateMonth}${dateDay}`;
    this.accountInfoForm.patchValue({ nfgBatchCode });
  }
}
