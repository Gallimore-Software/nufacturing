import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-supplement-facts-only',
  templateUrl: './supplement-facts-only.component.html',
  styleUrls: ['./supplement-facts-only.component.scss'],
})
export class supplementFactsOnlyComponent implements OnInit {
  factForm: FormGroup;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'ingredient',
    'twoCapsulePerServing',
    'intentionalOverages',
    'fiftyCapsulesPerBottle',
    'dailyValue',
    'actions',
  ];
  selectedFact: any;

  facts = [
    {
      ingredient: 'Vitamin C (as absorbic acid)',
      twoCapsulePerServing: '',
      intentionalOverages: '',
      fiftyCapsulesPerBottle: '',
      dailyValue: '',
    },
    {
      ingredient: 'Vitamin B1 (thiamine)',
      twoCapsulePerServing: '',
      intentionalOverages: '',
      fiftyCapsulesPerBottle: '',
      dailyValue: '',
    },
    {
      ingredient: 'Vitamin B2 (riboflavin)',
      twoCapsulePerServing: '',
      intentionalOverages: '',
      fiftyCapsulesPerBottle: '',
      dailyValue: '',
    },
    {
      ingredient: 'Niacin (niacinamide)',
      twoCapsulePerServing: '',
      intentionalOverages: '',
      fiftyCapsulesPerBottle: '',
      dailyValue: '',
    },
    {
      ingredient: 'Vitamin B6 (pyridoxyl 5 phosphate)',
      twoCapsulePerServing: '',
      intentionalOverages: '',
      fiftyCapsulesPerBottle: '',
      dailyValue: '',
    },
    {
      ingredient: 'Pantothenic acid (d-calcium pantothenate)',
      twoCapsulePerServing: '',
      intentionalOverages: '',
      fiftyCapsulesPerBottle: '',
      dailyValue: '',
    },
    {
      ingredient: 'Manganese (manganese aminomin)',
      twoCapsulePerServing: '',
      intentionalOverages: '',
      fiftyCapsulesPerBottle: '',
      dailyValue: '',
    },
    {
      ingredient: 'Calcium',
      twoCapsulePerServing: '',
      intentionalOverages: '',
      fiftyCapsulesPerBottle: '',
      dailyValue: '',
    },
    {
      ingredient: 'Manganese (manganese glycinate)',
      twoCapsulePerServing: '',
      intentionalOverages: '',
      fiftyCapsulesPerBottle: '',
      dailyValue: '',
    },
    {
      ingredient: 'Zinc (Zinc aspartate)',
      twoCapsulePerServing: '',
      intentionalOverages: '',
      fiftyCapsulesPerBottle: '',
      dailyValue: '',
    },
    {
      ingredient: 'Cysteine (L)',
      twoCapsulePerServing: '',
      intentionalOverages: '',
      fiftyCapsulesPerBottle: '',
      dailyValue: '',
    },
    {
      ingredient: 'Magnesium stearate',
      twoCapsulePerServing: '',
      intentionalOverages: '',
      fiftyCapsulesPerBottle: '',
      dailyValue: '',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.dataSource = new MatTableDataSource(this.facts);

    this.factForm = this.fb.group({
      ingredient: [''],
      twoCapsulePerServing: [''],
      intentionalOverages: [''],
      fiftyCapsulesPerBottle: [''],
      dailyValue: [''],
    });
  }

  ngOnInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewFactDetails(fact: any) {
    this.selectedFact = fact;
    this.factForm.patchValue(fact);
  }

  onSubmit() {
    const formValue = this.factForm.value;
    const existingFactIndex = this.facts.findIndex(
      (f) => f.ingredient === formValue.ingredient,
    );
    if (existingFactIndex >= 0) {
      this.facts[existingFactIndex] = formValue;
    } else {
      this.facts.push(formValue);
    }
    this.dataSource.data = this.facts;
    this.factForm.reset();
  }

  editFact(fact: any) {
    this.viewFactDetails(fact);
  }

  deleteFact(fact: any) {
    const index = this.facts.indexOf(fact);
    if (index >= 0) {
      this.facts.splice(index, 1);
      this.dataSource.data = this.facts;
    }
  }
}
