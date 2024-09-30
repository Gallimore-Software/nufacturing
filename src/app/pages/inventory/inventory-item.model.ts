export interface InventoryItem {
  _id: string;
  vendorName: string;
  sku: string;
  ingredientName: string;
  pricePerKg: number;
  stockQuantity: number;
  category: string;
  type: string;
  lotCode: string;
}
