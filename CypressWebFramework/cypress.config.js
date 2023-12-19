const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "uo9779",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
    screenshotsFolder: 'cypress/screenshots',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 10000,
    reporter: "mochawesome",
    env: {
      url: "https://www.target.com",
    },
    retries: {
      runMode: 1
    }
  },
});
