/**
 * Copyright (c) 2026 RYT Bank.
 * All rights reserved.
 *
 * Project: Web Automation Test
 * File: TS003_checkout.spec.ts
 * Description: Test Suite 003: Test cases for Checkouts feature (checkout selected products).
 * Author: Hisyamil Ramble
 * Created: 18-Jan-2026
 */

import { test, expect } from '@playwright/test';
import { LoginPage } from '../../POM/001_login';
import { ProductsPage } from '../../POM/002_products';
import { CartPage } from '../../POM/003_carts';
import { CheckoutPage } from '../../POM/004_checkout';

test.describe('Test Suite 003: Checkout Page', () => {

  let loginPage: LoginPage;
  let productsPage: ProductsPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  // Login before each test execution
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('TC006: Verify products selected can be checkout', async ({ page }) => {
    // Add product to cart
    await productsPage.addBackpackToCart();
    await productsPage.addBikeLightToCart();
    await productsPage.addBoltShirtAddBtn();
    await productsPage.addFleeceJacketAddBtn();
    await productsPage.addOnesieAddBtn();
    await productsPage.addRedShirtAddBtn();

    // Open cart and verify selected product
    await productsPage.openCart();
    await cartPage.verifyProductsInCart([
      'Sauce Labs Backpack',
      'Sauce Labs Bike Light',
      'Sauce Labs Bolt T-Shirt',
      'Sauce Labs Fleece Jacket',
      'Sauce Labs Onesie',
      'Test.allTheThings() T-Shirt (Red)'
    ]);

    // Proceed for checkout page
    await cartPage.proceedToCheckout();

    // Verify Checkout pages
    await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
  });

  test('TC007: Verify a complete purchased for selected products', async ({ page }) => {
    // Add product to cart
    await productsPage.addBackpackToCart();
    await productsPage.addBikeLightToCart();
    await productsPage.addBoltShirtAddBtn();
    await productsPage.addFleeceJacketAddBtn();
    await productsPage.addOnesieAddBtn();
    await productsPage.addRedShirtAddBtn();

    // Open cart and verify product
    await productsPage.openCart();
    await cartPage.verifyProductsInCart([
      'Sauce Labs Backpack',
      'Sauce Labs Bike Light',
      'Sauce Labs Bolt T-Shirt',
      'Sauce Labs Fleece Jacket',
      'Sauce Labs Onesie',
      'Test.allTheThings() T-Shirt (Red)'
    ]);

    // Proceed for checkout page and fill information
    await cartPage.proceedToCheckout();
    await checkoutPage.fillCheckoutDetails('Hisyamil', 'Ramble', '63000');

    // Finish checkout and verify order completion
    await checkoutPage.finishCheckout();
    await checkoutPage.verifySuccessMessage('Thank you for your order!');
  });

});