
Cypress.on('uncaught:exception', (err, ruunable) => {
    return false;
})

describe('Login to JOOR showroom', () => {

    it('Login_JOOR', () => {

        cy.visit('https://www.jooraccess.com/showroom/collections')

        //cy.wait(10000);

        cy.get('#username')
            .type('istaging-ysl@joortest.com');

        cy.get('#password')
            .type('Testistaging123!');

        cy.get('#kc-login')
            .click();

        cy.visit('https://www.jooraccess.com/showroom/collections/U2hvd3Jvb21Db2xsZWN0aW9uOjMzMTU=');

    })


})