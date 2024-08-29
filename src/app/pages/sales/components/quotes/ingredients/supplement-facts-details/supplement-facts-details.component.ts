import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-supplement-facts-details',
  templateUrl: './supplement-facts-details.component.html',
  styleUrls: ['./supplement-facts-details.component.scss'],
})
export class SupplementFactsDetailsComponent implements OnInit {
  detailsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.detailsForm = this.fb.group({
      directions: [''],
      allergens: [
        'This product does not contain any milk, eggs, fish, Crustacean shellfish, tree nuts, peanuts, wheat, and soybeans.',
      ],
      glutenFree: ['Yes'],
      veganFriendly: ['Yes'],
      warnings: ['Yes'],
      warningInstructions: [
        'Do not exceed recommended dose. Pregnant or nursing mothers, children under the age of 18, and individuals with a known medical condition should consult a physician before using this or any dietary supplement.',
      ],
      storageRequirements: ['Yes'],
      storageInstructions: ['Store in a cool dry place.'],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.detailsForm.value);
  }
}
