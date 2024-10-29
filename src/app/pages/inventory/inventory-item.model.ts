export interface InventoryItem {
  _id: string;
  vendorName: string;
  ingredientName: string;
  pricePerKg: number;
  stockQuantity: number;
  category: string;
  type: string;
  lotCode: string;
  itemId: string;
  name: string;
  sku: string;
  pricePerUnit: number;
  status: string;
  quantities: {
    availableQuantity: number;
    minRestockQuantity: number;
    inStock: number;
  };
}
