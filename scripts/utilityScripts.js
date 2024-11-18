// /scripts/utilityScripts.js

import fs from "fs";
import path from "path";

const CACHED_DIRS = [
  "./public/preloaded-images",
  "./.next/cache",
];

/**
 * Clears specified cache directories.
 */
function clearCache() {
  CACHED_DIRS.forEach((dir) => {
    const resolvedPath = path.resolve(dir);
    if (fs.existsSync(resolvedPath)) {
      fs.rmSync(resolvedPath, { recursive: true, force: true });
      console.log(`Cleared cache: ${resolvedPath}`);
    } else {
      console.warn(`Cache directory does not exist: ${resolvedPath}`);
    }
  });
  console.log("Cache cleared successfully.");
}

/**
 * Resets application data (if needed).
 */
function resetData() {
  console.log("No data reset logic implemented yet.");
}

/**
 * Main function to execute utilities.
 */
async function runUtilities() {
  console.log("Running utility scripts...");
  clearCache();
  resetData();
}

runUtilities();