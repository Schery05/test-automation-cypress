
// const { defineConfig } = require("cypress");
import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";
// import allureWriter from "@shelex/cypress-allure-plugin/writer";
// const allureWriter = require('@shelex/cypress-allure-plugin/writer');


// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       console.log("Allure plugin loaded!"); // Confirma que se carga el plugin
//       // implement node event listeners here
//       allureWriter(on, config);
//       return config;
//     },
//     env: {
//     //  allureReuseAfterSpec: true,
//       allure: true, // Habilita Allure
//       allureResultsPath: 'allure-results' // Define la ruta de salida de resultados
//   },
//   },
// });


//const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default defineConfig({
  e2e: {
    setupNodeEvents: (on, config) => {
      allureCypress(on, config);

      return config;
    },
    env: {
      allureReuseAfterSpec: true,
      allureAttachRequests: true,
      allureClearSkippedTests: false,
      allureAddVideoOnPass: false,
      allure: true, // Habilita Allure
      allureResultsPath: 'allure-results', // Directorio de resultados
    },
  },
});
