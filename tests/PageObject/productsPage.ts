import { expect, Locator, Page } from "@playwright/test";

export class ProductsPage {
  private readonly locators: Record<string, Locator>;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      inventoryList: this.page.locator('div.inventory_list'), 
      inventoryItem: this.page.locator('div.inventory_item'), 
      inventoryItemName: this.page.locator('div.inventory_item_name'), 
      inventoryItemPrice: this.page.locator('div.inventory_item_price'), 
      addToCartButton: this.page.locator('button.btn_inventory'), 
    };
  }

  // Verify that user is navigated to the products page
  async navigateToProductsPage(): Promise<void> {
    await expect(this.locators.inventoryList).toBeVisible();
  }
}