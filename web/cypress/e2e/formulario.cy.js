describe('formulario', () => {
  it('test', () => {
    cy.login('4DM@gmail.com', '4DM')
    cy.contains('button', 'Formulário').should('be.visible').click()
    cy.contains('h1', 'Consultoria').should('be.visible')

    cy.get('#name').type('Fiama ama')
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
      cy.get('#technologies').type(tech + '{enter}').should('be.visible')
    })
    cy.get("input[type='file']").selectFile('./cypress/fixtures/image.jpg' , {force: true})

    cy.contains('label', 'Mais Detalhes').type('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet animi delectus esse eum fugit, harum laborum minima molestiae numquam obcaecati odio omnis optio qui quos saepe veniam voluptate, voluptates!').should('be.visible')

    cy.contains('label', 'Li e aceito os termos de uso').find('input[type=checkbox]').click().should('be.checked')

    cy.contains('button', 'Enviar formulário').click()

    cy.contains("Sucesso").should('be.visible')
  })
  it('blank spaces', () => {
    cy.login('4DM@gmail.com', '4DM')
    cy.contains('button', 'Formulário').should('be.visible').click()
    cy.contains('h1', 'Consultoria').should('be.visible')



    cy.contains('button', 'Enviar formulário').click()

    cy.contains('Digite nome e sobrenome').should('be.visible')
    cy.contains('Informe um email válido').should('be.visible')
    cy.contains('Você precisa aceitar os termos de uso').should('be.visible')
  })
})