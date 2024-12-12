import cypress from "cypress"

export class Logger {
   static pasoNumero (numero) {
        const message = `Paso # ${numero}`
    cy.log(`**${message}**`)
    cy.allure().step(message)
    }

    static paso (desctiption) {
        const message = `Paso - ${desctiption}`
    cy.log(`**${message}**`)
    cy.allure().step(message)
    }

    
    static verificacion (desctiption) {
        const message = `Paso - ${desctiption}`
    cy.log(`**${message}**`)
    cy.allure().step(message)
    }   
}   