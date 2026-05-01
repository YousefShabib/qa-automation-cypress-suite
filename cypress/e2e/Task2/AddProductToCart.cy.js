/// <reference types="cypress" />
describe('Add Product to Cart​', () => {
    it('Validate that a user can add a product to the shopping cart from the product details page.', () => {
        cy.visit("https://automationexercise.com/products")
        cy.get(".choose a").first().click()
        cy.url().should("eq", "https://automationexercise.com/product_details/1")
        cy.get("[type=button]").first().click()
        cy.get(".modal-content").should("be.visible").and("contain.text", "Added!")
        cy.get(".text-center a").click()
        cy.url().should("eq", "https://automationexercise.com/view_cart")
        cy.get("#cart_items").should("be.visible")
        cy.get(".cart_quantity").should("contain.text", "1")
    })
})