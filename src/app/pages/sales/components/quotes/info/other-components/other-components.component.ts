import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// Define an interface for the form values to ensure TypeScript knows the structure
interface OtherComponentsFormValues {
  tamperEvidentType: string;
  nfgNeckBandPart: string;
  tamperEvidentMaterialSize: string;
  tamperEvidentColor: string;
  tamperEvidentMaterial: string;
  tamperEvidentPricing: string;
  silica: string;
  silicaCost: string;
  cotton: string;
  cottonCost: string;
  lotCodeBestByDate: string;
  lotCodeBestByDateType: string;
}

@Component({
  selector: 'app-other-components',
  templateUrl: './other-components.component.html',
  styleUrls: ['./other-components.component.scss'],
})
export class OtherComponentsComponent implements OnInit {
  otherComponentsForm: FormGroup;
  displayedColumns: string[] = ['property', 'value'];
  previewData: { property: string; value: string }[]; // Define the type for previewData

  tamperEvidentTypes = ['NeckBand', 'Tamper-Proof Sticker'];
  neckBandParts = ['SP7505CPVC', 'SP6505CPVC', 'FULLSLEEVE', 'NA'];
  silicas = ['2GSIEVED', '10GGELD', '1GSIEVED', '.25GSIEVED', 'NA'];
  cottons = ['COTTBD1', 'COTTBD', 'NA'];
  lotCodeOptions = ['Yes', 'No'];
  lotCodeTypeOptions = ['Blue Ink', 'NA'];

  neckBandPartDetails: {
    [key: string]: {
      size: string;
      color: string;
      material: string;
      pricing: string;
    };
  } = {
    SP7505CPVC: {
      size: '75mm x 0.5mm',
      color: 'Clear',
      material: 'PVC',
      pricing: '$0.0031',
    },
    SP6505CPVC: {
      size: '65mm x 0.5mm',
      color: 'Clear',
      material: 'PVC',
      pricing: '$0.0026',
    },
    FULLSLEEVE: {
      size: '94mm x 0.5mm',
      color: 'Clear',
      material: 'PVC',
      pricing: '$0.0700',
    },
    NA: { size: 'NA', color: 'NA', material: 'NA', pricing: '$0.00' },
  };

  silicaDetails: { [key: string]: { cost: string } } = {
    '2GSIEVED': { cost: '$0.0600' },
    '10GGELD': { cost: '$0.1500' },
    '1GSIEVED': { cost: '$0.0357' },
    '.25GSIEVED': { cost: '$0.1500' },
    NA: { cost: '$0.000' },
  };

  cottonDetails: { [key: string]: { cost: string } } = {
    COTTBD1: { cost: '$0.15' },
    COTTBD: { cost: '$0.050' },
    NA: { cost: '$0.000' },
  };

  constructor(private fb: FormBuilder) {
    this.otherComponentsForm = this.fb.group({
      tamperEvidentType: ['NeckBand'],
      nfgNeckBandPart: ['FULLSLEEVE'],
      tamperEvidentMaterialSize: [''],
      tamperEvidentColor: [''],
      tamperEvidentMaterial: [''],
      tamperEvidentPricing: [''],
      silica: ['10GGELD'],
      silicaCost: [''],
      cotton: ['COTTBD'],
      cottonCost: [''],
      lotCodeBestByDate: ['Yes'],
      lotCodeBestByDateType: ['Blue Ink'],
    });

    this.updateFormFields(
      this.otherComponentsForm.value as OtherComponentsFormValues
    );
    this.previewData = this.createPreviewData(
      this.otherComponentsForm.value as OtherComponentsFormValues
    );

    this.otherComponentsForm.valueChanges.subscribe((value) => {
      this.updateFormFields(value as OtherComponentsFormValues);
      this.previewData = this.createPreviewData(
        value as OtherComponentsFormValues
      );
    });
  }

  ngOnInit(): void {}

  private updateFormFields(value: OtherComponentsFormValues): void {
    const neckBandPartDetail =
      this.neckBandPartDetails[value.nfgNeckBandPart] || {};
    this.otherComponentsForm.patchValue(
      {
        tamperEvidentMaterialSize: neckBandPartDetail.size,
        tamperEvidentColor: neckBandPartDetail.color,
        tamperEvidentMaterial: neckBandPartDetail.material,
        tamperEvidentPricing: neckBandPartDetail.pricing,
        silicaCost: (this.silicaDetails[value.silica] || {}).cost,
        cottonCost: (this.cottonDetails[value.cotton] || {}).cost,
      },
      { emitEvent: false }
    );
  }

  private createPreviewData(
    formValues: OtherComponentsFormValues
  ): { property: string; value: string }[] {
    return [
      { property: 'Tamper Evident Type', value: formValues.tamperEvidentType },
      { property: 'NFG Neck Band Part #', value: formValues.nfgNeckBandPart },
      {
        property: 'Tamper Evident Material Size',
        value: formValues.tamperEvidentMaterialSize,
      },
      {
        property: 'Tamper Evident Color',
        value: formValues.tamperEvidentColor,
      },
      {
        property: 'Tamper Evident Material',
        value: formValues.tamperEvidentMaterial,
      },
      {
        property: 'Tamper Evident Pricing',
        value: formValues.tamperEvidentPricing,
      },
      { property: 'Silica', value: formValues.silica },
      { property: 'Silica Cost', value: formValues.silicaCost },
      { property: 'Cotton', value: formValues.cotton },
      { property: 'Cotton Cost', value: formValues.cottonCost },
      {
        property: 'Lot Code/Best By Date',
        value: formValues.lotCodeBestByDate,
      },
      {
        property: 'Lot Code/Best By Date Type',
        value: formValues.lotCodeBestByDateType,
      },
    ];
  }
}
