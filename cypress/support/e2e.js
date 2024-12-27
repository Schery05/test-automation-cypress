import '@mmisty/cypress-allure-adapter/support';
import './commands'
// ***********************************************************

Cypress.Commands.add('login', (username, password) => { 
    cy.visit('https://www.demoblaze.com/')
// DECLARANDO VARIABLES
    cy.get('#login2').click()
//     //VALIDAR QUE SE MUESTRA EL MODAL DEL LOGIN
//     cy.get('.modal-content').should('be.visible')

//     cy.get('#loginusername').as('username');
//     cy.get('#loginpassword').as('password');
    
//   //  cy.get('#password').as('password')
//     //UTILIANDO LAS VARIABLES DECLARADAS PARA INGRESAR CREDENCIALES
//     cy.get('@username').type(username)
//     cy.get('@password').type(password)

//     cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()   

});
