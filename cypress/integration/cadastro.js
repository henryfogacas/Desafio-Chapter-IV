/// <reference types="cypress" />

var Chance = require('chance')
var chance = new Chance()

describe('Logar email', () => {
    it('Quando eu informar o email no campo de novo cadastro, então deve redirecionar para a tela com todos os dados necessários para criar seu cadastro', () => {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')

        cy.get('input[name=email_create]').type(chance.email())
        cy.get('#SubmitCreate > span').click()
    });
    
describe('Completar dados do cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
        
        cy.get('#id_gender1').check()
        cy.get('input[name=customer_firstname]').type(chance.first())
        cy.get('input[name=customer_lastname]').type(chance.last())
        cy.get('input[name=passwd]').type('Testsenha123')
        cy.get('select[name=days]').select('21',{force: true})
        cy.get('select[name=months]').select('July',{force: true})
        cy.get('select[name=years]').select('2006',{force: true})

        cy.get('input[name=firstname]').type(chance.first())
        cy.get('input[name=lastname]').type(chance.last())
        cy.get('input[name=company]').type('TrindTech')
        cy.get('input[name=address1]').type(chance.address())
        cy.get('input[name=city]').type('Gravataí')
        cy.get('select[name=id_state]').select('Alabama',{force: true})
        cy.get('input[name=postcode]').type('21070')
        cy.get('input[name=phone_mobile]').type('999391363')
        cy.get('input[name=alias]').type(chance.address())
        
        cy.get(' #submitAccount > span').click()
       
        cy.url().should('contain', 'my-account')


    });
});
});