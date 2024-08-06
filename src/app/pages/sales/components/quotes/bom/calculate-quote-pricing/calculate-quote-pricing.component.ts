import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculate-quote-pricing',
  templateUrl: './calculate-quote-pricing.component.html',
  styleUrls: ['./calculate-quote-pricing.component.scss'],
})
export class CalculateQuotePricingComponent {
  quoteForm: FormGroup;
  displayedColumns: string[] = ['moq', 'price'];
  quotePrices: { moq: number; price: number }[] = [];

  constructor(private fb: FormBuilder) {
    this.quoteForm = this.fb.group({
      customerSalePrice: [8.05, Validators.required],
      // launchQty: [2000, Validators.required]
    });

    this.quoteForm.valueChanges.subscribe((values) => {
      this.updateQuotePricing(values.customerSalePrice, values.launchQty);
    });

    // Initial calculation
    this.updateQuotePricing(8.05, 2000);
  }

  updateQuotePricing(customerSalePrice: number, launchQty: number) {
    const basePrice = 8.05; // Base price for calculation
    const priceTiers = [
      { moq: 2000, price: 8.05 },
      { moq: 5000, price: 4.9 },
      { moq: 7500, price: 3.92 },
      { moq: 10000, price: 3.68 },
      { moq: 20000, price: 3.44 },
    ];

    this.quotePrices = priceTiers.map((tier) => ({
      moq: tier.moq,
      price: customerSalePrice * (tier.price / basePrice),
    }));

    // if (launchQty) {
    //   this.quotePrices.push({
    //     moq: launchQty,
    //     price: this.calculateDynamicPrice(customerSalePrice, launchQty)
    //   });
    // }
  }

  calculateDynamicPrice(customerSalePrice: number, launchQty: number): number {
    const basePrice = 8.05;
    const baseLaunchQty = 2000;
    const scaleFactor = baseLaunchQty / launchQty;
    return customerSalePrice * scaleFactor;
  }
}
