const { fetchBackground } = require("../utils/fetchBackground");
const fs = require("fs");
const path = require("path");

async function fetchAndSaveBackground() {
  const imageUrl = await fetchBackground("abstract");
  if (imageUrl) {
    const filePath = path.join(__dirname, "../public/backgrounds/background.jpg");
    fs.writeFileSync(filePath, imageUrl);
    console.log("Background image saved successfully:", filePath);
  } else {
    console.error("Failed to fetch and save background image.");
  }
}

fetchAndSaveBackground();