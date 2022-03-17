/// <reference types = "cypress" />

Cypress.on('uncaught:exception', (err, ruunable) => {
    return false;
})

it('Editor login', () => {

    cy.visit('https://vreditor.istaging.com/');

    cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('eric@staging.com.tw');
    cy.get(':nth-child(2) > :nth-child(2) > .form-control').type('000000');

    cy.get('.btn').click();

})