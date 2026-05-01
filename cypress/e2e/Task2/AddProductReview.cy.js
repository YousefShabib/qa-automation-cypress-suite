import { User } from '../../support/User';

/// <reference types="cypress" />
describe('Add a Product Review​​', () => {
    it('Validate that a logged-in user can add a review to a product​', () => {
        cy.visit("https://automationexercise.com/login")
        cy.get("[data-qa=login-email]").type(User.email)
        cy.get("[data-qa=login-password]").type(User.password)
        cy.get("[data-qa=login-button]").click()
        cy.url().should("eq", "https://automationexercise.com/")

        cy.get(".navbar-nav").contains(" Logged in as").should("be.visible")
        cy.get(".choose a").first().click()
        cy.url().should("eq", "https://automationexercise.com/product_details/1")

        cy.get("#name").type("Yousef")
        cy.get("#email").type(User.email)
        cy.get("#review").first().type("Wow Amazing Product")
        cy.get("#button-review").click()
        cy.get(".alert-success span").should("be.visible")
    })
})