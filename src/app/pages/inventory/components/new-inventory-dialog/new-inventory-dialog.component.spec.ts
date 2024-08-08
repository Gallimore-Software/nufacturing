import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NewInventoryDialogComponent } from './new-inventory-dialog.component';

describe('NewInventoryDialogComponent', () => {
  let component: NewInventoryDialogComponent;
  let fixture: ComponentFixture<NewInventoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
      ],
      declarations: [NewInventoryDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} }  // Mock MatDialogRef
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NewInventoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with required controls', () => {
    expect(component.inventoryForm.contains('type')).toBe(true);
    expect(component.inventoryForm.contains('category')).toBe(true);
    expect(component.inventoryForm.contains('subCategory')).toBe(true);
    expect(component.inventoryForm.contains('ingredientName')).toBe(true);
    expect(component.inventoryForm.contains('pricePerKg')).toBe(true);
    expect(component.inventoryForm.contains('stockQuantity')).toBe(true);
  });

  it('should make the form invalid if required fields are empty', () => {
    component.inventoryForm.controls['type'].setValue('');
    component.inventoryForm.controls['category'].setValue('');
    component.inventoryForm.controls['ingredientName'].setValue('');
    component.inventoryForm.controls['pricePerKg'].setValue('');
    component.inventoryForm.controls['stockQuantity'].setValue('');
    
    expect(component.inventoryForm.valid).toBe(false);
  });

  it('should make the form valid when all required fields are filled', () => {
    component.inventoryForm.controls['type'].setValue('Nufacturing');
    component.inventoryForm.controls['category'].setValue('Raw Materials');
    component.inventoryForm.controls['ingredientName'].setValue('Ingredient A');
    component.inventoryForm.controls['pricePerKg'].setValue(25);
    component.inventoryForm.controls['stockQuantity'].setValue(100);
    
    expect(component.inventoryForm.valid).toBe(true);
  });

  it('should close the dialog with form data when onSubmit is called', () => {
    const dialogRef = TestBed.inject(MatDialogRef);
    spyOn(dialogRef, 'close');

    component.inventoryForm.setValue({
      type: 'Nufacturing',
      category: 'Raw Materials',
      subCategory: 'Customer 1',
      ingredientName: 'Ingredient A',
      pricePerKg: 25,
      stockQuantity: 100,
    });

    component.onSubmit();

    expect(dialogRef.close).toHaveBeenCalledWith({
      type: 'Nufacturing',
      category: 'Raw Materials',
      subCategory: 'Customer 1',
      items: [
        {
          ingredientName: 'Ingredient A',
          pricePerKg: 25,
          stockQuantity: 100,
        },
      ],
    });
  });

  it('should close the dialog without data when onCancel is called', () => {
    const dialogRef = TestBed.inject(MatDialogRef);
    spyOn(dialogRef, 'close');

    component.onCancel();

    expect(dialogRef.close).toHaveBeenCalled();
  });
});
