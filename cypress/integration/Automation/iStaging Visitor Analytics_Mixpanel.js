/// <reference types = 'cypress' />

Cypress.on('uncaught:exception', (err, ruunable) => {
    return false;
})

it('Mixpanel', () => {

    cy.visit('https://visitor-analytics-dot-vr-cam-161603.uc.r.appspot.com/');

    cy.get('#input-23').type('03f89648-3453-477b-93b4-79af7f10a86f');
    cy.get('#input-28').click();
    cy.get(':nth-child(2) > :nth-child(2) > .v-btn').click();
    cy.get(':nth-child(3) > :nth-child(3) > .v-btn').click();
    cy.get('.v-picker__actions > .primary--text').click();

    /* Dev */
//    cy.get(':nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
    /* Prod */
    cy.get('.v-item--active > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();

    cy.get('.d-flex > .v-btn').click();

})