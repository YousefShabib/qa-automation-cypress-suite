/// <reference types="cypress" />
import { User } from '../../support/User';

describe('User Login​', () => {
    it('Validate that an existing user can log in using valid credentials', () => {
        cy.visit("https://automationexercise.com/login")
        cy.get("[data-qa=login-email]").type(User.email)
        cy.get("[data-qa=login-password]").type(User.password)
        cy.get("[data-qa=login-button]").click()
        cy.url().should("eq", "https://automationexercise.com/")
        cy.get(".fa-lock").should("be.visible")
    })
})