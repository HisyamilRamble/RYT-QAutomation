/**
 * Copyright (c) 2026 RYT Bank.
 * All rights reserved.
 *
 * Project: Web Automation Test
 * File: 002_products.ts
 * Description: This file defines the Page Object Model (POM) for the Products page.
 * Author: Hisyamil Ramble
 * Created: 18-Jan-2026
 */

import { Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;

  // Add to cart button locators
  readonly backpackAddBtn = '#add-to-cart-sauce-labs-backpack';
  readonly bikeLightAddBtn = '#add-to-cart-sauce-labs-bike-light';
  readonly boltShirtAddBtn = '#add-to-cart-sauce-labs-bolt-t-shirt';
  readonly fleeceJacketAddBtn = '#add-to-cart-sauce-labs-fleece-jacket';
  readonly onesieAddBtn = '#add-to-cart-sauce-labs-onesie';
  readonly redShirtAddBtn = '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]';

  // Remove button locators
  readonly backpackRmvBtn = '#remove-sauce-labs-backpack';
  readonly bikeLightRmvBtn = '#remove-sauce-labs-bike-light';
  readonly boltShirtRmvBtn = '#remove-sauce-labs-bolt-t-shirt';
  readonly fleeceJacketRmvBtn = '#remove-sauce-labs-fleece-jacket';
  readonly onesieRmvBtn = '#remove-sauce-labs-onesie';
  readonly redShirtRmvBtn = '[data-test="remove-test.allthethings()-t-shirt-(red)"]';

  // Shopping cart icon locator
  readonly cartIcon = '.shopping_cart_link';

  constructor(page: Page) {
    this.page = page;
  }

  // Add products to cart
  async addBackpackToCart() {
    await this.page.click(this.backpackAddBtn);
  }
  async addBikeLightToCart() {
    await this.page.click(this.bikeLightAddBtn);
  }
  async addBoltShirtAddBtn(){
    await this.page.click(this.boltShirtAddBtn);
  }
    async addFleeceJacketAddBtn(){
    await this.page.click(this.fleeceJacketAddBtn);
  }
    async addOnesieAddBtn(){
    await this.page.click(this.onesieAddBtn);
  }  
    async addRedShirtAddBtn(){
    await this.page.click(this.redShirtAddBtn);
  }

  // Remove products from cart
  async removeBackpackToCart() {
    await this.page.click(this.backpackRmvBtn);
  }
  async removeBikeLightToCart() {
    await this.page.click(this.bikeLightRmvBtn);
  }
  async removeBoltShirtAddBtn(){
    await this.page.click(this.boltShirtRmvBtn);
  }
    async removeFleeceJacketAddBtn(){
    await this.page.click(this.fleeceJacketRmvBtn);
  }
    async removeOnesieAddBtn(){
    await this.page.click(this.onesieRmvBtn);
  }  
    async removeRedShirtAddBtn(){
    await this.page.click(this.redShirtRmvBtn);
  }

  // Navigate to shopping cart page
  async openCart() {
    await this.page.click(this.cartIcon);
  }
}

