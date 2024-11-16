import axios from "axios";

export async function fetchBackground(query: string = "abstract") {
  const apiKey = process.env.PEXELS_API_KEY;
  const endpoint = `https://api.pexels.com/v1/search?query=${query}&per_page=1`;

  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: apiKey,
      },
    });

    const photos = response.data.photos;
    if (photos.length > 0) {
      return photos[0].src.landscape; // Return the landscape version of the image
    } else {
      throw new Error("No images found.");
    }
  } catch (error) {
    console.error("Error fetching background image:", error);
    return null; // Fallback to a default background
  }
}