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
    next: require("eslint-plugin-next"), // Ensure this is included
  },
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "next/no-html-link-for-pages": "off",
  },
};