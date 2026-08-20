Cypress.Commands.add('login', (email, password) => {
        cy.visit('http://localhost:3000')
        cy.get('#email').type('4DM@gmail.com')
        cy.get('#password').type('4DM')
        cy.contains('button', 'Entrar').click()
        cy.contains('Dashboard').should("be.visible")

})