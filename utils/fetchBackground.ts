export const fetchBackground = async (query: string = "abstract") => {
  try {
    const response = await fetch(`/api/pexels?query=${query}`);
    if (!response.ok) {
      throw new Error("Failed to fetch background image");
    }
    const data = await response.json();
    return data.background; // Ensure this matches the structure of your API response
  } catch (error) {
    console.error("Fetch Background Error:", error);
    return null;
  }
};
