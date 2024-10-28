import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface AccountFormValues {
  accountManager: string;
  newAccountManager: string;
  customerCode: string;
  sku: string;
  formulaCode: string;
  batchNumber: string;
  customerBatchNumber: string;
  nfgBatchCode: string;
  dateMonth: string;
  dateDay: string;
  dateYear: string;
}

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
  dataSource: { property: string; value: string | number }[];

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

    // Initialize dataSource with current form values
    this.dataSource = this.createDataSource(
      this.accountInfoForm.value as AccountFormValues
    );

    // Update dataSource and nfgBatchCode whenever form values change
    this.accountInfoForm.valueChanges.subscribe((value) => {
      this.updateNfgBatchCode();
      this.dataSource = this.createDataSource(value as AccountFormValues);
    });
  }

  ngOnInit(): void {}

  private createDataSource(
    formValues: AccountFormValues
  ): { property: string; value: string | number }[] {
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
        value: this.accountInfoForm.get('nfgBatchCode')?.value || '',
      },
      { property: 'Date Month', value: formValues.dateMonth },
      { property: 'Date Day', value: formValues.dateDay },
      { property: 'Date Year', value: formValues.dateYear },
    ];
  }

  private updateNfgBatchCode(): void {
    const formulaCode = this.accountInfoForm.get('formulaCode')?.value || '';
    const dateMonth = this.accountInfoForm.get('dateMonth')?.value || '';
    const dateDay = this.accountInfoForm.get('dateDay')?.value || '';
    const dateYear = this.accountInfoForm.get('dateYear')?.value || '';

    const nfgBatchCode = `${formulaCode}${dateYear}${dateMonth}${dateDay}`;
    this.accountInfoForm.patchValue({ nfgBatchCode }, { emitEvent: false }); // Prevent looping by disabling event emission
  }
}
