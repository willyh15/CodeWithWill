// /utils/fetchAdminData.js

/**
 * Utility for managing admin panel data.
 * Provides methods for fetching, updating, and resetting configurations.
 */

// Default admin settings
const defaultSettings = {
  theme: "dark",
  layout: "grid",
  preloadImages: true,
  customizations: [],
};

/**
 * Fetch admin data from local storage or return default settings.
 * @returns {Object} Admin settings.
 */
export function fetchAdminData() {
  const savedData = localStorage.getItem("adminData");
  return savedData ? JSON.parse(savedData) : defaultSettings;
}

/**
 * Update admin data and save to local storage.
 * @param {Object} updates - Key-value pairs of settings to update.
 * @returns {Object} Updated settings.
 */
export function updateAdminData(updates) {
  const currentData = fetchAdminData();
  const updatedData = { ...currentData, ...updates };
  localStorage.setItem("adminData", JSON.stringify(updatedData));
  return updatedData;
}

/**
 * Reset admin data to default settings.
 * @returns {Object} Default settings.
 */
export function resetAdminData() {
  localStorage.setItem("adminData", JSON.stringify(defaultSettings));
  return defaultSettings;
}