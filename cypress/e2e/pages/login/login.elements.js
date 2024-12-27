export class LoginElements{
    static get textboxes(){
        return{
            get username (){
            return cy.get('input#loginusername')
            },
            get password(){
            return cy.get('input#loginpassword')
            },
            get nameUser(){
               return cy.get('#nameofuser')
            }
        };
    }

    static get buttons(){
        return{
            get login(){
            return cy.get('div[id="logInModal"] button').eq(2);
            
            },
            get close(){
            return cy.get('div[id="logInModal"] button').eq(1) 
            }
        };
    }
}