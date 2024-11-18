// /utils/formValidation.js

/**
 * Utility for validating form inputs.
 * Provides reusable validation rules and error handling.
 */

// Validation rules
const rules = {
  required: (value) => value && value.trim() !== "" || "This field is required.",
  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Enter a valid email address.",
  minLength: (min) => (value) =>
    value.length >= min || `Minimum length is ${min} characters.`,
  maxLength: (max) => (value) =>
    value.length <= max || `Maximum length is ${max} characters.`,
  custom: (validator, message) => (value) =>
    validator(value) || message || "Invalid input.",
};

/**
 * Validate a single field with specified rules.
 * @param {string} value - Input value to validate.
 * @param {Array<string|Function>} validations - List of validation rules.
 * @returns {string|null} Error message or null if valid.
 */
export function validateField(value, validations = []) {
  for (let rule of validations) {
    const error = typeof rule === "function" ? rule(value) : rules[rule](value);
    if (error !== true) return error;
  }
  return null;
}

/**
 * Validate multiple fields in a form.
 * @param {Object} fields - Key-value pairs of field names and their values.
 * @param {Object} validations - Key-value pairs of field names and their rules.
 * @returns {Object} Errors for each invalid field.
 */
export function validateForm(fields, validations) {
  const errors = {};
  Object.keys(validations).forEach((field) => {
    const error = validateField(fields[field], validations[field]);
    if (error) errors[field] = error;
  });
  return errors;
}