import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-costs',
  templateUrl: './order-costs.component.html',
  styleUrls: ['./order-costs.component.scss'],
})
export class OrderCostsComponent implements OnInit {
  orderCostForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.orderCostForm = this.fb.group({
      ngfCostPerBottle: ['$6.09'],
      customerSalePricePerBottle: ['$8.05'],
    });

    // Subscribe to form changes to update the preview dynamically
    this.orderCostForm.valueChanges.subscribe((value) => {
      // Update preview data dynamically
      // The view will automatically update due to Angular's change detection
    });
  }

  ngOnInit(): void {}
}
