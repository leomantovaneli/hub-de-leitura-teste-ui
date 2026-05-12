///<reference types="cypress"/>


describe('Atividade prática de automação com Cypress,', () => {

    beforeEach(() => {
        cy.visit('index.html')
    })

    it('Deve criar conta com sucesso', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.visit('register.html')
        cy.get('#name').type('Teste Atividade EBAC')
        cy.get('#email').type(email)
        cy.get('#phone').type('11977788741')
        cy.get('#password').type('TesteEBAC@123')
        cy.get('#confirm-password').type('TesteEBAC@123')
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
        //Resultado Esperado: Cadastro realizado com sucesso e redirecionamento para dashboard

    });

    it('Deve realizar login e buscar um livro no catálogo', () => {
        cy.visit('login.html')
        cy.get('#email').type('teste29@testeatividadeebac.com')
        cy.get('#password').type('TesteEBAC@123')
        cy.get('#login-btn').click()
        cy.visit('catalog.html')
        cy.get('#search-input').type('Harry Potter')
        cy.wait(1000)
        //Resultado esperado: Exibir livro Harry Potter
    })

    it.only('Deve adicionar um livro à cesta e finalizar reserva', () => {
        cy.visit('login.html')
        cy.get('#email').type('teste29@testeatividadeebac.com')
        cy.get('#password').type('TesteEBAC@123')
        cy.get('#login-btn').click()
        cy.visit('catalog.html')
        cy.get('#search-input').type('Sun Tzu')
        cy.wait(1000)
       cy.get('.d-grid > .btn-outline-info').click()
       cy.get('#add-to-cart-btn').click()
       cy.get(':nth-child(2) > .nav-link').click()
       cy.get('#checkout-btn').click()
       cy.get('#terms-agreement').check({ force: true })
       cy.get('#confirm-reservations-btn').click()
       cy.get('.confirmation-card > .d-grid > .btn-warning').click()
       cy.get('#active-reservations').should('contain', '1')
       
    })





















});