/**
 * Copyright (c) 2026 RYT Bank.
 * All rights reserved.
 *
 * Project: Web Automation Test
 * File: 004_checkout.ts
 * Description: This file defines the Page Object Model (POM) for the Checkouts page.
 * Author: Hisyamil Ramble
 * Created: 18-Jan-2026
 */

import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput = '#first-name';
  readonly lastNameInput = '#last-name';
  readonly postalCodeInput = '#postal-code';
  readonly continueButton = '#continue';
  readonly finishButton = '#finish';
  readonly confirmationMessage = '.complete-header';

  constructor(page: Page) {
    this.page = page;
  }

  async fillCheckoutDetails(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
    await this.page.click(this.continueButton);
  }

  async finishCheckout() {
    await this.page.click(this.finishButton);
  }

  async verifySuccessMessage(message: string) {
    await expect(this.page.locator(this.confirmationMessage)).toHaveText(message);
  }
}
