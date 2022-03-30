
Cypress.on('uncaught:exception', (err, ruunable) => {
    return false;
})


it('visit', () => {

    cy.visit('https://livetour.istaging.com/d7ec4692-61c1-4160-a7f2-98e36e406314?pilot=TzbfL09ymFL4CogI7eKE&index=1');
    cy.wait(5000);

})