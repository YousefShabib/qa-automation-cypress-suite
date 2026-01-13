describe('Check Login Functionality', () => {
    it('Validate that the user can login to the system', () => {
        cy.visit("/")
        cy.get("[name=username]").type("admin")
        cy.get("[type=password]").type("admin123")
        cy.get(".orangehrm-login-button").click()
        cy.get("[title='Assign Leave']").first().click()
        cy.get(".oxd-autocomplete-text-input input").type("Yousef Shabib")
        

    });

});