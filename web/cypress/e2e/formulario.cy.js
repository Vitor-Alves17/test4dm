describe('formulario', () => {
  it('test', () => {
    cy.login('4DM@gmail.com', '4DM')
    cy.contains('button', 'Formulário').should('be.visible').click()
    cy.contains('h1', 'Consultoria').should('be.visible')

    cy.get('#name').type('Fiama')
    cy.get('#email').type('Fiama@fiama.fiama')
    cy.get('#phone').type('11 99999-9999')
    cy.get('#consultancyType').select('In Company')


    cy.contains('label', 'Pessoa Jurídica').find('input[type=radio]').click().should('be.checked')
    cy.contains('label', 'Pessoa Física').find('input[type=radio]').should('be.not.checked')
  })
})