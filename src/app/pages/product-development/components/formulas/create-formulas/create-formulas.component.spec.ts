import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  ReactiveFormsModule,
  FormArray,
  FormGroup,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateFormulasComponent } from './create-formulas.component';
import { of } from 'rxjs';

describe('CreateFormulasComponent', () => {
  let component: CreateFormulasComponent;
  let fixture: ComponentFixture<CreateFormulasComponent>;
  let dialogRefSpy: Partial<jest.Mocked<MatDialogRef<CreateFormulasComponent>>>;

  beforeEach(async () => {
    dialogRefSpy = {
      close: jest.fn(),
      afterClosed: jest.fn().mockReturnValue(of(true)),
    };

    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule, // Add MatSelectModule to resolve the value accessor issue
        MatCardModule,
        MatButtonModule,
        BrowserAnimationsModule, // Import this if there are animations
      ],
      declarations: [CreateFormulasComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: dialogRefSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Initialize the FormArray controls before setting values
    (component.formulaForm.get('activeIngredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(''),
        scientificName: new FormControl(''),
        perUnit: new FormControl(0),
      }),
    );

    (component.formulaForm.get('inactiveIngredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(''),
        scientificName: new FormControl(''),
        perUnit: new FormControl(0),
      }),
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a formula when the form is valid and save is clicked', () => {
    const formBuilder = new FormBuilder();

    // Arrange: Set up form values
    component.formulaForm.controls['name'].setValue('Sleep Aid Formula');
    component.formulaForm.controls['productType'].setValue('Gummies');
    component.formulaForm.controls['unitOfMeasurement'].setValue('mcg');

    // Initialize FormArrays before setting values
    const activeIngredientsArray = component.formulaForm.controls[
      'activeIngredients'
    ] as FormArray;
    activeIngredientsArray.clear(); // Clear any existing controls
    activeIngredientsArray.push(
      formBuilder.group({
        name: 'Melatonin',
        scientificName: 'N-Acetyl-5-Methoxytryptamine',
        perUnit: 5,
      }),
    );
    activeIngredientsArray.push(
      formBuilder.group({
        name: 'Valerian Root',
        scientificName: 'Valeriana Officinalis',
        perUnit: 50,
      }),
    );

    const inactiveIngredientsArray = component.formulaForm.controls[
      'inactiveIngredients'
    ] as FormArray;
    inactiveIngredientsArray.clear(); // Clear any existing controls
    inactiveIngredientsArray.push(
      formBuilder.group({
        name: 'Gelatin',
        scientificName: 'Gelatin',
        perUnit: 500,
      }),
    );
    inactiveIngredientsArray.push(
      formBuilder.group({
        name: 'Natural Flavors',
        scientificName: 'Natural Flavors',
        perUnit: 20,
      }),
    );
    inactiveIngredientsArray.push(
      formBuilder.group({
        name: 'Citric Acid',
        scientificName: 'Citric Acid',
        perUnit: 10,
      }),
    );

    expect(component.formulaForm.valid).toBeTruthy(); // The form should be valid

    // Act: Call the save method
    component.onSubmit();

    // Assert: Verify that the dialog reference close method was called with correct data
    expect(dialogRefSpy.close).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Sleep Aid Formula',
        productType: 'Gummies',
        unitOfMeasurement: 'mcg',
        activeIngredients: [
          {
            name: 'Melatonin',
            scientificName: 'N-Acetyl-5-Methoxytryptamine',
            perUnit: 5,
          },
          {
            name: 'Valerian Root',
            scientificName: 'Valeriana Officinalis',
            perUnit: 50,
          },
        ],
        inactiveIngredients: [
          { name: 'Gelatin', scientificName: 'Gelatin', perUnit: 500 },
          {
            name: 'Natural Flavors',
            scientificName: 'Natural Flavors',
            perUnit: 20,
          },
          { name: 'Citric Acid', scientificName: 'Citric Acid', perUnit: 10 },
        ],
      }),
    );
  });
});
