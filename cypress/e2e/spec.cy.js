//import { LoginElements } from "./login.elements";   
import { LoginMethods } from "./pages/login/login.methods";

describe('Login', () => {

    // it('Iniciar sesion con credenciales incorrectas', () => {
    //     cy.visit('https://www.demoblaze.com/');
    //     cy.get('a[data-target="#logInModal"]').click();
    //     LoginMethods.login('standard_user', 'dfikj')
    //    // cy.wait(20000);
    // })

    
    it('Iniciar sesion con credenciales incorrectas', () => {
        cy.visit('https://www.demoblaze.com/');
        cy.get('a[data-target="#logInModal"]').click();
        LoginMethods.login('standard_user', 'dfikj');
        LoginMethods.validarNoLogeo();
   
        }),
   
        it('Iniciar sesion con credenciales correctas', () => {
            const usuario ='yamilet';
            const password = '12345678';
           cy.visit('https://www.demoblaze.com/');
           cy.get('a[data-target="#logInModal"]').click();
           LoginMethods.login(usuario, password);
           LoginMethods.validarLogeoCorrecto();
   
           })
})