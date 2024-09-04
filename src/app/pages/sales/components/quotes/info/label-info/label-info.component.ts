import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-label-info',
  templateUrl: './label-info.component.html',
  styleUrls: ['./label-info.component.scss'],
})
export class LabelInfoComponent implements OnInit {
  labelInfoForm: FormGroup;

  dataSource: any[] = [];
  displayedColumns: string[] = ['property', 'value'];

  constructor(private fb: FormBuilder) {
    this.labelInfoForm = this.fb.group({
      labelSuppliedBy: ['NFG'],
      labelDimension: ['2.50" X 7.00"'],
      labelMaterialType: ['White BOPP'],
      backingMaterialFinish: ['PET'],
      labelMaterialFinish: ['Gloss'],
    });

    this.updateDataSource();
    this.labelInfoForm.valueChanges.subscribe((value) => {
      this.updateDataSource();
    });
  }

  ngOnInit(): void {}

  updateDataSource(): void {
    const formValues = this.labelInfoForm.getRawValue();
    this.dataSource = [
      { property: 'Label Supplied By', value: formValues.labelSuppliedBy },
      { property: 'Label Dimension', value: formValues.labelDimension },
      { property: 'Label Material Type', value: formValues.labelMaterialType },
      {
        property: 'Backing Material Finish',
        value: formValues.backingMaterialFinish,
      },
      {
        property: 'Label Material Finish',
        value: formValues.labelMaterialFinish,
      },
    ];
  }
}
