/// <reference types="cypress" />
import { User } from '../../support/User';

describe('Create New User Account', () => {
    it('Validate that a new user can successfully register using the "Signup / Login" page.', () => {
        const timestamp = new Date().getTime();
        const uniqueEmail = User.email;

        cy.visit("https://automationexercise.com/login")
        cy.get("[data-qa=signup-name]").type("Yousef Shabib")
        cy.get("[data-qa=signup-email]").type(uniqueEmail)
        cy.get("[data-qa=signup-button]").click()

        // Wait for the signup page to load
        cy.url({ timeout: 10000 }).should("include", "/signup")

        // Fill in account information
        cy.get("#id_gender1").check()
        cy.get("#password").type(User.password)
        cy.get("#days").select("18")
        cy.get("#months").select("January")
        cy.get("#years").select("2005")
        cy.get("#newsletter").uncheck()
        cy.get("#optin").check()

        // Fill in address information
        cy.get("#first_name").type("Yousef")
        cy.get("#last_name").type("Shabib")
        cy.get("#company").type("Najah")
        cy.get("#address1").type("Nablus")
        cy.get("#address2").type("burqa")
        cy.get("#country").select("Canada")
        cy.get("#state").type("west bank")
        cy.get("#city").type("nablus")
        cy.get("#zipcode").type("12345")
        cy.get("#mobile_number").type("0599123123")

        // Submit the form
        cy.get("[data-qa=create-account]").click()

        // Validate account creation
        cy.get(".title").should("contain", "Account Created!")

        // Navigate to the home page
        cy.get(".btn-primary").contains("Continue").click()
        cy.url().should("eq", "https://automationexercise.com/")
    })
})