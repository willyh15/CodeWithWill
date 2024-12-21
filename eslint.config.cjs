const globals = require("globals");

module.exports = [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      react: require("eslint-plugin-react"),
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      "next": require("eslint-plugin-next"), // Add the Next.js plugin
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

      // Next.js Rules
      "next/no-html-link-for-pages": "off",
    },
  },
];