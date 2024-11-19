import axios from "axios";
import fs from "fs/promises";
import path from "path";

// Replace with your own Pexels API logic
const API_KEY = process.env.PEXELS_API_KEY;
const OUTPUT_DIR = "./public/preloaded-images";
const queries = ["nature", "technology", "abstract"];

async function preloadImages() {
  try {
    // Ensure output directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    for (const query of queries) {
      const response = await axios.get("https://api.pexels.com/v1/search", {
        headers: { Authorization: API_KEY },
        params: { query, per_page: 5 },
      });

      for (const photo of response.data.photos) {
        const fileName = `${query}-${photo.id}.jpg`;
        const filePath = path.join(OUTPUT_DIR, fileName);

        const imageResponse = await axios.get(photo.src.original, {
          responseType: "arraybuffer",
        });

        await fs.writeFile(filePath, imageResponse.data);
        console.log(`Saved: ${fileName}`);
      }
    }
    console.log("Preloading completed successfully!");
  } catch (error) {
    console.error("Error preloading images:", error.message);
    process.exit(1);
  }
}

preloadImages();
