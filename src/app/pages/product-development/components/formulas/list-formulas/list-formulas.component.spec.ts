import { BehaviorSubject, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ListFormulasService } from './list-formulas.service';
import { AuthService } from 'src/app/components/auth/auth.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListFormulaComponent } from './list-formulas.component';
import { ConfirmDialogComponent } from '../../../../../components/confirm-dialog/confirm-dialog.component';
import { CreateFormulasComponent } from '../create-formulas/create-formulas.component';

describe('ListFormulaComponent - View All Formulas', () => {
  let component: ListFormulaComponent;
  let fixture: ComponentFixture<ListFormulaComponent>;
  let mockFormulaService: jest.Mocked<ListFormulasService>;
  let mockAuthService: jest.Mocked<AuthService>;
  let mockDialog: jest.Mocked<MatDialog>;

  beforeEach(() => {
    mockFormulaService = {
      getFormulas: jest.fn().mockReturnValue(of([])), // Mocked method
      createFormula: jest.fn().mockReturnValue(of({})),
      updateFormula: jest.fn().mockReturnValue(of({})),
      deleteFormula: jest.fn().mockReturnValue(of({})),
      http: {},
      apiUrl: {},
    } as unknown as jest.Mocked<ListFormulasService>;

    mockAuthService = {
      userRole: of('admin'),
      login: jest.fn(),
      logout: jest.fn(),
      checkToken: jest.fn().mockReturnValue(true),
      isLoggedIn: of(true),
      isAuthenticated: true,
      userRoleSubject: new BehaviorSubject('admin'),
      http: {},
      router: {},
    } as unknown as jest.Mocked<AuthService>;

    mockDialog = {
      open: jest.fn().mockReturnValue({
        afterClosed: () => of({}),
      }),
      openDialogs: [],
      afterOpened: of(),
      afterAllClosed: of(),
      closeAll: jest.fn(),
      getDialogById: jest.fn(),
      ngOnDestroy: jest.fn(),
    } as unknown as jest.Mocked<MatDialog>;

    TestBed.configureTestingModule({
      declarations: [ListFormulaComponent],
      providers: [
        { provide: ListFormulasService, useValue: mockFormulaService },
        { provide: AuthService, useValue: mockAuthService },
        { provide: MatDialog, useValue: mockDialog },
      ],
    });

    fixture = TestBed.createComponent(ListFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display all formulas in the list', () => {
    // Mock data
    const formulaData = [
      {
        _id: '1',
        code: '001',
        name: 'Formula One',
        unitOfMeasurement: 'kg',
        productType: 'Type A',
        activeIngredients: [],
        inactiveIngredients: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '2',
        code: '002',
        name: 'Formula Two',
        unitOfMeasurement: 'l',
        productType: 'Type B',
        activeIngredients: [],
        inactiveIngredients: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Spy on the service method
    jest
      .spyOn(mockFormulaService, 'getFormulas')
      .mockReturnValue(of(formulaData));

    // Call the method to refresh formulas
    component.refreshFormulas();
    fixture.detectChanges(); // Trigger change detection

    // Assertions
    expect(component.dataSource.data.length).toBe(2);
    // expect(component.dataSource.data).toBe(formulaData);
    // expect(component.dataSource.data).toEqual(formulaData);
  });

  it('should delete a formula when confirmed', () => {
    const formulaToDelete = {
      _id: '1',
      code: '001',
      name: 'Formula One',
      unitOfMeasurement: 'kg',
      productType: 'Type A',
      activeIngredients: [],
      inactiveIngredients: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Spy on the dialog open method
    const dialogSpy = jest.spyOn(mockDialog, 'open').mockReturnValue({
      afterClosed: () => of(true), // Simulate user confirming the action
    } as any);

    // Spy on the delete formula method
    const deleteSpy = jest
      .spyOn(mockFormulaService, 'deleteFormula')
      .mockReturnValue(of({}));

    // Spy on the refreshFormulas method
    const refreshSpy = jest
      .spyOn(component, 'refreshFormulas')
      .mockImplementation(() => {});

    // Call deleteFormulaItem
    component.deleteFormulaItem(formulaToDelete);

    // Assertions
    expect(dialogSpy).toHaveBeenCalledWith(ConfirmDialogComponent, {
      width: '400px',
      data: {
        message: `Are you sure you want to delete the formula ${formulaToDelete.name}?`,
      },
    });
    expect(deleteSpy).toHaveBeenCalledWith(formulaToDelete._id);
    expect(refreshSpy).toHaveBeenCalled();
  });

  it('should edit a formula and update it when confirmed', () => {
    const formulaToEdit = {
      _id: '1',
      code: '001',
      name: 'Formula One',
      unitOfMeasurement: 'kg',
      productType: 'Type A',
      activeIngredients: [],
      inactiveIngredients: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const updatedFormula = { ...formulaToEdit, name: 'Updated Formula One' };

    // Spy on the dialog open method
    const dialogSpy = jest.spyOn(mockDialog, 'open').mockReturnValue({
      afterClosed: () => of(updatedFormula), // Simulate user confirming the updated formula
    } as any);

    // Spy on the update formula method
    const updateSpy = jest
      .spyOn(mockFormulaService, 'updateFormula')
      .mockReturnValue(of({}));

    // Spy on the refreshFormulas method
    const refreshSpy = jest
      .spyOn(component, 'refreshFormulas')
      .mockImplementation(() => {});

    // Call editFormulaItem
    component.editFormulaItem(formulaToEdit);

    // Assertions
    expect(dialogSpy).toHaveBeenCalledWith(CreateFormulasComponent, {
      width: '450px',
      data: formulaToEdit,
    });
    expect(updateSpy).toHaveBeenCalledWith(formulaToEdit._id, updatedFormula);
    expect(refreshSpy).toHaveBeenCalled();
  });
});
