/// <reference types = "cypress" />

Cypress.on('uncaught:exception', (err, ruunable) => {
    return false;
})

it('Editor login', () => {

    cy.visit('https://vreditor.istaging.com/');

    cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('eric@staging.com.tw');
    cy.get(':nth-child(2) > :nth-child(2) > .form-control').type('000000');

    cy.get('.btn').click();

    cy.wait(5000);


    // Be careful with this option {force : true}. It's possible to force your tests to pass when the element is actually not interactable in your application.
    /*
    cy.get('#buildingsList_0')
        .contains('刪除')
        .click({force : true});
    */

    cy.contains('刪除')
        .should('not.be.visible')

    cy.get('#buildingsList_0')
        .realHover();

    cy.contains('刪除')
        .should('be.visible')
        .click();

    cy.get('[style="background-color: transparent; position: fixed;"] > .i-modal-inner > .modal-content > .modal-content-buttons > .btn-primary')
        .click();
})