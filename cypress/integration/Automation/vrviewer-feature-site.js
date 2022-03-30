/// <reference types = 'cypress' />

Cypress.on('uncaught:exception', (err, ruunable) => {
    return false;
})

it('vrviewer-feature-site', () => {

    cy.visit({
        url : 'https://jenkins.istaging.com/view/viewer/job/vrviewer-feature-site/build?delay=0sec',
        
        /* use 'failOnStatusCode' for redirecturl */
        failOnStatusCode : false
    }).wait(3000);

    cy.get(':nth-child(1) > .setting-main > div > .setting-input').clear().type('feature/220310-ar-maker-tag');
    cy.get('#yui-gen1-button').click();
})