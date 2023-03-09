const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ctr8r3',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
