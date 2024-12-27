import { RegisterMethods } from "./register.methods";

it('Regitrar usuario con todos los campos requeridos', () => {
    cy.visit('https://www.demoblaze.com/');
    cy.get('#signin2').click();
    RegisterMethods.registrarUser('yamilet', '12345678');

    //cy.allure().step('Step 1: Start the test');
   //   cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
    //cy.login('standard_user', 'secret_saucs')
    //cy.get('#errorl').should('be.visible')
       //cy.allure().step('Enter invalid credentials');

   //cy.get('.error-message-container').should('be.visible')

    })