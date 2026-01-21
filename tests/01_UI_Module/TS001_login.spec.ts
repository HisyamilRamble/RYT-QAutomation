/**
 * Copyright (c) 2026 RYT Bank.
 * All rights reserved.
 *
 * Project: Web Automation Test
 * File: TS001_login.spec.ts
 * Description: Test Suite 001: Test cases for Login feature (valid and invalid login).
 * Author: Hisyamil Ramble
 * Created: 18-Jan-2026
 */

import { test, expect } from '@playwright/test';
import { LoginPage } from '../../POM/001_login';

test.describe('Test Suite 001: Login Page', () => {
  let loginPage: LoginPage;

  // Initialize LoginPage before each test execution
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });


  test('TC001: Verify login with valid username and password', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');

    // Verify products page is displayed after successful login
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('TC002: Verify login with invalid username', async ({ page }) => {
    await loginPage.login('user', 'secret_sauce');

    // Verify error message appears for invalid username
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
  });

  test('TC003: Verify login with invalid password', async ({ page }) => {
    await loginPage.login('standard_user', 'secret');

    // Verify error message appears for invalid password
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
  });
  
});
