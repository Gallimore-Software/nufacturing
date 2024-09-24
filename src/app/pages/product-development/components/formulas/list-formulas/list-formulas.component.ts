import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ListFormulasService } from './list-formulas.service'; // Adjust the path accordingly
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthService } from 'src/app/components/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateFormulasComponent } from '../create-formulas/create-formulas.component'; // Adjust path
import { ConfirmDialogComponent } from '../../../../../components/confirm-dialog/confirm-dialog.component';

export interface Ingredient {
  name: string;
  // scientificName: string;
  perUnit: number;
}

export interface FormulaItem {
  _id: string;
  code: string;
  name: string;
  productType: string;
  unitOfMeasurement: string;
  activeIngredients: Ingredient[];
  inactiveIngredients: Ingredient[];
  createdAt: Date;
  updatedAt: Date;
}

@Component({
  selector: 'app-formula',
  templateUrl: './list-formulas.component.html',
  styleUrls: ['./list-formulas.component.scss'],
})
export class ListFormulaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'sku',
    'displayName',
    // 'scientificName',
    'unitOfMeasurement',
    'productType',
    'activeIngredients',
    'inactiveIngredients',
    'createdAt',
    'actions',
  ];
  dataSource: MatTableDataSource<FormulaItem> = new MatTableDataSource();
  isAdminOrManager: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private formulaService: ListFormulasService,
    private authService: AuthService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.refreshFormulas();

    // Check if the user is admin or manager
    this.authService.userRole.subscribe((role: string | null) => {
      this.isAdminOrManager = role === 'admin' || role === 'manager';
    });
  }

  ngAfterViewInit() {
    // Set paginator and sorter after view initialization
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  createNewFormula() {
    const dialogRef = this.dialog.open(CreateFormulasComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: FormulaItem | undefined) => {
      if (result) {
        this.formulaService
          .createFormula(result)
          .subscribe((newFormula: any) => {
            this.dataSource.data = [
              ...this.dataSource.data,
              { _id: newFormula._id, ...newFormula },
            ];
            console.log(this.dataSource.data);
          });
      }
    });
  }

  editFormulaItem(item: FormulaItem) {
    const dialogRef = this.dialog.open(CreateFormulasComponent, {
      width: '800px',
      data: item,
    });

    dialogRef.afterClosed().subscribe((result: FormulaItem | undefined) => {
      if (result) {
        this.formulaService.updateFormula(item._id, result).subscribe(() => {
          console.log('Formula updated:', result); // Debugging line
          this.refreshFormulas();
        });
      }
    });
  }

  refreshFormulas() {
    this.formulaService.getFormulas().subscribe((data: FormulaItem[]) => {
      const transformedData = data.map((item) => ({
        ...item,
        sku: item.code,
        displayName: item.name,
        // scientificName: item.activeIngredients.length > 0 ? item.activeIngredients[0].scientificName : '', // Display first active ingredient's scientific name
      }));

      this.dataSource.data = transformedData;
    });
  }

  deleteFormulaItem(item: FormulaItem) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        message: `Are you sure you want to delete the formula ${item.name}?`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.formulaService.deleteFormula(item._id).subscribe(() => {
          this.refreshFormulas();
        });
      }
    });
  }
}
