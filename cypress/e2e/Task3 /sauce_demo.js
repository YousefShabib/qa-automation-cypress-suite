const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const password = "secret_sauce";

Given("I open SauceDemo login page", () => {
  cy.visit("https://www.saucedemo.com");
});

When("I login with username {string}", (username) => {
  cy.get('[data-test="username"]').clear().type(username);
  cy.get('[data-test="password"]').clear().type(password);
  cy.get('[data-test="login-button"]').click();
});

Then("I should see the products page", () => {
  cy.get('[data-test="title"]').should("contain", "Products");
  cy.get('[data-test="inventory-list"]').should("be.visible");
});

When("I add {string} to the cart", (productName) => {
  cy.contains('[data-test="inventory-item"]', productName)
    .find("button")
    .click();
});

When("I open the cart", () => {
  cy.get('[data-test="shopping-cart-link"]').click();
});

When("I start checkout", () => {
  cy.get('[data-test="checkout"]').click();
});

Then("I should see the checkout information page", () => {
  cy.url().should("include", "/checkout-step-one.html");
  cy.get('[data-test="title"]').should("contain", "Checkout: Your Information");
});

When("I logout", () => {
  cy.get("#react-burger-menu-btn").click();
  cy.get('[data-test="logout-sidebar-link"]').click();
});

Then("I should be back on the login page", () => {
  cy.url().should("include", "saucedemo.com");
  cy.get('[data-test="login-button"]').should("be.visible");
});
