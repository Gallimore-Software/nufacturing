import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-master-carton-info',
  templateUrl: './master-carton-info.component.html',
  styleUrls: ['./master-carton-info.component.scss'],
})
export class MasterCartonInfoComponent implements OnInit {
  cartonInfoForm: FormGroup;
  bottleCounts: number[] = [135, 90, 78, 12, 60, 50, 100];
  cartonSizes: string[] = [
    '9"x7"x7"',
    '18"x12"x12"',
    '20"x12"x12"',
    '9"x7"x5"',
    '16"x10"x4" (CEL)',
  ];

  dataSource: any[] = [];
  displayedColumns: string[] = ['property', 'value'];

  constructor(private fb: FormBuilder) {
    this.cartonInfoForm = this.fb.group({
      bottlePerCarton: [12],
      cartonSize: ['9"x7"x7"'],
    });

    this.updateDataSource();
    this.cartonInfoForm.valueChanges.subscribe((value) => {
      this.updateDataSource();
    });
  }

  ngOnInit(): void {}

  updateDataSource(): void {
    const formValues = this.cartonInfoForm.getRawValue();
    this.dataSource = [
      {
        property: 'Bottle Per Master Carton',
        value: formValues.bottlePerCarton,
      },
      { property: 'Master Carton Size', value: formValues.cartonSize },
    ];
  }
}
