# RYT-QAutomation

Automation tests for RYT Bank technical assessment using Playwright (TypeScript).  
Includes **Web UI** and **API** test automation modules.

--------------------------------------------------------------------------------

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Prerequisites](#prerequisites)  
3. [Setup](#setup)  
4. [Running Tests](#running-tests)  
5. [Project Structure](#project-structure)  
6. [Test Reports](#test-reports)  
7. [Notes](#notes)

--------------------------------------------------------------------------------

## Project Overview

This repository demonstrates automated testing skills for:

1. **Web UI Automation** 
   – Testing Swag Labs [https://www.saucedemo.com/] including:
      - Login
      - Add products to cart
      - Verify add to cart products
      - Checkout and confirm order completion

2. **API Automation** – Testing JSONPlaceholder [https://jsonplaceholder.typicode.com/] `/posts` endpoint CRUD operations:
   - Create, Read, Update, and Delete posts
   - Validate response data and basic assertions

--------------------------------------------------------------------------------

## Prerequisites

- Node.js v24+ and npm v11+
- Playwright
- Git  
- Visual Code or any code editor  
- Internet connection to run live API and UI tests  

--------------------------------------------------------------------------------

## Setup

1. Clone the repository:
   - git clone https://github.com/HisyamilRamble/RYT-QAutomation.git
   - cd RYT-QAutomation

2. Install dependencies:
   - npm install

3. Install Playwright browsers:
   - npx playwright install

--------------------------------------------------------------------------------

## Running Tests

1. Run all tests:
   - npx playwright test

2. Run only UI test
   - npx playwright test tests/01_UI_Module

3. Run only API test
   - npx playwright test tests/02_API_Module

4. Generate HTML report
   - npx playwright show-report

--------------------------------------------------------------------------------

## Project Sturcture

RYT-QAutomation/
├── POM/   # Page Object Model classes
│ ├── 001_login.ts
│ ├── 002_products.ts
│ ├── 003_carts.ts
│ └── 004_checkout.ts
│
├── tests/    # Test scripts
│ ├── 01_UI_Module/    # Test scripts for UI Module
│ │ ├── TS001_login.spec.ts
│ │ ├── TS002_products.spec.ts
│ │ └── TS003_checkout.spec.ts
│ │
│ └── 02_API_Module/   # Test scripts for API Module
│   └── TS004_api.spec.ts
│
├── test-results/   # Playwright test results (screenshots, videos)
├── Test-Report/   # HTML reports
├── node_modules/   # Project dependencies
├── package.json
├── package-lock.json
└── playwright.config.ts     # Playwright configuration


--------------------------------------------------------------------------------

## Test Reports

Playwright generates reports at Test-Report/index.html
Screenshots for the API result (console output) can be found at test-results/

--------------------------------------------------------------------------------

## Notes

API tests use JSONPlaceholder as the test backend. Responses are not persisted, so GET after POST may return empty/failed results.
UI tests use stable selectors and assertions to ensure maintainable tests.
Designed with scalability in mind: Page Object Model and reusable helper methods.