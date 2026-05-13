///<reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
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

    it.only('Deve preencher cadastro com sucesso usando comando customizado', () => {
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

})