/// <reference types = "cypress" />

import {LoginEditorPage} from '../../pages/Login_Editor_pages'

Cypress.on('uncaught:exception', (err, ruunable) => {
    return false;
})

const loginPage = new LoginEditorPage();

it('Editor login', () => {

    loginPage.navigate('https://vreditor.istaging.com/');
    loginPage.enterUsername('eric@staging.com.tw');
    loginPage.enterPassword('000000');
    loginPage.clickLogin();

})