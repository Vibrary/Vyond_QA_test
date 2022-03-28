/// <reference types = 'cypress'/>

it('learning assertion', () => {

    cy.visit('https://example.cypress.io/');
    cy.contains('get').click();

    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.class', 'query-btn')
        .should('be.visible')
        .should('be.enabled');

    cy.get('#query-btn').invoke('attr', 'id')
        .should('equal', 'query-btn');


    cy.get('#query-btn')
        .should('contain', 'Button')
        .and('be.enabled');

    // Expect assertions   
    expect(true).to.be.true;

    let name = 'cypress';
    expect(name).to.be.equal('cypress');

    // Assert
    assert.equal(11037, '11037', 'not equal');
    assert.strictEqual(11037, 11037, 'not equal');


})