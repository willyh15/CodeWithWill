const globals = require("globals");

module.exports = [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Replaces `env.browser: true`
        ...globals.es2021, // Replaces `env.es2021: true`
      },
      ecmaVersion: "latest", // Same as `ecmaVersion: 2021`
      sourceType: "module", // Specifies ES module system
      ecmaFeatures: {
        jsx: true, // Enables JSX
      },
    },
    plugins: {
      react: require("eslint-plugin-react"),
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    rules: {
      // Add your custom rules here
    },
  },
];
