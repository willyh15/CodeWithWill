const globals = require("globals");

module.exports = {
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
    next: require("eslint-plugin-next"), // Ensure this is correctly included
  },
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "next/no-html-link-for-pages": "off",
  },
};