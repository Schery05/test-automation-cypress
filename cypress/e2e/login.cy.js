describe('Login', ()=> {


     it('Iniciar sesion con credenciales incorrectas', () => {
        //cy.allure().step('Step 1: Start the test');
    //   cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
     cy.login('standard_user', 'secret_saucs')
     cy.get('#errorl').should('be.visible')
        //cy.allure().step('Enter invalid credentials');

    //cy.get('.error-message-container').should('be.visible')

     })
        //      cy.visit('https://www.saucedemo.com/')
    //   //  DECLARANDO VARIABLES
    //      cy.get('#user-name').as('username')
    //      cy.get('#password').as('password')
    //      //UTILIANDO LAS VARIABLES DECLARADAS PARA INGRESAR CREDENCIALES
    //      cy.get('@username').type('standard_user')
    //      cy.get('@password').type('secret_sauce')

    //      cy.get('#login-button').click()
    //      cy.get('.error-message-container').should('be.visible')
    //  })

    //  it('Validar logo de la pagina de login', () => {
    //      cy.visit('https:www.saucedemo.com/')
    //      cy.get('#user-name').as('username')
    //      cy.get('.login_logo').contains('Swag Labs')
    //      cy.contains('div', '.login_logo').then(title => {
    //          cy.log(title.attr('class'))
    //      })
    //  })
})