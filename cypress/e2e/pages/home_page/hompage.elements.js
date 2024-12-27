export class HomePageElements{
    static get categories() {
        return {
            get phones() {
                return cy.contains('a', 'Phones')
            },
            get laptops() {
                return cy.contains('a', 'Laptops')
            },
            get monitors() {
                return cy.contains('a', 'Monitors')
            },
        };
    }

    //No tiene get este getter porque un get no debe poseer parametros y este get es dinamico
    static products(productName) {
        return cy.contains('a', 'Samsung galaxy s6')
    }
}