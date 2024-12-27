export class RegisterElements {
    static get  textboxes() {
        return {
            get username() {
                return cy.get('#sign-username');
            },
            get password() {
                return cy.get('#sign-password');
            },
        };
    }

    static get buttons() {
        return {
            get registerButton() {
                return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary');
            },
            get close() {
                return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary');
            },
        };
    }
}