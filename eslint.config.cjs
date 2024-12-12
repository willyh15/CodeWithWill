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
      // Core ESLint Rules
      "no-unused-vars": "warn",
      "no-console": "off",

      // React Rules
      "react/react-in-jsx-scope": "off", // Not needed for Next.js
      "react/prop-types": "off",

      // TypeScript Rules
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];