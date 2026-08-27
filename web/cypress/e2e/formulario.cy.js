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

    const sociais = [
        'Instagram',
        'YouTube',
        'LinkedIn',
        'Indicação de Amigo',
        'Udemy'
    ]

    sociais.forEach((social) => {
      cy.contains('label', social).find('input[type=checkbox]').click().should('be.checked')
    })

    const techs = ['Python, ', 'Java, ', 'JavaScript, ', 'HTML, ', 'CSS']
    techs.forEach(tech => {
      cy.get('#technologies').type(tech)
    })
  })
})