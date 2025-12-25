const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Default to Next.js dev server port
    baseUrl: "http://localhost:3000",
    
    // Disable video to save resources in CI
    video: false,
    
    // Standard viewport for desktop testing
    viewportWidth: 1280,
    viewportHeight: 720,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});