/* eslint-disable no-undef */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

interface BottleInfo {
  value: string;
  label: string;
  material: string;
  size: string;
  color: string;
  shape: string;
  labelHeight: string;
  mouthSize: string;
  price: string;
}

@Component({
  selector: 'app-bottle-info',
  templateUrl: './bottle-info.component.html',
  styleUrls: ['./bottle-info.component.scss'],
})
export class BottleInfoComponent implements OnInit {
  bottleInfoForm: FormGroup;

  // Define bottle parts
  bottleParts: BottleInfo[] = [
    // Your bottle parts data here
  ];

  selectedBottle: BottleInfo | undefined;
  dataSource: { property: string; value: string }[] = []; // Typed dataSource
  displayedColumns: string[] = ['property', 'value'];

  constructor(private fb: FormBuilder) {
    this.bottleInfoForm = this.fb.group({
      bottlePart: ['CC225PETBL'],
      bottleMaterial: [{ value: '', disabled: true }],
      bottleSize: [{ value: '', disabled: true }],
      bottleColor: [{ value: '', disabled: true }],
      bottleShape: [{ value: '', disabled: true }],
      labelPanelHeight: [{ value: '', disabled: true }],
      bottleMouthSize: [{ value: '', disabled: true }],
      bottlePricing: [{ value: '', disabled: true }],
    });

    this.updateForm('CC225PETBL');
    this.bottleInfoForm.valueChanges.subscribe(() => {
      this.updateDataSource();
    });
  }

  ngOnInit(): void {}

  // Renamed the function to match the template
  onBottlePartChange(event: MatSelectChange): void {
    this.updateForm(event.value);
  }

  updateForm(part: string): void {
    this.selectedBottle = this.bottleParts.find(
      (bottle) => bottle.value === part
    );
    if (this.selectedBottle) {
      this.bottleInfoForm.patchValue({
        bottleMaterial: this.selectedBottle.material,
        bottleSize: this.selectedBottle.size,
        bottleColor: this.selectedBottle.color,
        bottleShape: this.selectedBottle.shape,
        labelPanelHeight: this.selectedBottle.labelHeight,
        bottleMouthSize: this.selectedBottle.mouthSize,
        bottlePricing: this.selectedBottle.price,
      });
      this.updateDataSource();
    }
  }

  updateDataSource(): void {
    const formValues = this.bottleInfoForm.getRawValue();
    this.dataSource = [
      { property: 'NFG Bottle Part #', value: formValues.bottlePart },
      { property: 'Bottle Material', value: formValues.bottleMaterial },
      { property: 'Bottle Size', value: formValues.bottleSize },
      { property: 'Bottle Color', value: formValues.bottleColor },
      { property: 'Bottle Shape', value: formValues.bottleShape },
      { property: 'Label Panel Height', value: formValues.labelPanelHeight },
      { property: 'Bottle Mouth/Cap Size', value: formValues.bottleMouthSize },
      { property: 'Bottle Pricing', value: formValues.bottlePricing },
    ];
  }
}
