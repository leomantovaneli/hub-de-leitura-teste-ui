///<reference types="cypress"/>
import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-page';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro()
    })

    afterEach(() => {
        cy.screenshot()
    })

    it('Deve realizar cadastro com sucesso, usando função JS', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Leonardo Mantovaneli')
        cy.get('#email').type(email)
        cy.get('#phone').type('11977421351)')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //Resultado esperado
        cy.url().should('include', 'dashboard')
    });

    it('Deve realizar cadastro com sucesso, usando Faker', () => {
        let phone = faker.phone.number()
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type(phone)
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //Resultado esperado
        cy.get('#user-name').should('contain', nome)
        cy.url().should('include', 'dashboard')

    });

    it('Deve preencher cadastro com sucesso usando comando customizado', () => {
         let email = `teste${Date.now()}@teste.com`
         let nome = faker.person.fullName({ sex: 'female' })
        cy.preencherCadastro(
            nome,
            email,
            '11988888777',
            'Teste@123',
            'Teste@123'
        )
         cy.url().should('include', 'dashboard')
    })

    it('Deve fazer cadastro com sucesso usando Page Object', () => {
        let email = `teste${Date.now()}@teste.com`
        cadastroPage.preencherCadastro('Leonardo Mantovaneli', email, '11988777665', 'Senha123', 'Senha123')
        cy.url().should('include', 'dashboard')

    })

    it('Deve validar mensagem ao tentar cadastrar sem preencher nome', () => {
        cadastroPage.preencherCadastro('', 'leo@teste.com', '11988888777', 'Teste@123', 'Teste@123')
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')

     

})

})