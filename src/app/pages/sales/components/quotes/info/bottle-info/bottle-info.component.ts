import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  //add bottle part
  bottleParts: BottleInfo[] = [
    {
      value: 'CP250HDPEW',
      label: 'CP250HDPEW',
      material: 'HDPE',
      size: '250',
      color: 'White',
      shape: 'Round',
      labelHeight: '2.75" X 7.00"',
      mouthSize: '45/400',
      price: '$0.3543',
    },
    {
      value: 'CP175PETW',
      label: 'CP175PETW',
      material: 'PET',
      size: '175',
      color: 'White',
      shape: 'Round',
      labelHeight: '2.25" X 6.25"',
      mouthSize: '38/400',
      price: '$0.23000',
    },
    {
      value: 'CC225PETBL',
      label: 'CC225PETBL',
      material: 'PET',
      size: '225',
      color: 'Black',
      shape: 'Round',
      labelHeight: '2.50" X 7.00"',
      mouthSize: '45/400',
      price: '$0.40000',
    },
    {
      value: 'CP175PETDA',
      label: 'CP175PETDA',
      material: 'PET',
      size: '175',
      color: 'Dark Amber',
      shape: 'Round',
      labelHeight: '2.25" X 6.25"',
      mouthSize: '38/400',
      price: '0.46000',
    },
    {
      value: 'CP225PETDA',
      label: 'CP225PETDA',
      material: 'PET',
      size: '225',
      color: 'Dark Amber',
      shape: 'Round',
      labelHeight: '2.65" X 6.75"',
      mouthSize: '45/400',
      price: '$0.23958',
    },
    {
      value: 'CP225HDPEW',
      label: 'CP225HDPEW',
      material: 'HDPE',
      size: '225',
      color: 'White',
      shape: 'Round',
      labelHeight: '2.65" X 6.75"',
      mouthSize: '45/400',
      price: '$0.23958',
    },
    {
      value: 'TRCOR120HDPEW',
      label: 'TRCOR120HDPEW',
      material: 'Glass',
      size: '120',
      color: 'Amber',
      shape: 'Round',
      labelHeight: '2.00" x 6.00"',
      mouthSize: '38/400',
      price: '$0.25400',
    },
    {
      value: 'CC400PETDA',
      label: 'CC400PETDA',
      material: 'PET',
      size: '400',
      color: 'Dark Amber',
      shape: 'Round',
      labelHeight: '3.0" x 8.75"',
      mouthSize: '45/400',
      price: '$0.67300',
    },
    {
      value: 'ALL175HDPEW',
      label: 'ALL175HDPEW',
      material: 'HDPE',
      size: '175',
      color: 'White',
      shape: 'Round',
      labelHeight: '2.5" X 6.75"',
      mouthSize: '38/400',
      price: '$0.0800',
    },
    {
      value: 'CP175HDPEW',
      label: 'CP175HDPEW',
      material: 'HDPE',
      size: '175',
      color: 'White',
      shape: 'Round',
      labelHeight: '2.25" X 6.25"',
      mouthSize: '38/400',
      price: '$0.2019',
    },
    {
      value: 'CP175PETCL',
      label: 'CP175PETCL',
      material: 'PET',
      size: '175',
      color: 'Clear',
      shape: 'Round',
      labelHeight: '2.25" X 6.25"',
      mouthSize: '38/400',
      price: '$0.35',
    },
    {
      value: 'CP250PETW',
      label: 'CP250PETW',
      material: 'PET',
      size: '250',
      color: 'White',
      shape: 'Round',
      labelHeight: '2.5" x 7.50"',
      mouthSize: '45/400',
      price: '$0.38',
    },
    {
      value: 'ALL150HDPEW',
      label: 'ALL150HDPEW',
      material: 'HDPE',
      size: '150',
      color: 'White',
      shape: 'Round',
      labelHeight: '2.25" X 6.5"',
      mouthSize: '38/400',
      price: '$0.10',
    },
    {
      value: 'CP150PETDA',
      label: 'CP150PETDA',
      material: 'PET',
      size: '150',
      color: 'Dark Amber',
      shape: 'Round',
      labelHeight: '2.625" X 6.00"',
      mouthSize: '38/400',
      price: '$0.28',
    },
    {
      value: 'CP200PETW',
      label: 'CP200PETW',
      material: 'PET',
      size: '200',
      color: 'White',
      shape: 'Round',
      labelHeight: '2.25" x 7.0"',
      mouthSize: '45/400',
      price: '$0.33',
    },
    {
      value: 'ABC16OZSTDUP',
      label: 'ABC16OZSTDUP',
      material: 'ALUM',
      size: '6-3/4′′x11-1/4′′+3-1/2′′',
      color: 'Silver',
      shape: 'Pouch',
      labelHeight: '',
      mouthSize: '',
      price: '$0.35000',
    },
  ];
  selectedBottle: BottleInfo | undefined;

  dataSource: any[] = [];
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
    this.bottleInfoForm.valueChanges.subscribe((value) => {
      this.updateDataSource();
    });
  }

  ngOnInit(): void {}

  onBottlePartChange(event: any) {
    this.updateForm(event.value);
  }

  updateForm(part: string): void {
    this.selectedBottle = this.bottleParts.find(
      (bottle) => bottle.value === part,
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
