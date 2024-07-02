import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  accountInfoForm: FormGroup;
  dataSource: any[];
  displayedColumns: string[] = ['property', 'value'];
  accountManagers = ['Manager 1', 'Manager 2', 'Manager 3', 'Manager 4', 'Manager 5'];

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
      dateYear: ['24']
    });

    this.dataSource = this.createDataSource(this.accountInfoForm.value);

    this.accountInfoForm.valueChanges.subscribe(value => {
      this.updateNfgBatchCode();
      this.dataSource = this.createDataSource(value);
    });
  }

  ngOnInit(): void {}

  private createDataSource(formValues: any): any[] {
    return [
      { property: 'Account Manager', value: formValues.accountManager === 'other' ? formValues.newAccountManager : formValues.accountManager },
      { property: 'NFG Customer Code', value: formValues.customerCode },
      { property: 'NFG SKU #', value: formValues.sku },
      { property: 'NFG Formula Code', value: formValues.formulaCode },
      { property: 'Batch #', value: formValues.batchNumber },
      { property: 'Customer Batch #', value: formValues.customerBatchNumber },
      { property: 'NFG Batch Code', value: this.accountInfoForm.get('nfgBatchCode')?.value },
      { property: 'Date Month', value: formValues.dateMonth },
      { property: 'Date Day', value: formValues.dateDay },
      { property: 'Date Year', value: formValues.dateYear }
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
