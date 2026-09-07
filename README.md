# Cucumber BDD Test Automation Assignment

## Project Overview
This repository contains an End-to-End (E2E) automated test suite developed using **Cypress**, **Cucumber (Gherkin)**, and the **Page Object Model (POM)** design pattern. The project automates an online purchase flow on the [SauceDemo](https://www.saucedemo.com/) e-commerce platform.

---

## 🏛️ Architecture & Folder Structure

The project follows a clean 3-layer BDD architecture:

` ` `
cypress/
├── e2e/
│   ├── features/               # Layer 1: Gherkin feature files (.feature)
│   │   ├── login.feature
│   │   └── product_purchase.feature
│   ├── step_definitions/       # Layer 2: Step definitions mapping Gherkin steps to JS
│   │   ├── LoginStepDefinition.js
│   │   └── PurchaseSteps.js
│   └── pages/                  # Layer 3: Page Object Model (locators & page actions)
│       ├── LoginPage.js
│       └── SauceDemoPage.js
` ` `

---

## 🚀 Test Scenario

### **Product Search & Purchase Flow**
The primary scenario (`product_purchase.feature`) validates the end-to-end checkout journey:
1. **Given:** User navigates to the login page (`[https://www.saucedemo.com/](https://www.saucedemo.com/)`).
2. **When:** User logs in with valid credentials (`standard_user` / `secret_sauce`).
3. **And:** User adds a product (*Sauce Labs Backpack*) to the shopping cart.
4. **And:** User proceeds through cart checkout and enters personal details (*Furkan Kerse, 06000*).
5. **And:** User completes the order.
6. **Then:** System validates the confirmation message (*"Thank you for your order!"*).

---

## 🛠️ Key Concepts & Design Patterns
- **Behavior-Driven Development (BDD):** Uses human-readable Gherkin syntax (`Given`, `When`, `Then`) to bridge communication between technical and non-technical stakeholders.
- **Page Object Model (POM):** Encapsulates UI elements and interaction logic inside page classes (`SauceDemoPage.js`) to maintain clean, reusable code and ease future maintenance.
- **Assertions:** Validates checkout completion dynamically using Cypress assertions.

---

## 💻 Running Tests Locally

1. **Install dependencies:**
   ```bash
   npm install
   npx cypress open
   npx cypress run