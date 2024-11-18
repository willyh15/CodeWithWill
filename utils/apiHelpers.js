// /utils/apiHelpers.js

import axios from "axios";

/**
 * Wrapper for making API requests using Axios.
 * Handles errors, headers, and response normalization.
 */

const defaultHeaders = {
  "Content-Type": "application/json",
};

/**
 * Make a GET request.
 * @param {string} url - API endpoint.
 * @param {Object} params - Query parameters.
 * @param {Object} headers - Additional headers.
 * @returns {Promise<any>} API response data.
 */
export async function getRequest(url, params = {}, headers = {}) {
  try {
    const response = await axios.get(url, {
      params,
      headers: { ...defaultHeaders, ...headers },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

/**
 * Make a POST request.
 * @param {string} url - API endpoint.
 * @param {Object} data - Request body.
 * @param {Object} headers - Additional headers.
 * @returns {Promise<any>} API response data.
 */
export async function postRequest(url, data = {}, headers = {}) {
  try {
    const response = await axios.post(url, data, {
      headers: { ...defaultHeaders, ...headers },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

/**
 * Make a PUT request.
 * @param {string} url - API endpoint.
 * @param {Object} data - Request body.
 * @param {Object} headers - Additional headers.
 * @returns {Promise<any>} API response data.
 */
export async function putRequest(url, data = {}, headers = {}) {
  try {
    const response = await axios.put(url, data, {
      headers: { ...defaultHeaders, ...headers },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

/**
 * Make a DELETE request.
 * @param {string} url - API endpoint.
 * @param {Object} headers - Additional headers.
 * @returns {Promise<any>} API response data.
 */
export async function deleteRequest(url, headers = {}) {
  try {
    const response = await axios.delete(url, {
      headers: { ...defaultHeaders, ...headers },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

/**
 * Error handling helper for API requests.
 * @param {Error} error - Error object.
 */
function handleError(error) {
  if (error.response) {
    console.error("API Error:", error.response.data);
    throw new Error(error.response.data.message || "API request failed.");
  } else if (error.request) {
    console.error("No response from server:", error.request);
    throw new Error("No response from server. Please try again.");
  } else {
    console.error("Request Error:", error.message);
    throw new Error("Something went wrong. Please try again.");
  }
}