# Cypress E2E QA Automation Suite

This repository contains a set of QA automation tasks built with Cypress, covering selector strategy, end-to-end UI testing, and BDD-style test automation using Cucumber.

## Project Overview

The project is organized into three main QA automation tasks:

- **Task 1:** Identified and used reliable selectors for UI elements on the Conduit registration page.
- **Task 2:** Automated core user flows on AutomationExercise, including account creation, login, product search, cart, and product review scenarios.
- **Task 3:** Implemented Cucumber BDD tests for SauceDemo covering login with multiple users, checkout, and logout flows.

## Tech Stack

- Cypress
- JavaScript
- Cucumber Preprocessor
- Esbuild
- Git / GitHub

## Tested Applications

- Conduit Demo App: https://demo.productionready.io/#/register
- AutomationExercise: https://automationexercise.com
- SauceDemo: https://www.saucedemo.com

## Project Structure

```text
cypress/
  e2e/
    task1/
      task1.cy.js
    Task2/
      CreateAccount.cy.js
      UserLogin.cy.js
      SearchProduct.cy.js
      AddProductToCart.cy.js
      AddProductReview.cy.js
    Task3/
      sauce_demo.feature
      sauce_demo.js
```

## Key QA Skills Demonstrated

- End-to-end test automation for real web applications
- Stable selector usage and UI assertion strategy
- Regression coverage for critical user journeys
- BDD scenario design with readable feature files and step definitions
- Organized test structure across multiple testing tasks

## Installation

```bash
npm install
```

## Running Tests

Run Cypress in interactive mode:

```bash
npx cypress open
```

Run Task 3 Cucumber tests:

```bash
npm run test:task3
```

Run a specific Cypress spec:

```bash
npx cypress run --spec "cypress/e2e/Task2/UserLogin.cy.js"
```

## Notes

Task 3 uses Cypress with Cucumber Preprocessor to write feature scenarios and step definitions for SauceDemo business flows.
