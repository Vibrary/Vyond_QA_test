/// <reference types = "cypress" />

import {LoginEditorPage} from '../../pages/Login_Editor_pages'

Cypress.on('uncaught:exception', (err, ruunable) => {
    return false;
})

const loginPage = new LoginEditorPage();

it('Editor login', () => {

    loginPage.navigate('https://vreditor.istaging.com/');

    // select language
    cy.get('.lang-switcher')
        .select(0);

    cy.get('.lang-switcher')
        .should('contain', 'English');

    loginPage.enterUsername('eric_cypress');
    loginPage.enterPassword('000000');
    loginPage.clickLogin();
    

    // choose the latest LiveTour
    cy.get('.i-dropdown-2 > .btn')
        .click();

    cy.get('.dropdown-menu > :nth-child(5)')
        .click();

    cy.get('#buildingsList_0 > .i-building > .i-building-router')
        .click();

    cy.wait(5000);

    cy.get('.nav > :nth-child(2) > .nav-link')
        .click();

})