/// <reference types = "cypress" />

Cypress.on('uncaught:exception', (err, ruunable) => {
    return false;
})

it('Google test', function() {

    cy.visit('https://www.google.com/');
    cy.get('.gLFyf', {timeout: 6000}).type('day by day blue{enter}');
    
    /* this action will cause 'cross origin' error */
    // cy.get(':nth-child(2) > :nth-child(1) > .mLmaBd > .pwxRSe > [jscontroller="CCowhf"] > .X5OiLe > .sI5x9c > .WZIVy > .uOId3b > .fc9yUc').click();

    cy.wait(3000);
    cy.contains('影片').click();


})

it('Login test', function() {

    cy.visit({
        url : 'https://vreditor.istaging.com/'
    });
    cy.get(':nth-child(1) > .form-control').type('eric11037');
    cy.get(':nth-child(2) > .form-control').type('000000');
    cy.get('.buttons-container').find('.btn').click();
    //cy.get('.btn').click();

})

it.only('Upload test', () => {
    cy.visit('https://practice.automationbro.com/cart/');

    // upload file to the input field
    cy.get('input[type=file]')
        .attachFile('test (1).jpg');

    // click on the upload button
    cy.get("input[value='Upload File']")
        .click();

    // Assert the file name
//    cy.get('')
})