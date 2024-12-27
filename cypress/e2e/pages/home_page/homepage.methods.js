import { HomePageElements } from "./hompage.elements";

export class HomePageMethods {
    static clicarCategoriaPhones() {
        HomePageElements.categories.phones.click();
        HomePageElements.categories.monitors.click();
    }

    static clicarCategoriaLaptops() {
        HomePageElements.categories.laptops.click();
    }

    static clicarCategoriaMonitors() {
        HomePageElements.categories.monitors.click();
    }

    static clicarProducto(productName) {
        HomePageElements.products(productName).click();
    }

    static validarLink(){
        cy.url().should('eq', 'https://www.demoblaze.com/#')
    }

}