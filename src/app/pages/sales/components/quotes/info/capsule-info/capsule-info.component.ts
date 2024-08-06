import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface CapsuleDetail {
  material: string;
  length: string;
  diameter: string;
  size: string;
  weight: number;
  colorShell: string;
  price: string;
}

@Component({
  selector: 'app-capsule-info',
  templateUrl: './capsule-info.component.html',
  styleUrls: ['./capsule-info.component.scss'],
})
export class CapsuleInfoComponent implements OnInit {
  capsuleInfoForm: FormGroup;
  dataSource: any[];
  displayedColumns: string[] = ['property', 'value'];

  capsuleParts = [
    'ECHPMC00C',
    'ECTR00C',
    'LZETC00C',
    'ECGELATIN00C',
    'ECHPMC0CDR',
    'ECHPMC0C',
  ];

  productColors = ['Tan', 'White', 'Green', 'Red', 'Green/Tan', 'TBD'];

  capsuleDetails: { [key: string]: CapsuleDetail } = {
    ECHPMC00C: {
      material: '(HPMC)',
      length: '0.917"',
      diameter: '0.336"',
      size: '00',
      weight: 124,
      colorShell: 'Clear',
      price: '$0.00710',
    },
    ECTR00C: {
      material: 'Delayed Release',
      length: '0.917"',
      diameter: '0.336"',
      size: '00',
      weight: 124,
      colorShell: 'Clear',
      price: '0.0',
    },
    LZETC00C: {
      material: 'Enteric Coated',
      length: '0.917"',
      diameter: '0.336"',
      size: '00',
      weight: 124,
      colorShell: 'Clear',
      price: '0.0',
    },
    ECGELATIN00C: {
      material: 'Gelatin',
      length: '0.917"',
      diameter: '0.336"',
      size: '00',
      weight: 124,
      colorShell: 'Clear',
      price: '$0.00365',
    },
    ECHPMC0CDR: {
      material: 'Delayed Release',
      length: '0.8429"',
      diameter: '0.2886"',
      size: '0',
      weight: 95,
      colorShell: 'Clear',
      price: '$0.009950',
    },
    ECHPMC0C: {
      material: 'HMPC',
      length: '0.8429"',
      diameter: '0.2886"',
      size: '0',
      weight: 95,
      colorShell: 'Clear',
      price: '$0.004000',
    },
  };

  constructor(private fb: FormBuilder) {
    this.capsuleInfoForm = this.fb.group({
      nfgCapsulePart: ['ECGELATIN00C'],
      colorOfProduct: ['Green'],
    });

    this.dataSource = this.createDataSource(this.capsuleInfoForm.value);

    this.capsuleInfoForm.valueChanges.subscribe((value) => {
      this.dataSource = this.createDataSource(value);
    });
  }

  ngOnInit(): void {}

  private createDataSource(formValues: any): any[] {
    const details: CapsuleDetail =
      this.capsuleDetails[formValues.nfgCapsulePart];
    return [
      { property: 'NFG Capsule Part #', value: formValues.nfgCapsulePart },
      { property: 'Capsule Material', value: details.material },
      { property: 'Capsule Length', value: details.length },
      { property: 'Capsule Diameter', value: details.diameter },
      { property: 'Capsule Size', value: details.size },
      { property: 'Capsule Weight (mg)', value: details.weight },
      { property: 'Capsule Pricing', value: details.price },
      { property: 'Color of Capsule Shell', value: details.colorShell },
      { property: 'Color of Product', value: formValues.colorOfProduct },
    ];
  }
}
