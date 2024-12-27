//import { LoginElements } from "./login.elements";   
import { HomePageMethods } from "./pages/home_page/homepage.methods";
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

describe('HomePage', () => {

    // it('Iniciar sesion con credenciales incorrectas', () => {
    //     cy.visit('https://www.demoblaze.com/');
    //     cy.get('a[data-target="#logInModal"]').click();
    //     LoginMethods.login('standard_user', 'dfikj')
    //    // cy.wait(20000);
    // })

    
    it('Seleccionar producto en HomePage', () => {
        cy.visit('https://www.demoblaze.com/');
        HomePageMethods.clicarCategoriaPhones();
        HomePageMethods.clicarCategoriaLaptops();
        HomePageMethods.clicarCategoriaMonitors();
        HomePageMethods.clicarProducto('iPhone 6 32gb');
    })
})