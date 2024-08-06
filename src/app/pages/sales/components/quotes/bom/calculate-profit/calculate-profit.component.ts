import { Component } from '@angular/core';

@Component({
  selector: 'app-calculate-profit',
  templateUrl: './calculate-profit.component.html',
  styleUrls: ['./calculate-profit.component.scss'],
})
export class CalculateProfitComponent {
  totalCostPerBottleWithMOQ: number = 6.1; // Example value
  totalCostPerBottleWithoutMOQ: number = 2.9; // Example value

  suggestedPricesWithMOQ: any[] = [];
  suggestedPricesWithoutMOQ: any[] = [];

  calculateSuggestedPrices(): void {
    const margins = [10, 15, 20, 25, 30, 35, 40, 45, 50];
    this.suggestedPricesWithMOQ = [];
    this.suggestedPricesWithoutMOQ = [];

    margins.forEach((margin) => {
      const priceWithMOQ = this.totalCostPerBottleWithMOQ * (1 + margin / 100);
      const priceWithoutMOQ =
        this.totalCostPerBottleWithoutMOQ * (1 + margin / 100);

      this.suggestedPricesWithMOQ.push({
        margin: `${margin}%`,
        price: `$${priceWithMOQ.toFixed(2)}`,
      });
      this.suggestedPricesWithoutMOQ.push({
        margin: `${margin}%`,
        price: `$${priceWithoutMOQ.toFixed(2)}`,
      });
    });
  }
}
