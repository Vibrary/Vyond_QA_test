/// <reference types = "cypress" />

Cypress.on('uncaught:exception', (err, ruunable) => {
    return false;
})

describe('test `login` function', () => {
    it('Login', () => {

        // visit Vyond and login
        cy.visit('https://www.vyond.com/');

        cy.get('#extra-nav-login')
            .click();

        cy.get(':nth-child(4) > ._33Cl1FkeSqDMuZuFH7iRsY > .Y_qmvdv3Ge3QVqjNwCegf > ._1-aXzsB0N8iZtU99JJYbAK')
            .type('inori.ocean@gmail.com');
    
        cy.get('.RBjiB3t43f2eqTmjzitc6')
            .click();

        cy.get(':nth-child(5) > ._33Cl1FkeSqDMuZuFH7iRsY > .Y_qmvdv3Ge3QVqjNwCegf > ._1-aXzsB0N8iZtU99JJYbAK')
            .type('xY123456789');

        cy.get('.RBjiB3t43f2eqTmjzitc6')
            .click();

        cy.wait(5000);

        cy.get('.hGQX4rpErmOklSxLc0s-q')
            .click();

        cy.wait(15000);

        // After login, use search bar to search `test` video
        cy.get('.TopBar__SearchButton-sc-111cue1-6')
            .click();
        
        cy.get('.HiddenTextField-sc-1bla01z-0')
            .type('test{enter}');

        
    })

})