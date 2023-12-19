const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/',
    "chromeWebSecurity": false,
    screenshotsFolder: 'cypress/screenshots',
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 10000,
    reporter: "mochawesome",
    retries: {
      runMode: 1
    }
  },
});


