/// <reference types="cypress" />
describe('Search for a Product​', () => {
    it('Validate that the correct results appear when using search bar using valid product name', () => {
        cy.visit("https://automationexercise.com/products")
        cy.get("#search_product").first().type("Polo")
        cy.get("#submit_search").first().click()
        cy.get(".features_items").should("be.visible")
        cy.get(".productinfo p").should("contain", "Polo")
        cy.url().should("eq", "https://automationexercise.com/products?search=Polo")
    })
    it('validate that the website display no product using invalid product name ', () => {
        cy.visit("https://automationexercise.com/products")
        cy.get("#search_product").first().type("apple")
        cy.get("#submit_search").first().click()
        cy.get(".product-image-wrapper").should("not.exist")
        cy.url().should("eq", "https://automationexercise.com/products?search=apple")
    })
})