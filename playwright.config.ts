/**
 * Copyright (c) 2026 RYT Bank.
 * All rights reserved.
 *
 * Project: Web Automation Test
 * File: playwright.config.ts
 * Description: Configuration files for test report generation.
 * Author: Hisyamil Ramble
 * Created: 18-Jan-2026
 */

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,                        // Run browser in headed mode
    viewport: { width: 1280, height: 720 }, // Set size for the browser
    screenshot: 'on',                       // Capture screenshot after each test
    video: 'retain-on-failure',             // Record video only when a test fails  
  },

  reporter: [
    ['html', { outputFolder: 'Test-Report', open: 'always' }] // Automatically open the HTML report after test execution completes
  ],

});
