import { Injectable } from '@angular/core';

interface Ingredient {
  name: string;
  perCapsule: number;
  pricePerKg: string;
  moqKg: number;
  vendor: string;
  leadTime: string;
}

interface OrderInfo {
  capsulesPerBottle: number;
  launchQty: number;
}

interface MasterCartonInfo {
  bottlesPerMasterCase: number;
}

@Injectable({
  providedIn: 'root',
})
export class GlobalServiceService {
  private ingredients: Ingredient[] = [
    {
      name: 'Vitamin C (as absorbic acid)',
      perCapsule: 51,
      pricePerKg: '$6.00',
      moqKg: 25.0,
      vendor: 'Trafa',
      leadTime: 'In Stock',
    },
    {
      name: 'Vitamin B1 (thiamine)',
      perCapsule: 25,
      pricePerKg: '$24',
      moqKg: 25.0,
      vendor: 'Trafa',
      leadTime: 'In Stock',
    },
    {
      name: 'Vitamin B2 (riboflavin)',
      perCapsule: 25,
      pricePerKg: '$38',
      moqKg: 25.0,
      vendor: 'JHD',
      leadTime: '',
    },
    {
      name: 'Niacin (niacinamide)',
      perCapsule: 10,
      pricePerKg: '$10',
      moqKg: 25.0,
      vendor: 'Trafa',
      leadTime: 'In Stock',
    },
    {
      name: 'Vitamin B6 (pyridoxyl 5 phosphate)',
      perCapsule: 25,
      pricePerKg: '$125',
      moqKg: 25.0,
      vendor: 'Trafa',
      leadTime: 'In Stock',
    },
    {
      name: 'Pantothenic acid (d-calcium pantothenate)',
      perCapsule: 25,
      pricePerKg: '$17',
      moqKg: 25.0,
      vendor: 'Trafa',
      leadTime: 'In Stock',
    },
    {
      name: 'Manganese (manganese aminomin)',
      perCapsule: 12.5,
      pricePerKg: '$16',
      moqKg: 25.0,
      vendor: 'Trafa',
      leadTime: '5 Days',
    },
    {
      name: 'Calcium',
      perCapsule: 4.5,
      pricePerKg: '$14',
      moqKg: 25.0,
      vendor: 'Trafa',
      leadTime: '5 Days',
    },
    {
      name: 'Manganese (manganese glycinate)',
      perCapsule: 300,
      pricePerKg: '$26',
      moqKg: 25.0,
      vendor: 'Jia Herb',
      leadTime: '1 Week',
    },
    {
      name: 'Zinc (Zinc aspartate)',
      perCapsule: 50,
      pricePerKg: '$14',
      moqKg: 25.0,
      vendor: 'Trafa',
      leadTime: '5 Days',
    },
    {
      name: 'Cysteine (L)',
      perCapsule: 100,
      pricePerKg: '$17',
      moqKg: 25.0,
      vendor: 'Trafa',
      leadTime: '5 Days',
    },
    {
      name: 'Magnesium stearate',
      perCapsule: 100,
      pricePerKg: '$8',
      moqKg: 1.0,
      vendor: '',
      leadTime: '',
    },
  ];

  private orderInfo: OrderInfo = {
    capsulesPerBottle: 50,
    launchQty: 2000,
  };

  private masterCartonInfo: MasterCartonInfo = {
    bottlesPerMasterCase: 135,
  };

  constructor() {}

  // Ingredients Methods
  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  updateIngredients(newIngredients: Ingredient[]): void {
    this.ingredients = newIngredients;
  }

  // Order Info Methods
  getOrderInfo(): OrderInfo {
    return this.orderInfo;
  }

  updateOrderInfo(newOrderInfo: OrderInfo): void {
    this.orderInfo = newOrderInfo;
  }

  // Master Carton Info Methods
  getMasterCartonInfo(): MasterCartonInfo {
    return this.masterCartonInfo;
  }

  updateMasterCartonInfo(newMasterCartonInfo: MasterCartonInfo): void {
    this.masterCartonInfo = newMasterCartonInfo;
  }
}
