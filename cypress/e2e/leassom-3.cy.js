describe('Seloctors', () => {
    it('cypress commands', () => {
        cy.visit("/")
        cy.get("[name=username]").type("admin")
        cy.get("[type=password]").type("admin123")
        cy.get(".orangehrm-login-button").click()
        // cy.visit("/pim/viewEmployeeList")
        // cy.contains("Add")
        // cy.contains("a","Add")
        // cy.contains("button","Add")
        // cy.contains("Search")

    });
    
});