import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-testing-info',
  templateUrl: './testing-info.component.html',
  styleUrls: ['./testing-info.component.scss'],
})
export class TestingInfoComponent implements OnInit {
  testingForm: FormGroup;
  dataSource: any[];
  displayedColumns: string[] = ['property', 'value'];

  constructor(private fb: FormBuilder) {
    this.testingForm = this.fb.group({
      coaTest: ['NFG Paying'],
      preProSamples: ['No'],
      preProLabTesting: ['No'],
      wetGranulation: ['No'],
    });

    this.dataSource = this.createDataSource(this.testingForm.value);

    this.testingForm.valueChanges.subscribe((value) => {
      this.dataSource = this.createDataSource(value);
    });
  }

  ngOnInit(): void {}

  private createDataSource(formValues: any): any[] {
    const coaCost = formValues.coaTest === 'NFG Paying' ? 0.26 : 0;
    const preProSampleCost = formValues.preProSamples === 'Yes' ? 200 : 0;
    const preProLabTestingCost =
      formValues.preProLabTesting === 'Yes' ? 200 : 0;
    const wetGranulationCost = formValues.wetGranulation === 'Yes' ? 200 : 0;

    return [
      { property: 'COA Cost', value: coaCost },
      { property: 'Pre-Pro Samples Cost', value: preProSampleCost },
      { property: 'Pre-Pro Lab Testing Cost', value: preProLabTestingCost },
      { property: 'Wet Granulation Cost', value: wetGranulationCost },
    ];
  }
}
