describe('Funcionalidade: Contato', () => {

beforeEach(() => {
    cy.visit('index.html')
})

  it('Deve preencher formulário de contato com sucesso', () => {
    cy.get('[name="name"]').type('Leonardo Mantovaneli')
    cy.get('[name="email"]').type('leonardo.mantovaneli@teste.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Olá, esse é meu primeiro teste de automação')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.contains('Contato enviado com sucesso!').should('exist')
  
  });

  it('Deve validar mensagem de erro ao enviar sem preencher nome', () => {
    cy.get('[name="name"]').clear()
    cy.get('[name="email"]').type('leonardo.mantovaneli@teste.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Olá, esse é meu primeiro teste de automação')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher email', () => {
    cy.get('[name="name"]').type('Leonardo Mantovaneli')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Olá, esse é meu primeiro teste de automação')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.')
  });

  it('Deve validar mensagem de erro ao enviar sem selecionar assunto', () => {
    cy.get('[name="name"]').type('Leonardo Mantovaneli')
    cy.get('[name="email"]').type('leonardo.mantovaneli@teste.com')
    cy.get('[name="message"]').type('Olá, esse é meu primeiro teste de automação')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher mensagem', () => {
    cy.get('[name="name"]').type('Leonardo Mantovaneli')
    cy.get('[name="email"]').type('leonardo.mantovaneli@teste.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').clear()
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.') 
  });


}) 