/**
 * Copyright (c) 2026 RYT Bank.
 * All rights reserved.
 *
 * Project: Web Automation Test
 * File: 003_carts.ts
 * Description: This file defines the Page Object Model (POM) for the Carts page.
 * Author: Hisyamil Ramble
 * Created: 18-Jan-2026
 */

import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  // Product name locator inside cart items
  readonly productNames = '.inventory_item_name';
  // Checkout button locator
  readonly checkoutButton = '#checkout';

  constructor(page: Page) {
    this.page = page;
  }
  
  // Verify the correct item is listed
  async verifyProductsInCart(expectedProducts: string[]) {
    const products = this.page.locator(this.productNames);

    // Extract all visible product names from cart
    const actualProducts = await products.allTextContents();

    // Verify each added products exists in the cart
    expect(actualProducts.length).toBe(expectedProducts.length);
    for (const expected of expectedProducts) {
      expect(actualProducts).toContain(expected);
    }
  }

  // Navigate to checkout page
  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }
}


