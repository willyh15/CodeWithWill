import fs from "fs";
import path from "path";
import axios from "axios";
import { PEXELS_API_KEY } from "../utils/constants.js";

const queries = ["technology", "business", "creativity"];
const outputDir = path.join(process.cwd(), "public", "preloaded-images");

async function preloadImages() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const query of queries) {
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=1`;
    try {
      const response = await axios.get(url, {
        headers: { Authorization: PEXELS_API_KEY }
      });
      const photos = response.data.photos;

      if (photos.length) {
        const imageUrl = photos[0].src.original;
        const imagePath = path.join(outputDir, `${query}.jpg`);
        const writer = fs.createWriteStream(imagePath);

        const imageResponse = await axios({
          url: imageUrl,
          method: "GET",
          responseType: "stream"
        });

        imageResponse.data.pipe(writer);

        await new Promise((resolve, reject) => {
          writer.on("finish", resolve);
          writer.on("error", reject);
        });

        console.log(`Saved: ${query}`);
      }
    } catch (error) {
      console.error(`Failed to fetch images for ${query}:`, error.message);
    }
  }
}

preloadImages();