module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // Add or modify rules as needed
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"], // Ensure TypeScript files are included
      rules: {
        // TypeScript-specific rules
      },
    },
  ],
};
