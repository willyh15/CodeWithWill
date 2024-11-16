const { fetchBackground } = require("../utils/fetchBackground"); // Import from utils
const fs = require("fs");
const path = require("path");

async function fetchAndSaveBackground() {
  try {
    // Fetch a background image URL
    const imageUrl = await fetchBackground("abstract");

    if (imageUrl) {
      const outputDir = path.join(__dirname, "../public/backgrounds");

      // Ensure the directory exists
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      const filePath = path.join(outputDir, "background.jpg");

      // Save the URL to a file (or optionally download it)
      fs.writeFileSync(filePath, imageUrl);
      console.log("Background image URL saved successfully:", filePath);
    } else {
      console.error("No background image found.");
    }
  } catch (error) {
    console.error("Error fetching or saving background:", error);
  }
}

fetchAndSaveBackground();
