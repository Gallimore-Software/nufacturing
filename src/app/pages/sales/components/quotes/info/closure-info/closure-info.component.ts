import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface ClosureInfo {
  value: string;
  label: string;
  material: string;
  size: string;
  color: string;
  profile: string;
  inductionSeal: string;
  sealMaterial: string;
  type: string;
  price: string;
}

@Component({
  selector: 'app-closure-info',
  templateUrl: './closure-info.component.html',
  styleUrls: ['./closure-info.component.scss'],
})
export class ClosureInfoComponent implements OnInit {
  closureInfoForm: FormGroup;

  //add closure part
  closureParts: ClosureInfo[] = [
    {
      value: 'CP38400PPWR',
      label: 'CP38400PPWR',
      material: 'PP',
      size: '38/400',
      color: 'White',
      profile: 'Ribbed',
      inductionSeal: 'HIS',
      sealMaterial: 'Foil',
      type: 'CT',
      price: '$0.05746',
    },
    {
      value: 'ALL38400HDPEWR',
      label: 'ALL38400HDPEWR',
      material: 'HDPE',
      size: '38/400',
      color: 'White',
      profile: 'Ribbed',
      inductionSeal: 'HIS',
      sealMaterial: 'Foil',
      type: 'CT',
      price: '$0.03680',
    },
    {
      value: 'CP38400PPWS',
      label: 'CP38400PPWS',
      material: 'PP',
      size: '38/400',
      color: 'White',
      profile: 'Smooth',
      inductionSeal: 'HIS',
      sealMaterial: 'Foil',
      type: 'CT',
      price: '$0.0750',
    },
    {
      value: 'NF38400PPWS',
      label: 'NF38400PPWS',
      material: 'PP',
      size: '38/400',
      color: 'White',
      profile: 'Smooth',
      inductionSeal: 'HIS',
      sealMaterial: 'Lift & Peal',
      type: 'Flip Top',
      price: '$0.13',
    },
    {
      value: 'CP45400PPWR',
      label: 'CP45400PPWR',
      material: 'PP',
      size: '45/400',
      color: 'White',
      profile: 'Ribbed',
      inductionSeal: 'Lift & Peel',
      sealMaterial: 'Foil',
      type: 'CT',
      price: '$0.1170',
    },
    {
      value: 'CP45400PPBR',
      label: 'CP45400PPBR',
      material: 'PP',
      size: '45/400',
      color: 'Black',
      profile: 'Ribbed',
      inductionSeal: 'Lift & Peel',
      sealMaterial: 'Foil',
      type: 'CT',
      price: '$0.0720',
    },
    {
      value: 'CP38400PPBR',
      label: 'CP38400PPBR',
      material: 'PP',
      size: '38/400',
      color: 'Black',
      profile: 'Ribbed',
      inductionSeal: 'HIS',
      sealMaterial: 'Foil',
      type: 'CT',
      price: '$0.07',
    },
    {
      value: 'FH45400PPWS',
      label: 'FH45400PPWS',
      material: 'PP',
      size: '45/400',
      color: 'White',
      profile: 'Smooth',
      inductionSeal: 'Tamper Evident',
      sealMaterial: 'Tamper Evident',
      type: 'CT',
      price: '$0.19',
    },
    {
      value: 'CP38400PPBLUES',
      label: 'CP38400PPBLUES',
      material: 'PP',
      size: '40.4/400',
      color: 'PMS 2147 C',
      profile: 'Smooth',
      inductionSeal: 'HIS',
      sealMaterial: 'Foil',
      type: 'CT',
      price: '$0.19',
    },
    {
      value: 'CP38400PPBS',
      label: 'CP38400PPBS',
      material: 'PP',
      size: '38/400',
      color: 'Black',
      profile: 'Smooth',
      inductionSeal: 'HIS',
      sealMaterial: 'Vente Foil',
      type: 'CT',
      price: '$0.07',
    },
  ];
  selectedClosure: ClosureInfo | undefined;

  dataSource: any[] = [];
  displayedColumns: string[] = ['property', 'value'];

  constructor(private fb: FormBuilder) {
    this.closureInfoForm = this.fb.group({
      closurePart: ['CP38400PPWR'],
      closureMaterial: [{ value: '', disabled: true }],
      closureSize: [{ value: '', disabled: true }],
      closureColor: [{ value: '', disabled: true }],
      closureProfile: [{ value: '', disabled: true }],
      closureInductionSeal: [{ value: '', disabled: true }],
      closureSealMaterial: [{ value: '', disabled: true }],
      closureType: [{ value: '', disabled: true }],
      closurePrice: [{ value: '', disabled: true }],
    });

    this.updateForm('CP38400PPWR');
    this.closureInfoForm.valueChanges.subscribe((value) => {
      this.updateDataSource();
    });
  }

  ngOnInit(): void {}

  onClosurePartChange(event: any) {
    this.updateForm(event.value);
  }

  updateForm(part: string): void {
    this.selectedClosure = this.closureParts.find(
      (closure) => closure.value === part,
    );
    if (this.selectedClosure) {
      this.closureInfoForm.patchValue({
        closureMaterial: this.selectedClosure.material,
        closureSize: this.selectedClosure.size,
        closureColor: this.selectedClosure.color,
        closureProfile: this.selectedClosure.profile,
        closureInductionSeal: this.selectedClosure.inductionSeal,
        closureSealMaterial: this.selectedClosure.sealMaterial,
        closureType: this.selectedClosure.type,
        closurePrice: this.selectedClosure.price,
      });
      this.updateDataSource();
    }
  }

  updateDataSource(): void {
    const formValues = this.closureInfoForm.getRawValue();
    this.dataSource = [
      { property: 'NFG Closure Part #', value: formValues.closurePart },
      { property: 'Closure Material', value: formValues.closureMaterial },
      { property: 'Closure Size', value: formValues.closureSize },
      { property: 'Closure Color', value: formValues.closureColor },
      { property: 'Closure Profile', value: formValues.closureProfile },
      {
        property: 'Closure Induction Seal',
        value: formValues.closureInductionSeal,
      },
      {
        property: 'Closure Seal Material',
        value: formValues.closureSealMaterial,
      },
      { property: 'Closure Type', value: formValues.closureType },
      { property: 'Closure Price', value: formValues.closurePrice },
    ];
  }
}
