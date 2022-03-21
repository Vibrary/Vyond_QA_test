/// <reference types = "cypress" />

Cypress.on('uncaught:exception', (err, ruunable) => {
    return false;
})

it('Progress bar test', () => {

    let building_id = [
        '21c993a4-0bbd-4a56-93c0-4d8dc398c58a',
        '40beb30e-d564-4f23-9664-3f169f51cf2c',
        '2dd09cad-e6cb-4532-bc91-9e54e01841b7',
        '490d359a-e01e-48e2-9e4e-cb64e0729234',
        '41ffe712-1fb2-47b5-97d1-a2e38a4b63b8',
        'bff5e7ad-befd-4f88-b4c1-f32d7e43c59e',
        'f240ef86-91cb-435d-affb-5b34a75a119f',
        '91107534-23b7-4fa6-8348-b2d71fb7edb5',
        'ad030b93-851d-45db-a00c-e308519004c6',
        '25a347de-4312-4228-802e-2479f0cb76f7',
        '8defaf93-7d8f-4591-9b17-affb212aba81',
        'dfdffeb1-1719-4944-81b0-70041ee0349e',
        'b1de15d5-81b8-4192-bde2-36a6cf910a04',
        'd20eb706-8941-4220-b362-223a42dcd877',
        '27913f51-23a6-41d9-bcf5-d92bf67ea907',
        'c8dfa30a-fafe-4fa6-93f2-11a57614ac17',
        '4dab2799-148c-4d8a-a937-d32a83d743a9',
        '91f7516b-93b6-49e9-8715-0246ee199e3b',
        'b77b94d3-d3ad-42b7-8f96-b26035acbbd2',
        '2b9b3ce9-7ea2-4cae-aa29-52e2040296c4',
        '77581ba3-f7c5-40d6-a32b-33480aad9db4',
        'e23291a3-f6fd-4a0c-8081-52a8b0e9ff10',
        '7a966f00-913b-4945-a1d7-b54d4b13a257',
        '50e3666e-dc8d-4591-b2a5-72bdc0286ac5',
        '4d896a54-1d12-40f9-8075-da01aa32363f',
        '4df67f67-0e4e-4a7f-9609-144502535616',
        '5e888a34-d114-44a7-af15-34a934884c9c',
        'c7a7d680-661a-4178-9c58-6d882f75906f',
        '3215f018-36b6-48b2-b353-64148ff9c38e',
        '02378435-0ed3-4538-8593-85335faf944a'
    ];

    for( var i = 0; i < 30; i++ ) {
        cy.visit('https://d37nea6u1j4olr.cloudfront.net/jacbs/'+building_id[i]+'?autorotate=false&panobar=false&jacbs2022_account=QA_test_Chrome');

        cy.wait(10000);

        cy.contains('逛展進度')
            .should('contain', (i+1) + ' / 30')
    }
    
})