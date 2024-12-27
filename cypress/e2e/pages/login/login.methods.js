import { LoginElements } from "./login.elements"
export class LoginMethods{
    static insertUser(user){
        LoginElements.textboxes.username.invoke(user)
    }
    static insertPassword(password){
        LoginElements.textboxes.password.invoke(password)
    }

    static clicarLogin(){
        LoginElements.buttons.login.click()
    }

    static validarLogeoCorrecto(){
        LoginElements.textboxes.nameUser.should('be.visible');
    }

    static validarNoLogeo(){
        LoginElements.textboxes.nameUser.should('not.be.visible');
    }

    static login(username, password){
        this.insertUser(username)
        //VAMOS A PROBAR EL METODO INVOKE PARA VER SI SE SOLUCIONA EL ERROR DE QUE NO ESCRIBE A VECES EN EL CAMPO CONTRASEÑA O QUE ESCRIBE EL USERNAME INCOMPLETO
        //cy.wait(1000)
        this.insertPassword(password)
        this.clicarLogin()
    }
}