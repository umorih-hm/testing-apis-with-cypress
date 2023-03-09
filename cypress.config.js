const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://todo-app-barkend.herokuapp.com/',
    specPattern: 'cypress/e2e/api-tests',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
