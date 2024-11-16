import axios from "axios";

export async function fetchBackground(query: string = "abstract") {
  const apiKey = process.env.PEXELS_API_KEY;

  if (!apiKey) {
    console.error("Pexels API Key is not set. Please ensure it's available as an environment variable.");
    return null; // Return null if the API key is missing
  }

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
      console.error("No images found for the query:", query);
      return null; // Fallback to null if no images are found
    }
  } catch (error) {
    console.error("Error fetching background image:", error.message);
    return null; // Fallback to null in case of an error
  }
}