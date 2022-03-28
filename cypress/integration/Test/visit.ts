
Cypress.on('uncaught:exception', (err, ruunable) => {
    return false;
})


it('visit', () => {

    cy.visit('https://livetour.istaging.com/7536259b-232e-43c7-ad0f-ac99bad89802?group=5a49f680-73a8-49e4-b417-56599091cee5&index=1');
    cy.wait(10000);

})