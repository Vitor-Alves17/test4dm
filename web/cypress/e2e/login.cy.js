describe('login', () => {
  it('invalid login', () => {
    cy.visit('http://localhost:3000')
    cy.get('#email').type('e@gmail.com')
    cy.get('#password').type('xxx')
    cy.contains('button', 'Entrar').click()
    cy.contains('Acesso negado! Tente novamente').should("be.visible")
  })

  it('valid login', () => {
    cy.visit('http://localhost:3000')
    cy.get('#email').type('4DM@gmail.com')
    cy.get('#password').type('4DM')
    cy.contains('button', 'Entrar').click()
    cy.contains('Dashboard').should("be.visible")
  })

  it('blank spaces', () => {
    cy.visit('http://localhost:3000')
    cy.contains('button', 'Entrar').click()
    cy.contains('Ei, não esqueça de digitar seu email!').should("be.visible")
    cy.contains('Você precisa de uma senha para entrar! 🔒').should("be.visible")
  })

  it('invalid password', () => {
    cy.visit('http://localhost:3000')
    cy.get('#email').type('4DM@gmail.com')
    cy.get('#password').type('vvv')
    cy.contains('button', 'Entrar').click()
    cy.contains('Acesso negado! Tente novamente').should("be.visible")
  })
})