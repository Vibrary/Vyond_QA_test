/// <reference types = "cypress" />

Cypress.on('uncaught:exception', (err, ruunable) => {
    return false;
})

describe('test `Copy to` function', () => {
    it('Copy the video to a destination', () => {

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

        cy.wait(10000);

        // Perform `copy` action
        cy.get('.video-list-view__action__content > :nth-child(2) > .tooltip-trigger')
            .click();
        
        cy.get(':nth-child(8) > .StyledMenuItem_mainRow__3I73_')
            .click();

        cy.get('.list__item')
            .click();

        cy.get('.button--primary')
            .click();

        cy.get('.Snackbar_content__3XEtA > span')
            .should('contain', '1 item copied to Your Videos');

        // Go back to the video list
        cy.get('.TopBar__BackFromSearchAnchor-sc-111cue1-1')
            .click();

        cy.wait(10000);

        // Check if the video has been copied correctly
        cy.get(':nth-child(1) > .card__content > .card__content__title-container > .card__content__title > .card__content__title__text')
            .should('contain', 'Copy of test');

    })

})

describe('test `Delete` function', () => {
    it('Delete the video to `trash`', () => {

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

        cy.wait(10000);

        // Perform `Delete` action
        cy.get(':nth-child(1) > .video-list-view__action > .video-list-view__action__content > :nth-child(2) > .tooltip-trigger')
            .click();

        cy.get(':nth-child(12) > .StyledMenuItem_mainRow__3I73_')
            .click();

        cy.get('.button--primary')
            .click();
        
        cy.get('.Snackbar_content__3XEtA')
            .should('contain', '1 item moved to Trash');

        // Go back to the video list
        cy.get('.TopBar__BackFromSearchAnchor-sc-111cue1-1')
            .click();

        cy.wait(10000);

        // Go to `trash` and check if the deleted video exists in `trash`
        cy.get('.SidebarItem_item__3b4Ez')
            .click().wait(10000);

        cy.get('.video-list-view__name__video-title--link')
            .should('contain', 'Copy of test').wait(10000);  

    })

})

describe('test `Move to` function', () => {
    it('Move the video to `test` folder', () => {

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

        cy.wait(10000);

        // Perform `Move to` action
        cy.get('.video-list-view__action__content > :nth-child(2) > .tooltip-trigger')
            .click();

        cy.get(':nth-child(9) > .StyledMenuItem_mainRow__3I73_')
            .click();

        cy.get('.list__item > .icon')
            .click();

        cy.get('.list__item')
            .click();

        cy.get('.button--primary')
            .click();

        cy.get('.Snackbar_content__3XEtA > span')
            .should('contain', '1 item moved to test');

        // Go back to the video list
        cy.get('.TopBar__BackFromSearchAnchor-sc-111cue1-1')
            .click();

        cy.wait(10000);

        // Go to `test` folder to check if the video exists
        cy.get('.video-list-view__name__folder-title--link')
            .click();

        cy.get('.video-list-view__name__video-title--link')
            .should('contain', 'test');


    })

})