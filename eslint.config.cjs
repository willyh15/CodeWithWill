const globals = require("globals");

module.exports = [
  {
    languageOptions: {
      ecmaVersion: "latest", // Modern JavaScript
      sourceType: "module", // ES modules
      globals: {
        ...globals.browser, // Browser globals
        ...globals.es2021, // ES2021 globals
      },
    },
    plugins: {
      react: require("eslint-plugin-react"), // React linting
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"), // TypeScript linting
    },
    rules: {
      // Add custom rules here
    },
  },
];
