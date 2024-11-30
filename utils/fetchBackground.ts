export const fetchBackground = async () => {
  try {
    const response = await fetch("/api/pexels");
    if (!response.ok) throw new Error("Failed to fetch background image");
    return await response.json();
  } catch (error) {
    console.error("Fetch Background Error:", error);
    return null;
  }
};
