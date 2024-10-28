import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

interface Fact {
  ingredient: string;
  twoCapsulePerServing: string;
  intentionalOverages: string;
  fiftyCapsulesPerBottle: string;
  dailyValue: string;
}

@Component({
  selector: 'app-supplement-facts-only',
  templateUrl: './supplement-facts-only.component.html',
  styleUrls: ['./supplement-facts-only.component.scss'],
})
export class SupplementFactsOnlyComponent implements OnInit {
  factForm: FormGroup;
  dataSource: MatTableDataSource<Fact>;
  displayedColumns: string[] = [
    'ingredient',
    'twoCapsulePerServing',
    'intentionalOverages',
    'fiftyCapsulesPerBottle',
    'dailyValue',
    'actions',
  ];
  selectedFact: Fact | null = null;

  facts: Fact[] = [
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
    // Other facts...
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

  viewFactDetails(fact: Fact) {
    this.selectedFact = fact;
    this.factForm.patchValue(fact);
  }

  onSubmit() {
    const formValue = this.factForm.value as Fact;
    const existingFactIndex = this.facts.findIndex(
      (f) => f.ingredient === formValue.ingredient
    );
    if (existingFactIndex >= 0) {
      this.facts[existingFactIndex] = formValue;
    } else {
      this.facts.push(formValue);
    }
    this.dataSource.data = this.facts;
    this.factForm.reset();
  }

  editFact(fact: Fact) {
    this.viewFactDetails(fact);
  }

  deleteFact(fact: Fact) {
    const index = this.facts.indexOf(fact);
    if (index >= 0) {
      this.facts.splice(index, 1);
      this.dataSource.data = this.facts;
    }
  }
}
