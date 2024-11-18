// /scripts/preloadImages.js

import axios from "axios";
import fs from "fs";
import path from "path";

const API_KEY = process.env.PEXELS_API_KEY;
const OUTPUT_DIR = path.resolve("./public/preloaded-images");

// Define queries to preload images
const queries = ["technology", "abstract", "nature", "cityscape", "space"];

/**
 * Fetch images from Pexels based on the given query.
 * @param {string} query - Search term for images.
 * @returns {Promise<string[]>} Array of image URLs.
 */
async function fetchImages(query) {
  const endpoint = `https://api.pexels.com/v1/search?query=${query}&per_page=5`;
  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: API_KEY,
      },
    });
    return response.data.photos.map((photo) => photo.src.landscape);
  } catch (error) {
    console.error(`Error fetching images for query "${query}":`, error.message);
    return [];
  }
}

/**
 * Save image to the local directory.
 * @param {string} url - Image URL.
 * @param {string} fileName - File name to save the image as.
 */
async function saveImage(url, fileName) {
  try {
    const response = await axios.get(url, { responseType: "stream" });
    const outputPath = path.join(OUTPUT_DIR, fileName);

    await new Promise((resolve, reject) => {
      const writeStream = fs.createWriteStream(outputPath);
      response.data.pipe(writeStream);
      writeStream.on("finish", resolve);
      writeStream.on("error", reject);
    });

    console.log(`Saved: ${fileName}`);
  } catch (error) {
    console.error(`Error saving image "${fileName}":`, error.message);
  }
}

/**
 * Main function to preload images.
 */
async function preloadImages() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Fetch and save images for each query
  for (const query of queries) {
    const images = await fetchImages(query);
    for (const [index, imageUrl] of images.entries()) {
      const fileName = `${query}-${index + 1}.jpg`;
      await saveImage(imageUrl, fileName);
    }
  }

  console.log("Preloading complete!");
}

// Execute the script
preloadImages();