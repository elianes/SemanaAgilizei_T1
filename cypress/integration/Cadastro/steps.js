/// <reference types="cypress" />

let Chance = require('chance')  //npm install -D chance
let chance =  new Chance()
// steps/passos comuns a mais de uma feature

Given(/^que acesso o site$/, () => {
	cy.server()
    cy.route('POST', '**/api.mlab.com/api/1/databases/userdetails/collections/newtable?**')
        .as('postNewtable');
    cy.route('POST', '**/api.mlab.com/api/1/databases/userdetails/collections/usertable?**')
        .as('postUsertable');
    cy.route('GET', '**/api.mlab.com/api/1/databases/userdetails/collections/newtable?**')
        .as('getNewtable');

    cy.visit('Register.html');
});

When(/^informar meus dados$/, () => {
	cy.get('input[placeholder="First Name"]').type(chance.first())
    cy.get('input[ng-model^=Last]').type(chance.last())  //^ começa com, $ termina com e * palavra que contain 
    cy.get('input[ng-model^=Email]').type(chance.email())
    cy.get('input[ng-model^=Phone]').type(chance.phone({formatted: false}))

    cy.get('input[value=FeMale]').check()
    cy.get('input[type=checkbox]').check('Cricket')
    cy.get('input[type=checkbox]').check('Hockey')

    cy.get('select#Skills').select('Javascript')
    cy.get('select#countries').select('Argentina')
    cy.get('select#country').select('Australia', { force: true})
    cy.get('select#yearbox').select('1985')
    cy.get('select[ng-model^=month]').select('January')
    cy.get('select#daybox').select('16')
    cy.get('input#firstpassword').type('Agilizei@2020')
    cy.get('input#secondpassword').type('Agilizei@2020')

    //cy.get('input#imagesrc').attachFile('imagem-foto.png');
});

When(/^salvar$/, () => {
    cy.get('button#submitbtn').click()
});

Then(/^deve ser cadastrado com sucesso$/, () => {
    cy.wait('@postNewtable').then((resNewtable) => {
        expect(resNewtable.status).to.eq(200)          
    })

    cy.wait('@postUsertable').then((resUsertable) => {
        expect(resUsertable.status).to.eq(200)          
    })

    cy.wait('@getNewtable').then((resNewtable) => {
        expect(resNewtable.status).to.eq(200)          
    })

    cy.url().should('contain', 'WebTable')
});
