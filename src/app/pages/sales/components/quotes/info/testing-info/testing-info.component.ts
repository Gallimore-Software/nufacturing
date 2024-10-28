import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface FormValues {
  coaTest: string;
  preProSamples: string;
  preProLabTesting: string;
  wetGranulation: string;
}

@Component({
  selector: 'app-testing-info',
  templateUrl: './testing-info.component.html',
  styleUrls: ['./testing-info.component.scss'],
})
export class TestingInfoComponent implements OnInit {
  testingForm: FormGroup;
  dataSource: { property: string; value: number }[];
  displayedColumns: string[] = ['property', 'value'];

  constructor(private fb: FormBuilder) {
    // Initialize the form with default values
    this.testingForm = this.fb.group({
      coaTest: ['NFG Paying'],
      preProSamples: ['No'],
      preProLabTesting: ['No'],
      wetGranulation: ['No'],
    });

    // Create the initial dataSource from form values
    this.dataSource = this.createDataSource(
      this.testingForm.value as FormValues
    );

    // Update dataSource whenever form values change
    this.testingForm.valueChanges.subscribe((value) => {
      this.dataSource = this.createDataSource(value as FormValues);
    });
  }

  ngOnInit(): void {}

  // Create dataSource based on form values
  private createDataSource(
    formValues: FormValues
  ): { property: string; value: number }[] {
    // Calculate costs based on form values
    const coaCost = formValues.coaTest === 'NFG Paying' ? 0.26 : 0;
    const preProSampleCost = formValues.preProSamples === 'Yes' ? 200 : 0;
    const preProLabTestingCost =
      formValues.preProLabTesting === 'Yes' ? 200 : 0;
    const wetGranulationCost = formValues.wetGranulation === 'Yes' ? 200 : 0;

    // Return the calculated data as the table data source
    return [
      { property: 'COA Cost', value: coaCost },
      { property: 'Pre-Pro Samples Cost', value: preProSampleCost },
      { property: 'Pre-Pro Lab Testing Cost', value: preProLabTestingCost },
      { property: 'Wet Granulation Cost', value: wetGranulationCost },
    ];
  }
}
