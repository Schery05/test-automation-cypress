import { productDetailsElements } from "./productDetails.elements";

export class productDetailsMethods{
    static productDescriptionVisible() {
        productDetailsElements.productDescription().should('be.visible')
    }
    static addToCartProduct() {
        productDetailsElements.addToCartButton().should('be.visible');
        productDetailsElements.addToCartButton().click();
    }
}