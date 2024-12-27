export class productDetailsElements {
    static get addToCartButton() {
        return cy.contains('a', 'Add to cart')
    }

    static get productDescription() {
        return cy.get('div#more-information')
    }
}