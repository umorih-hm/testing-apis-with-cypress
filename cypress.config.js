const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://todo-app-barkend.herokuapp.com/',
    specPattern: 'cypress/e2e/api-tests/**/*.cy.{js,jsx,ts,tsx}',
  },
});
