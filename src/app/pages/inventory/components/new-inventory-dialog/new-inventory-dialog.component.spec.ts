import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewInventoryDialogComponent } from './new-inventory-dialog.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

describe('NewInventoryDialogComponent', () => {
  let component: NewInventoryDialogComponent;
  let fixture: ComponentFixture<NewInventoryDialogComponent>;
  let dialogRefSpy: jest.Mocked<MatDialogRef<NewInventoryDialogComponent>>;

  beforeEach(async () => {
    const dialogRefSpyObj = {
      close: jest.fn(),
    } as unknown as jest.Mocked<MatDialogRef<NewInventoryDialogComponent>>;

    await TestBed.configureTestingModule({
      declarations: [NewInventoryDialogComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        NoopAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpyObj },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewInventoryDialogComponent);
    component = fixture.componentInstance;
    dialogRefSpy = TestBed.inject(MatDialogRef) as jest.Mocked<
      MatDialogRef<NewInventoryDialogComponent>
    >;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty values', () => {
    const formValues = component.inventoryForm.value;
    expect(formValues.ingredientName).toBe('');
    expect(formValues.unitOfMeasurement).toBe('');
    expect(formValues.pricePerUnit).toBe('');
    expect(formValues.stockQuantity).toBe('');
    expect(formValues.minOrderQuantity).toBe('');
  });

  it('should be invalid when required fields are empty', () => {
    component.inventoryForm.controls['ingredientName'].setValue('');
    component.inventoryForm.controls['unitOfMeasurement'].setValue('');
    component.inventoryForm.controls['pricePerUnit'].setValue('');
    component.inventoryForm.controls['stockQuantity'].setValue('');
    component.inventoryForm.controls['minOrderQuantity'].setValue('');

    expect(component.inventoryForm.valid).toBe(false);
  });

  it('should be valid when all required fields are filled', () => {
    component.inventoryForm.controls['ingredientName'].setValue('Ingredient A');
    component.inventoryForm.controls['unitOfMeasurement'].setValue('kg');
    component.inventoryForm.controls['pricePerUnit'].setValue(50);
    component.inventoryForm.controls['stockQuantity'].setValue(100);
    component.inventoryForm.controls['minOrderQuantity'].setValue(10);

    expect(component.inventoryForm.valid).toBe(true);
  });

  it('should call onSubmit and close dialog with form data when form is valid', () => {
    component.inventoryForm.controls['ingredientName'].setValue('Ingredient A');
    component.inventoryForm.controls['unitOfMeasurement'].setValue('kg');
    component.inventoryForm.controls['pricePerUnit'].setValue(50);
    component.inventoryForm.controls['stockQuantity'].setValue(100);
    component.inventoryForm.controls['minOrderQuantity'].setValue(10);

    component.onSubmit();

    expect(dialogRefSpy.close).toHaveBeenCalledWith({
      ingredientName: 'Ingredient A',
      unitOfMeasurement: 'kg',
      pricePerUnit: 50,
      stockQuantity: 100,
      minOrderQuantity: 10,
    });
  });

  it('should not submit the form if it is invalid', () => {
    component.inventoryForm.controls['ingredientName'].setValue('');
    component.onSubmit();
    expect(dialogRefSpy.close).not.toHaveBeenCalled();
  });

  it('should close the dialog without saving when onCancel is called', () => {
    component.onCancel();
    expect(dialogRefSpy.close).toHaveBeenCalled();
  });
});
