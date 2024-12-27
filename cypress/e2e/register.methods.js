import { RegisterElements } from "./register.elements";
export class RegisterMethods {
   static insertar (username, password, email){
       RegisterElements.textboxes.username.type(username)
       cy.wait(1000)
       RegisterElements.textboxes.password.type(password)
   }

   static clicarBoton () {
    RegisterElements.buttons.registerButton.click()
       
   }

   static registrarUser (username, password){
       this.insertar(username, password)
       this.clicarBoton()
   }
}