/**
 * Copyright (c) 2026 RYT Bank.
 * All rights reserved.
 *
 * Project: Web Automation Test
 * File: 001_login.ts
 * Description: This file defines the Page Object Model (POM) for the Login page.
 * Author: Hisyamil Ramble
 * Created: 18-Jan-2026
 */

import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  // Login page element locators
  readonly usernameInput = '#user-name';
  readonly passwordInput = '#password';
  readonly loginButton = '#login-button';

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to the web page
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Perform login using credentials
  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}
