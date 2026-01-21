/**
 * Copyright (c) 2026 RYT Bank.
 * All rights reserved.
 *
 * Project: Web Automation Test
 * File: TS002_products.spec.ts
 * Description: Test Suite 002: Test cases for Products feature (selecting and removing products).
 * Author: Hisyamil Ramble
 * Created: 18-Jan-2026
 */

import { test, expect } from '@playwright/test';
import { LoginPage } from '../../POM/001_login';
import { ProductsPage } from '../../POM/002_products';
import { CartPage } from '../../POM/003_carts';

test.describe('Test Suite 002: Products Page', () => {

  let loginPage: LoginPage;
  let productsPage: ProductsPage;
  let cartPage: CartPage;

  // Login before each test execution
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('TC004: Verify all products available are listed in cart', async ({ page }) => {
    // Add all products
    await productsPage.addBackpackToCart();
    await productsPage.addBikeLightToCart();
    await productsPage.addBoltShirtAddBtn();
    await productsPage.addFleeceJacketAddBtn();
    await productsPage.addOnesieAddBtn();
    await productsPage.addRedShirtAddBtn();

    // Open cart
    await productsPage.openCart();

    // Verify all products are listed in cart
    await cartPage.verifyProductsInCart([
      'Sauce Labs Backpack',
      'Sauce Labs Bike Light',
      'Sauce Labs Bolt T-Shirt',
      'Sauce Labs Fleece Jacket',
      'Sauce Labs Onesie',
      'Test.allTheThings() T-Shirt (Red)'
    ]);
  });

  test('TC005: Verify products added can be removed', async ({ page }) => {
    // Add all products
    await productsPage.addBackpackToCart();
    await productsPage.addBikeLightToCart();
    await productsPage.addBoltShirtAddBtn();
    await productsPage.addFleeceJacketAddBtn();
    await productsPage.addOnesieAddBtn();
    await productsPage.addRedShirtAddBtn();

    // Open cart
    await productsPage.openCart();

    //Remove all products
    await productsPage.removeBackpackToCart();
    await productsPage.removeBikeLightToCart();
    await productsPage.removeBoltShirtAddBtn();
    await productsPage.removeFleeceJacketAddBtn();
    await productsPage.removeOnesieAddBtn();
    await productsPage.removeRedShirtAddBtn();

    // Verify all products removed
    const productNames = page.locator('.inventory_item_name');
    await expect(productNames).not.toBeVisible();  
  });

});
